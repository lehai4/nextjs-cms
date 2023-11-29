import { getAllCategory, getAllProduct } from "@/app/api/product/route";
import ProductView from "./productView";
import React from "react";

const Product = async () => {
  const product = await JSON.parse(JSON.stringify(await getAllProduct()));
  const category = await JSON.parse(JSON.stringify(await getAllCategory()));
  return (
    <React.Fragment>
      <ProductView product={product} category={category} />
    </React.Fragment>
  );
};

export default Product;
