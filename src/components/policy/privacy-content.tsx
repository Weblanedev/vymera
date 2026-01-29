"use client";

import React from "react";
import { COMPANY } from "@/data/company-info";

const PrivacyContent = () => {
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
                <h2 className="h3 fw-bold text-dark mb-3">1. Introduction</h2>
                <p className="text-body mb-4">
                  Vymera Limited (“we,” “our,” or “us”) provides computing
                  solutions, including computers, peripherals, and software. We
                  are committed to protecting your privacy and ensuring you have
                  a positive experience on our website and when using our
                  products and services. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you visit our website and purchase our products.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">
                  2. Information We Collect
                </h2>
                <h3 className="h4 fw-semibold text-dark mb-3">
                  Personal Information
                </h3>
                <p className="text-body mb-3">
                  We collect personal information that you provide directly to
                  us, including:
                </p>
                <ul className="list-unstyled ps-4 mb-4">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Name and contact information (email address, phone number)
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Shipping and billing addresses
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Payment information (processed securely through our payment
                    processors)
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Account credentials if you create an account
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Communications with us (customer service inquiries,
                    feedback)
                  </li>
                </ul>

                <h3 className="h4 fw-semibold text-dark mb-3">
                  Automatically Collected Information
                </h3>
                <p className="text-body mb-3">
                  When you visit our website, we automatically collect certain
                  information, including:
                </p>
                <ul className="list-unstyled ps-4 mb-4">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    IP address and browser type
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Device information and operating system
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Pages visited and time spent on our website
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Referring website addresses
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Cookies and similar tracking technologies
                  </li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">
                  3. How We Use Your Information
                </h2>
                <p className="text-body mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-unstyled ps-4 mb-4">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Process and fulfill your orders
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Send you order confirmations and shipping updates
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Respond to your inquiries and provide customer support
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Send you marketing communications (with your consent)
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Improve our website and product offerings
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Detect and prevent fraud and unauthorized access
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Comply with legal obligations
                  </li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-body mb-3">
                  We do not sell your personal information. We may share your
                  information in the following circumstances:
                </p>
                <ul className="list-unstyled ps-4 mb-4">
                  <li className="mb-3">
                    <strong className="text-dark">Service Providers:</strong> We
                    share information with third-party service providers who
                    perform services on our behalf, such as payment processing,
                    shipping, and email delivery.
                  </li>
                  <li className="mb-3">
                    <strong className="text-dark">Legal Requirements:</strong>{" "}
                    We may disclose information if required by law or in
                    response to valid requests by public authorities.
                  </li>
                  <li className="mb-3">
                    <strong className="text-dark">Business Transfers:</strong>{" "}
                    In the event of a merger, acquisition, or sale of assets,
                    your information may be transferred.
                  </li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">5. Data Security</h2>
                <p className="text-body mb-4">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the Internet or
                  electronic storage is 100% secure.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">6. Your Rights</h2>
                <p className="text-body mb-3">You have the right to:</p>
                <ul className="list-unstyled ps-4 mb-4">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Access and receive a copy of your personal information
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Correct inaccurate or incomplete information
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Request deletion of your personal information
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Opt-out of marketing communications
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Withdraw consent where processing is based on consent
                  </li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">7. Cookies</h2>
                <p className="text-body mb-4">
                  We use cookies and similar tracking technologies to enhance
                  your experience on our website. You can control cookies
                  through your browser settings, but disabling cookies may
                  affect website functionality.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">
                  8. Children&apos;s Privacy
                </h2>
                <p className="text-body mb-4">
                  Our website is not intended for children under the age of 18.
                  We do not knowingly collect personal information from
                  children.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">
                  9. Changes to This Privacy Policy
                </h2>
                <p className="text-body mb-4">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &quot;Last Updated&quot; date.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-bold text-dark mb-3">10. Contact Us</h2>
                <p className="text-body mb-3">
                  If you have any questions about this Privacy Policy, please
                  contact us:
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
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;
