"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types/product-d-t";
import ProductFeature from "./product-feature";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_cart_product, decrement, increment } from "@/redux/features/cart";
import { add_to_wishlist } from "@/redux/features/wishlist";

/** Product detail page: image, title, price, quantity, Add to Cart. Supports API (string img) and optional details/reviews. */
const ProductDetailsArea = ({ product }: { product: IProduct }) => {
  const {
    img,
    related_images,
    reviews = [],
    quantity,
    price,
    details,
    sm_desc,
    title,
    old_price,
  } = product;
  const { orderQuantity } = useAppSelector((state) => state.cart);
  const mainImg = typeof img === "string" ? img : img.src;
  const thumbs = useMemo(
    () =>
      (related_images && related_images.length > 0
        ? related_images
        : [img]) as (string | import("next/image").StaticImageData)[],
    [related_images, img],
  );
  const [activeImg, setActiveImg] = useState<
    string | import("next/image").StaticImageData
  >(thumbs[0]);
  const activeImgSrc =
    typeof activeImg === "string" ? activeImg : activeImg.src;

  useEffect(() => {
    setActiveImg(thumbs[0]);
  }, [product.id, thumbs]);

  const dispatch = useAppDispatch();

  const handleImageActive = (
    src: string | import("next/image").StaticImageData,
  ) => {
    setActiveImg(src);
  };

  const specs =
    details?.specifications ?? sm_desc ?? "No specifications available.";
  const features = details?.main_features ?? [
    "Quality product",
    "Fast shipping",
  ];

  return (
    <div className="product-details-one mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div className="tab-content product-img-tab-content h-100">
              <div className="active h-100">
                <a className="w-100 h-100 d-flex align-items-center justify-content-center">
                  <Image
                    src={activeImgSrc}
                    alt={title}
                    className="lazy-img"
                    width={500}
                    height={500}
                    unoptimized={
                      typeof activeImg === "string" &&
                      activeImg.startsWith("http")
                    }
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-1 order-lg-1">
            <ul className="nav flex-lg-column product-img-tab">
              {thumbs.map((relImg, i) => {
                const src = typeof relImg === "string" ? relImg : relImg.src;
                return (
                  <li key={i} className="nav-item">
                    <button
                      onClick={() => handleImageActive(relImg)}
                      className={`nav-link ${activeImg === relImg ? "active" : ""}`}
                    >
                      <Image
                        src={src}
                        alt=""
                        className="m-auto lazy-img"
                        width={58}
                        height={76}
                        style={{ objectFit: "cover" }}
                        unoptimized={src.startsWith("http")}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-6 order-lg-3">
            <div className="product-info ps-xxl-5 md-mt-40">
              <div className="stock-tag">In Stock</div>
              <h2 className="product-name">{title}</h2>
              <ul className="style-none d-flex align-items-center rating">
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star"></i>
                </li>
                <li>
                  <Link href="#">({reviews.length} Customer Reviews)</Link>
                </li>
              </ul>
              <div className="price">
                {old_price && <del>${old_price}</del>} ${price}
              </div>
              <p className="availability">{quantity} Piece Available</p>
              <p className="description-text">{sm_desc}</p>
              <ul className="product-feature style-none">
                <li>Free delivery available</li>
                <li>Use promo-code and save up to 25%</li>
              </ul>
              <div className="customize-order">
                <div className="quantity d-flex align-items-center mt-40">
                  <h6>Quantity:</h6>
                  <div className="button-group">
                    <ul className="style-none d-flex align-items-center">
                      <li>
                        <button
                          onClick={() => dispatch(decrement())}
                          className="value-decrease"
                        >
                          -
                        </button>
                      </li>
                      <li>
                        <input
                          type="number"
                          value={orderQuantity}
                          readOnly
                          className="product-value val"
                        />
                      </li>
                      <li>
                        <button
                          onClick={() => dispatch(increment())}
                          className="value-increase"
                        >
                          +
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="button-group mt-30 d-sm-flex align-items-center">
                <button
                  onClick={() => dispatch(add_cart_product(product))}
                  type="button"
                  className="btn-four mt-15 me-sm-4 d-block"
                >
                  Add To Cart
                </button>
                <button
                  onClick={() => dispatch(add_to_wishlist(product))}
                  type="button"
                  className="btn-six mt-15 d-block"
                >
                  Add To wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="product-review-tab mt-130 lg-mt-100">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#item1"
                type="button"
                role="tab"
              >
                Description
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#item2"
                type="button"
                role="tab"
              >
                Technical Info
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#item3"
                type="button"
                role="tab"
              >
                Feedback
              </button>
            </li>
          </ul>
          <div className="tab-content mt-50 lg-mt-20">
            <div
              className="tab-pane fade show active"
              id="item1"
              role="tabpanel"
            >
              <div className="row gx-5">
                <div className="col-xl-6">
                  <h5>Specifications:</h5>
                  <p>{specs}</p>
                </div>
                <div className="col-xl-6">
                  <h5>Check product main features:</h5>
                  <ul className="style-none product-feature">
                    {features.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="item2" role="tabpanel">
              <div className="row gx-5">
                <div className="col-xl-6">
                  <h5>Check product main features:</h5>
                  <ul className="style-none product-feature">
                    {features.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-xl-6">
                  <h5>Specifications:</h5>
                  <p>{specs}</p>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="item3" role="tabpanel">
              <div className="row">
                <div className="col-xl-10">
                  <div className="user-comment-area">
                    {reviews.length === 0 ? (
                      <p>No reviews yet.</p>
                    ) : (
                      reviews.map((r, i) => (
                        <div
                          key={i}
                          className="single-comment d-flex align-items-top"
                        >
                          <div className="user-comment-data">
                            <h6 className="name">{r.name}</h6>
                            <ul className="style-none d-flex rating">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <li key={star}>
                                  <i
                                    className={
                                      star <= r.rating
                                        ? "bi bi-star-fill"
                                        : "bi bi-star"
                                    }
                                  ></i>
                                </li>
                              ))}
                            </ul>
                            <p>{r.review_text}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-80 lg-mt-50">
          <ProductFeature />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsArea;
