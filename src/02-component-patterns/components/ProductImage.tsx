import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useContext } from 'react';

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (img) imgToShow = img;
  else if (product.image) imgToShow = product.image;
  else imgToShow = noImage;

  return (
    <img className={styles.productCard} src={imgToShow} alt="Product image" />
  );
};
