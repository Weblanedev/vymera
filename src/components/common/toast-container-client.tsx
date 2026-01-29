"use client";

import React from "react";
import { ToastContainer } from "react-toastify";

/** Wrapper so the dynamic import always gets a valid component; avoids undefined when ToastContainer is missing in the chunk. */
function ToastContainerClient() {
  if (typeof ToastContainer === "undefined") return null;
  return <ToastContainer />;
}

export default ToastContainerClient;
