import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/header/header-three";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import shop_bg from "@/assets/images/media/img_47.jpg";
import shape from "@/assets/images/shape/shape_26.svg";
import PrivacyContent from "@/components/policy/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy - Vymera Limited",
  description:
    "Privacy Policy for Vymera Limited - Learn how we collect, use, and protect your personal information.",
};

const PrivacyPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderThree />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Privacy Policy"
            subtitle="Your privacy is important to us. Learn how we collect, use, and protect your information."
            page="Privacy Policy"
            bg_img={shop_bg}
            shape={shape}
          />
          {/* breadcrumb end */}

          {/* privacy content start */}
          <PrivacyContent />
          {/* privacy content end */}
        </main>

        {/* footer start */}
        <FooterThree style_2={true} />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default PrivacyPage;
