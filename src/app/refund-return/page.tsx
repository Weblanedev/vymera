import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/header/header-three";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import shop_bg from "@/assets/images/media/img_47.jpg";
import shape from "@/assets/images/shape/shape_26.svg";
import RefundContent from "@/components/policy/refund-content";

export const metadata: Metadata = {
  title: "Refund & Return Policy - Vymera Limited",
  description:
    "Refund and Return Policy for Vymera Limited - Learn about our return process and refund policy.",
};

const RefundReturnPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderThree />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Refund & Return Policy"
            subtitle="We want you to be completely satisfied with your purchase. Learn about our return and refund process."
            page="Refund & Return"
            bg_img={shop_bg}
            shape={shape}
          />
          {/* breadcrumb end */}

          {/* refund content start */}
          <RefundContent />
          {/* refund content end */}
        </main>

        {/* footer start */}
        <FooterThree style_2={true} />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default RefundReturnPage;
