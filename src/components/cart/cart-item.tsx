import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { IProduct } from "@/types/product-d-t";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  quantityIncrement,
  quantityDecrement,
  remove_product,
} from "@/redux/features/cart";

const CartItem = () => {
  const { cart_products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handleIncrementQuantity = (item: IProduct) => {
    dispatch(quantityIncrement({ id: item.id }));
  };
  const handleDecrementQuantity = (item: IProduct) => {
    dispatch(quantityDecrement(item));
  };
  // handle remove
  const handleRemove = (item: IProduct) => {
    dispatch(remove_product({ id: item.id, title: item.title }));
  };
  return (
    <>
      {cart_products.map((item, i) => (
        <tr key={i}>
          <td className="product-thumbnails">
            <Link href={`/shop-details/${item.id}`} className="product-img">
              <Image
                src={typeof item.img === "string" ? item.img : item.img.src}
                alt={item.title}
                width={80}
                height={80}
                unoptimized={
                  typeof item.img === "string" && item.img.startsWith("http")
                }
              />
            </Link>
          </td>
          <td className="product-info">
            <Link href={`/shop-details/${item.id}`} className="product-name">
              {item.title}
            </Link>
            <div className="serial">#859632007881</div>
            <ul className="style-none">
              <li className="size">Size: 23”</li>
              <li className="color">Color: Red</li>
            </ul>
          </td>
          <td className="price">
            <span>${item.price}</span>
          </td>
          <td className="quantity">
            <ul className="order-box style-none">
              <li>
                <div
                  onClick={() => handleDecrementQuantity(item)}
                  className="btn value-decrease"
                >
                  -
                </div>
              </li>
              <li>
                <input
                  type="number"
                  value={item.orderQuantity}
                  readOnly
                  className="product-value val"
                />
              </li>
              <li>
                <div
                  onClick={() => handleIncrementQuantity(item)}
                  className="btn value-increase"
                >
                  +
                </div>
              </li>
            </ul>
          </td>
          <td className="price total-price">
            <span>${item.price * (item.orderQuantity as number)}</span>
          </td>
          <td>
            <a
              onClick={() => handleRemove(item)}
              className="remove-product cursor-pointer"
            >
              x
            </a>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartItem;
