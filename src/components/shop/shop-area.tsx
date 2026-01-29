"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchProducts } from "@/redux/features/products";
import usePagination from "@/hooks/use-pagination";
import { IProduct } from "@/types/product-d-t";
import Pagination from "@/ui/pagination";
import ProductItem from "./product-item";

const ShopArea = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state) => state.products,
  );
  const [sortFilter, setSortFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filterableProducts = useMemo(() => {
    let list = [...products];
    if (categoryFilter) {
      list = list.filter((item) => item.category === categoryFilter);
    }
    if (sortFilter === "low") {
      list = list.slice().sort((a, b) => a.price - b.price);
    } else if (sortFilter === "high") {
      list = list.slice().sort((a, b) => b.price - a.price);
    }
    return list;
  }, [products, sortFilter, categoryFilter]);

  const { currentItems, handlePageClick, pageCount } = usePagination<IProduct>(
    filterableProducts,
    9,
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (["low", "high"].includes(value)) {
      setSortFilter(value);
      setCategoryFilter((prev) => (value ? prev : ""));
    } else {
      setCategoryFilter(value);
    }
  };

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    return Array.from(set).sort();
  }, [products]);

  if (loading) {
    return (
      <div className="product-section-one mt-150 lg-mt-80 mb-150 lg-mb-60">
        <div className="container text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-section-one mt-150 lg-mt-80 mb-150 lg-mb-60">
        <div className="container text-center py-5">
          <p className="text-danger">{error}</p>
          <button
            type="button"
            className="btn-ten tran3s mt-3"
            onClick={() => dispatch(fetchProducts())}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-section-one mt-150 lg-mt-80 mb-150 lg-mb-60">
      <div className="container">
        <div className="shop-page-header d-lg-flex align-items-center justify-content-between">
          <p className="m0 md-pb-20">
            Showing{" "}
            <span className="fw-500 text-dark">1–{currentItems.length}</span> of{" "}
            <span className="fw-500 text-dark">
              {filterableProducts.length}
            </span>{" "}
            results
          </p>
          <ul className="shop-filter-one style-none d-md-flex align-items-center">
            <li className="me-md-3 sm-mb-10">
              <select
                value={sortFilter}
                onChange={(e) => setSortFilter(e.target.value)}
                className="theme-select-menu"
              >
                <option value="">Price</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
            </li>
            <li className="me-md-3 sm-mb-10">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="theme-select-menu"
              >
                <option value="">Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>

        <div className="products-wrapper mt-40">
          <div className="row gx-xxl-5">
            {currentItems?.map((product, i) => (
              <div
                key={product.id}
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-delay={`0.${i}s`}
              >
                <ProductItem product={product} />
              </div>
            ))}
          </div>

          {pageCount > 1 && (
            <div className="pagination-one mt-30 lg-mt-10">
              <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopArea;
