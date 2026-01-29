"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAppSelector } from "@/redux/hook";

/** Navbar cart icon with item count badge. Renders same on server and first client paint to avoid hydration mismatch. */
export default function CartIconBadge() {
  const [mounted, setMounted] = useState(false);
  const { cart_products } = useAppSelector((state) => state.cart);

  useEffect(() => {
    setMounted(true);
  }, []);

  const count = mounted
    ? cart_products.reduce((sum, p) => sum + (p.orderQuantity ?? 0), 0)
    : 0;

  return (
    <li className="d-flex align-items-center ms-3 ms-lg-4">
      <Link
        href="/cart"
        className="d-flex align-items-center position-relative"
        aria-label="Cart"
      >
        <i className="bi bi-cart3 fs-4" />
        {count > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-count-badge">
            {count}
          </span>
        )}
      </Link>
    </li>
  );
}
