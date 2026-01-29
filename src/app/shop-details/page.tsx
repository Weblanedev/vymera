import { redirect } from "next/navigation";

/** Shop details index: redirect to shop listing. */
export default function ShopDetailsIndexPage() {
  redirect("/#products");
}
