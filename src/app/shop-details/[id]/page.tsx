import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/header/header-three";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import shop_bg from "@/assets/images/media/img_47.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_26.svg";
import ProductDetailsArea from "@/components/shop/product-details/product-details-area";
import { fetchProductById } from "@/services/products-api";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";

export const metadata: Metadata = {
  title: "Shop Details",
};

export default async function ShopDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProductById(id);
  if (!product) notFound();

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderThree />
        <main>
          <BreadcrumbOne
            title="Our Product Showcase"
            subtitle="Meet our products, guiding you through financial intricacies with precision"
            page="Shop"
            bg_img={shop_bg}
            shape={shape}
          />
          <ProductDetailsArea product={product} />
          <FancyBannerThree />
          <NewsletterBanner />
        </main>
        <FooterThree style_2={true} />
      </div>
    </Wrapper>
  );
}
