"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// internal
import portfolio_data from "@/data/portfolio-data";
import type { IPortfolio } from "@/types/portfolio-d-t";
import ImageLightBox from "../common/image-lightbox";
import Link from "next/link";

const imgStyle = { width: "100%", height: "auto" };

/** Single item block - same markup for grid and masonry to avoid hydration mismatch. */
function PortfolioItemBlock({
  item,
  index,
  onImagePopup,
}: {
  item: IPortfolio;
  index: number;
  onImagePopup: (i: number) => void;
}) {
  return (
    <div className="portfolio-item">
      <div className="portfolio-block-one mb-60 lg-mb-40">
        <div className="img-holder round-border">
          <Image
            src={item.img}
            style={imgStyle}
            alt={item.title}
            className="img-meta w-100 tran5s"
            sizes="(max-width: 572px) 100vw, 50vw"
          />
          <a
            className="fancybox expend d-flex align-items-center justify-content-center tran3s cursor-pointer"
            title="Click for large view"
            onClick={() => onImagePopup(index)}
          >
            <i className="bi bi-plus"></i>
          </a>
        </div>
        <div className="caption">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h6>
                <Link href="/shop" className="pj-title">
                  {item.title}
                </Link>
              </h6>
            </div>
            <div>
              <Link href="/shop" className="arrow tran3s">
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Products section. Masonry only after mount so server and client first paint match (avoids hydration error). */
const PortfolioOne = () => {
  const [mounted, setMounted] = useState(false);
  const portfolio_items = portfolio_data.filter(
    (p) => p.portfolio === "portfolio-one",
  );
  const images = portfolio_items.map((p) => p.img.src);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImagePopup = (i: number) => {
    setPhotoIndex(i);
    setOpen(true);
  };

  return (
    <>
      <div
        id="products"
        className="portfolio-one position-relative pt-150 lg-pt-80 pb-100 lg-pb-60"
      >
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-7">
                <div className="title-four mb-80 lg-mb-40">
                  <h2>Our Products</h2>
                </div>
              </div>
            </div>
            <div id="isotop-gallery-wrapper" className="column-two">
              <div className="grid-sizer"></div>
              {!mounted ||
              typeof ResponsiveMasonry !== "function" ||
              typeof Masonry !== "function" ? (
                <div className="row g-4">
                  {portfolio_items.map((item, i) => (
                    <div key={item.id} className="col-sm-6">
                      <PortfolioItemBlock
                        item={item}
                        index={i}
                        onImagePopup={handleImagePopup}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 0: 1, 572: 2, 992: 2 }}
                >
                  <Masonry gutter="40px">
                    {portfolio_items.map((item, i) => (
                      <PortfolioItemBlock
                        key={item.id}
                        item={item}
                        index={i}
                        onImagePopup={handleImagePopup}
                      />
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              )}
            </div>

            <div className="section-btn md-mt-10">
              <Link
                href="/shop"
                className="btn-nine rounded-circle d-inline-flex align-items-center justify-content-center tran3s"
              >
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* image light box start */}
      {typeof ImageLightBox === "function" && (
        <ImageLightBox
          images={images}
          visible={open}
          setVisible={setOpen}
          index={photoIndex}
          setIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default PortfolioOne;
