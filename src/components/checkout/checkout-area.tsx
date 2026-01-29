"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getCartProducts } from "@/redux/features/cart";
import { clearCartSilent } from "@/redux/features/cart";
import { notifySuccess } from "@/utils/toast";
import ErrorMsg from "../common/error-msg";
import CheckoutOrderReview from "./checkout-order-review";
import OrderProcessingModal from "./order-processing-modal";

type FormData = {
  fullName: string;
  deliveryAddress: string;
  phone?: string;
  email?: string;
  // Payment (UI only)
  nameOnCard: string;
  cardNumber: string;
  cvv: string;
  expiryMonth: string;
  expiryYear: string;
};

// Full name, delivery address, phone or email (at least one), payment fields (16-digit card, 3-digit CVV, expiry)
const schema = yup
  .object()
  .shape({
    fullName: yup.string().required("Full name is required").trim(),
    deliveryAddress: yup
      .string()
      .required("Delivery address is required")
      .trim(),
    phone: yup.string().trim(),
    email: yup.string().trim().email("Invalid email"),
    nameOnCard: yup.string().required("Name on card is required").trim(),
    cardNumber: yup
      .string()
      .required("Card number is required")
      .matches(/^\d{16}$/, "Card number must be 16 digits"),
    cvv: yup
      .string()
      .required("CVV is required")
      .matches(/^\d{3}$/, "CVV must be 3 digits"),
    expiryMonth: yup
      .string()
      .required("Expiry month is required")
      .matches(/^(0[1-9]|1[0-2])$/, "Month must be 01–12"),
    expiryYear: yup
      .string()
      .required("Expiry year is required")
      .matches(/^\d{2}$|^\d{4}$/, "Year must be 2 or 4 digits"),
  })
  .test("contact", "Provide at least phone or email", function (value) {
    const phone = (value?.phone ?? "").trim();
    const email = (value?.email ?? "").trim();
    return !!phone || !!email;
  });

const CheckoutArea = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { cart_products } = useAppSelector((state) => state.cart);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onOrderComplete = useCallback(() => {
    dispatch(clearCartSilent());
    setShowOrderModal(false);
    router.push("/");
    notifySuccess("Order placed successfully");
  }, [dispatch, router]);

  const onSubmit = handleSubmit(() => {
    setShowOrderModal(true);
  });

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      dispatch(getCartProducts());
    }
  }, [dispatch]);

  const canPlaceOrder = cart_products.length > 0 && isValid;

  return (
    <div className="checkout-section light-bg pt-250 lg-pt-200 pb-100 sm-pb-50">
      <div className="container">
        {cart_products.length === 0 && (
          <div className="text-center py-5">
            <p className="mb-3">Your cart is empty.</p>
            <Link href="/#products" className="btn-ten tran3s">
              Continue shopping
            </Link>
          </div>
        )}

        {cart_products.length > 0 && (
          <form onSubmit={onSubmit} className="checkout-form">
            <div className="row">
              <div className="col-lg-7">
                <h2 className="main-title">Checkout</h2>
                <div className="user-profile-data">
                  <h5 className="mb-3">Delivery & contact</h5>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          type="text"
                          {...register("fullName")}
                          placeholder="Full name *"
                          className="single-input-wrapper"
                        />
                        <ErrorMsg msg={errors.fullName?.message ?? ""} />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <textarea
                          {...register("deliveryAddress")}
                          placeholder="Delivery address *"
                          className="single-input-wrapper"
                          rows={2}
                        />
                        <ErrorMsg msg={errors.deliveryAddress?.message ?? ""} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="tel"
                          {...register("phone")}
                          placeholder="Phone"
                          className="single-input-wrapper"
                        />
                        <ErrorMsg msg={errors.phone?.message ?? ""} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="email"
                          {...register("email")}
                          placeholder="Email"
                          className="single-input-wrapper"
                        />
                        <ErrorMsg msg={errors.email?.message ?? ""} />
                      </div>
                    </div>
                  </div>

                  <h5 className="mb-3 mt-4">
                    Payment (UI only – no real charge)
                  </h5>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          type="text"
                          {...register("nameOnCard")}
                          placeholder="Name on card *"
                          className="single-input-wrapper"
                        />
                        <ErrorMsg msg={errors.nameOnCard?.message ?? ""} />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          type="text"
                          {...register("cardNumber")}
                          placeholder="Card number (16 digits) *"
                          className="single-input-wrapper"
                          maxLength={16}
                        />
                        <ErrorMsg msg={errors.cardNumber?.message ?? ""} />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          {...register("cvv")}
                          placeholder="CVV (3 digits) *"
                          className="single-input-wrapper"
                          maxLength={3}
                        />
                        <ErrorMsg msg={errors.cvv?.message ?? ""} />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="mb-3">
                        <input
                          type="text"
                          {...register("expiryMonth")}
                          placeholder="MM"
                          className="single-input-wrapper"
                          maxLength={2}
                        />
                        <ErrorMsg msg={errors.expiryMonth?.message ?? ""} />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="mb-3">
                        <input
                          type="text"
                          {...register("expiryYear")}
                          placeholder="YY"
                          className="single-input-wrapper"
                          maxLength={4}
                        />
                        <ErrorMsg msg={errors.expiryYear?.message ?? ""} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-4 col-lg-5 ms-auto">
                <div className="order-confirm-sheet md-mt-60">
                  <h2 className="main-title">Order Details</h2>
                  <div className="order-review">
                    <CheckoutOrderReview />
                    <p className="policy-text small mt-3">
                      Your data is used for this order and as described in our
                      privacy policy.
                    </p>
                    <button
                      type="submit"
                      className="btn-ten tran3s w-100 mt-3"
                      disabled={!canPlaceOrder}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}

        <OrderProcessingModal
          open={showOrderModal}
          onComplete={onOrderComplete}
        />
      </div>
    </div>
  );
};

export default CheckoutArea;
