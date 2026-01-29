import type { IProduct } from "@/types/product-d-t";

/**
 * Legacy product data – no longer used.
 * Products are now fetched from the API (see services/products-api.ts and Redux products slice).
 */
const product_data: IProduct[] = [];

export default product_data;
