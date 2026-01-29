"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import Navbar from "./navbar";
import LoginModal from "@/components/common/login-modal";
import CartIconBadge from "@/components/common/cart-icon-badge";
import logo from "@/assets/images/logo/logo.svg";
import useSticky from "@/hooks/use-sticky";

const HeaderThree = () => {
  const { sticky } = useSticky();
  return (
    <>
      <header
        className={`theme-main-menu menu-overlay menu-style-three sticky-menu ${
          sticky ? "fixed" : ""
        }`}
      >
        <div className="inner-content">
          <div className="top-header position-relative">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  <Image src={logo} alt="logo" width={150} />
                </Link>
              </div>
              <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  <CartIconBadge />
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <Navbar />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* login modal start */}
      <LoginModal />
      {/* login modal end */}
    </>
  );
};

export default HeaderThree;
