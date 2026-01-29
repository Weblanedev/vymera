"use client";

import React, { useEffect, useState } from "react";

const COUNTDOWN_SECONDS = 5;

interface OrderProcessingModalProps {
  open: boolean;
  onComplete: () => void;
}

/**
 * Modal shown when user clicks Place Order.
 * Displays spinner and message; after 5s countdown calls onComplete (clear cart, redirect, toast).
 */
export default function OrderProcessingModal({
  open,
  onComplete,
}: OrderProcessingModalProps) {
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    if (!open) {
      setSecondsLeft(COUNTDOWN_SECONDS);
      return;
    }
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [open, onComplete]);

  if (!open) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div
        className="bg-white rounded-3 shadow-lg p-5 text-center"
        style={{ maxWidth: 420 }}
      >
        <div
          className="spinner-border text-primary mb-3"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mb-2 fw-500">
          Processing your order. A verification code will be sent to your email
          or phone before your card is charged.
        </p>
        <p className="text-muted small mb-0">
          Completing in {secondsLeft} second{secondsLeft !== 1 ? "s" : ""}...
        </p>
      </div>
    </div>
  );
}
