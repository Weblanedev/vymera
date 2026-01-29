/**
 * Products API – fetches from DummyJSON only. No hardcoded products.
 * Categories: Electronics (smartphones, laptops, tablets, mobile-accessories),
 * Watches (mens-watches, womens-watches), Motoring (motorcycle, vehicle).
 */

import type { ApiProduct } from "@/types/product-d-t";
import type { IProduct } from "@/types/product-d-t";

const BASE_URL = "https://dummyjson.com/products";

/** Electronics, Watches, Motoring – from DummyJSON response only. */
const ALLOWED_CATEGORIES = [
  "smartphones",
  "laptops",
  "tablets",
  "mobile-accessories",
  "mens-watches",
  "womens-watches",
  "motorcycle",
  "vehicle",
] as const;

interface ProductsResponse {
  products: ApiProduct[];
  total: number;
  skip: number;
  limit: number;
}

/** Map API product to app IProduct (id, title, description, price, image). Mock fields where API doesn't provide. */
function mapApiProductToProduct(api: ApiProduct): IProduct {
  const discount = api.discountPercentage ?? 0;
  const price = api.price;
  const oldPrice = discount > 0 ? price / (1 - discount / 100) : undefined;
  const images = api.images && api.images.length > 0 ? api.images : [api.thumbnail];
  const reviews = (api.reviews ?? []).map((r, i) => ({
    id: i + 1,
    name: r.reviewerName,
    review_text: r.comment,
    rating: r.rating,
  }));

  return {
    id: api.id,
    title: api.title,
    sm_desc: api.description?.slice(0, 120) ?? api.title,
    description: api.description,
    price,
    discount: discount / 100,
    quantity: api.stock ?? 99,
    old_price: oldPrice ? Math.round(oldPrice * 100) / 100 : undefined,
    category: api.category ?? "general",
    img: api.thumbnail,
    related_images: images,
    details: {
      specifications: api.description ?? "No specifications available.",
      main_features: api.description
        ? [api.description.slice(0, 80), api.description.slice(80, 160)].filter(Boolean)
        : ["Quality product", "Fast shipping"],
    },
    reviews,
  };
}

/** Fetch products from DummyJSON (Electronics, Watches, Motoring categories only). */
export async function fetchProducts(): Promise<{ products: IProduct[]; total: number }> {
  const results = await Promise.all(
    ALLOWED_CATEGORIES.map((category) =>
      fetch(`${BASE_URL}/category/${category}`).then((res) => {
        if (!res.ok) return { products: [] as ApiProduct[] };
        return res.json() as Promise<ProductsResponse>;
      })
    )
  );

  const byId = new Map<number, ApiProduct>();
  for (const data of results) {
    const list = "products" in data ? data.products : [];
    for (const p of list) byId.set(p.id, p);
  }

  const products = Array.from(byId.values()).map(mapApiProductToProduct);
  return { products, total: products.length };
}

/** Fetch a single product by id. */
export async function fetchProductById(id: number | string): Promise<IProduct | null> {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) return null;
  const api: ApiProduct = await res.json();
  return mapApiProductToProduct(api);
}
