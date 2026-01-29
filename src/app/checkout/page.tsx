import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/header/header-three";
import CheckoutArea from "@/components/checkout/checkout-area";

export const metadata: Metadata = {
  title: "Checkout Page",
};

const CheckoutPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderThree />
        {/* header end */}
        <main>
          {/* checkout area start */}
          <CheckoutArea />
          {/* checkout area end */}
        </main>
      </div>
    </Wrapper>
  );
};

export default CheckoutPage;
