"use client";

import React from "react";
import { COMPANY } from "@/data/company-info";

const RefundContent = () => {
  return (
    <div className="policy-section pt-150 lg-pt-100 pb-100 lg-pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy-content">
              {/* <p className="text-muted mb-4">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p> */}

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">Return Policy</h2>
                <p className="text-body mb-4">
                  At Vymera Limited we want you to be completely satisfied with
                  your purchase of computing equipment, peripherals, or
                  software. If you are not satisfied, you may return most items
                  within 30 days of delivery for a full refund or exchange.
                </p>

                <h3 className="h4 fw-semibold text-dark mb-3">
                  Conditions for Returns
                </h3>
                <ul className="list-unstyled ps-4 mb-4">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Hardware must be unused and in original packaging with seals
                    intact where applicable
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    All accessories, manuals, and labels must be included
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Items must be in the same condition as when received
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Proof of purchase (order number or receipt) is required
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Returns must be initiated within 30 days of delivery
                  </li>
                </ul>

                <h3 className="h4 fw-semibold text-dark mb-3">
                  Items Not Eligible for Return
                </h3>
                <ul className="list-unstyled ps-4 mb-4">
                  <li className="mb-2">
                    <i className="bi bi-x-circle-fill text-danger me-2"></i>
                    Opened software, or hardware that has been used or damaged
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-x-circle-fill text-danger me-2"></i>
                    Items without original packaging or seals
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-x-circle-fill text-danger me-2"></i>
                    Custom-configured or personalized orders
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-x-circle-fill text-danger me-2"></i>
                    Items purchased more than 30 days ago
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-x-circle-fill text-danger me-2"></i>
                    Gift cards and promotional items
                  </li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">
                  How to Return an Item
                </h2>
                <ol className="list-unstyled ps-4 mb-4">
                  <li className="mb-3 d-flex align-items-start">
                    <span
                      className="badge bg-primary rounded-circle me-3 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      1
                    </span>
                    <span>
                      Contact our customer service team at{" "}
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-primary text-decoration-none"
                      >
                        {COMPANY.email}
                      </a>{" "}
                      or call {COMPANY.phone} to initiate a return
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span
                      className="badge bg-primary rounded-circle me-3 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      2
                    </span>
                    <span>Provide your order number and reason for return</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span
                      className="badge bg-primary rounded-circle me-3 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      3
                    </span>
                    <span>
                      You will receive a Return Authorization (RA) number and
                      instructions
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span
                      className="badge bg-primary rounded-circle me-3 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      4
                    </span>
                    <span>
                      Package the item securely with the RA number visible on
                      the package
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span
                      className="badge bg-primary rounded-circle me-3 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      5
                    </span>
                    <span>
                      Ship the item to the address provided in the return
                      instructions
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span
                      className="badge bg-primary rounded-circle me-3 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      6
                    </span>
                    <span>
                      We recommend using a trackable shipping method as we are
                      not responsible for lost return packages
                    </span>
                  </li>
                </ol>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">Refund Policy</h2>
                <p className="text-body mb-4">
                  Once we receive and inspect your returned item, we will
                  process your refund within 5-7 business days.
                </p>

                <h3 className="h4 fw-semibold text-dark mb-3">Refund Method</h3>
                <p className="text-body mb-4">
                  Refunds will be issued to the original payment method used for
                  the purchase. Please note that it may take additional time for
                  the refund to appear in your account, depending on your bank
                  or payment provider.
                </p>

                <h3 className="h4 fw-semibold text-dark mb-3">Refund Amount</h3>
                <ul className="list-unstyled ps-4 mb-4">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Full refund of the item price for items returned in original
                    condition
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Original shipping costs are non-refundable unless the item
                    is defective or we made an error
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Return shipping costs are the responsibility of the customer
                    unless the item is defective or we made an error
                  </li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">Exchanges</h2>
                <p className="text-body mb-4">
                  If you need to exchange an item for a different model,
                  specification, or variant, please contact our customer service
                  team. Exchanges are subject to product availability. If the
                  item you want is not available, we will process a refund
                  instead.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">
                  Defective or Damaged Items
                </h2>
                <p className="text-body mb-4">
                  If you receive a defective or damaged item, please contact us
                  immediately with photos of the damage. We will arrange for a
                  replacement or full refund, and we will cover all return
                  shipping costs.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">Processing Time</h2>
                <ul className="list-unstyled ps-4 mb-4">
                  <li className="mb-2">
                    <strong className="text-dark">Return Processing:</strong>{" "}
                    5-7 business days after we receive your returned item
                  </li>
                  <li className="mb-2">
                    <strong className="text-dark">Refund Processing:</strong>{" "}
                    3-5 business days after approval
                  </li>
                  <li className="mb-2">
                    <strong className="text-dark">Credit Card Refunds:</strong>{" "}
                    5-10 business days to appear in your account
                  </li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">Contact Us</h2>
                <p className="text-body mb-3">
                  For questions about returns or refunds, please contact us:
                </p>
                <ul className="list-unstyled ps-4 mb-4">
                  <li className="mb-2">
                    <strong className="text-dark">Email:</strong>{" "}
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-primary text-decoration-none"
                    >
                      {COMPANY.email}
                    </a>
                  </li>
                  <li className="mb-2">
                    <strong className="text-dark">Phone:</strong>{" "}
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-primary text-decoration-none"
                    >
                      {COMPANY.phone}
                    </a>
                  </li>
                  <li className="mb-2">
                    <strong className="text-dark">Address:</strong>{" "}
                    {COMPANY.address}
                  </li>
                  <li className="mb-2">
                    <strong className="text-dark">Hours:</strong> Monday -
                    Friday, 9AM - 6PM WAT
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundContent;
