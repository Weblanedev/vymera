import { StaticImageData } from "next/image";

/**
 * API product shape from DummyJSON (used for fetching).
 */
export interface ApiProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  thumbnail: string;
  images?: string[];
  category?: string;
  stock?: number;
  rating?: number;
  reviews?: { rating: number; comment: string; reviewerName: string }[];
}

/**
 * App product type used across shop, cart, and details.
 * img and related_images support both static assets and URL strings for API products.
 */
export interface IProduct {
  id: number;
  title: string;
  sm_desc: string;
  description?: string;
  price: number;
  discount: number;
  quantity: number;
  old_price?: number;
  orderQuantity?: number;
  category: string;
  /** Image URL (string) for API products, or StaticImageData for legacy */
  img: string | StaticImageData;
  /** Optional for API products; thumbnail URL or static images */
  related_images?: (string | StaticImageData)[];
  details?: {
    specifications: string;
    main_features: string[];
  };
  reviews?: {
    id: number;
    user?: StaticImageData;
    name: string;
    review_text: string;
    rating: number;
  }[];
}
