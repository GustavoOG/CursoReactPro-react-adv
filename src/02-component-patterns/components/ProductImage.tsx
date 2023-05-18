import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useContext } from "react";
import { ProductImageProps } from "../interfaces/interfaces";



export const ProductImage = ({ img , className , style}: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (img) imgToShow = img;
  else if (product.img) imgToShow = product.img;
  else imgToShow = noImage;

  return (
    <img
      className={`${styles.ProductImage} ${className}`}
      style={style}
      src={imgToShow}
      alt="Product image"
    />
  );
};
