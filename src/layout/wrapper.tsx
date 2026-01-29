"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer as ToastContainerNamed } from "react-toastify";
import { animationCreate } from "@/utils/utils";
import BackToTopCom from "@/components/common/back-to-top-com";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { initialOrderQuantity } from "@/redux/features/cart";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

// Some bundlers expose ToastContainer as { default }; support both.
const ToastContainer =
  typeof ToastContainerNamed === "function"
    ? ToastContainerNamed
    : (ToastContainerNamed as { default?: React.ComponentType })?.default;

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    animationCreate();
  }, []);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    dispatch(initialOrderQuantity());
  }, [router, dispatch]);

  return (
    <>
      {children}
      <BackToTopCom />
      {mounted && typeof ToastContainer === "function" ? (
        <ToastContainer />
      ) : null}
    </>
  );
};

export default Wrapper;
