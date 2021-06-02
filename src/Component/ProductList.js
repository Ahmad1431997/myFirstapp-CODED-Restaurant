//Data
import products from "../products";
import ProductItem from "./ProductItem";

function ProductList() {
  const productsArray = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <div className="list"> {productsArray}</div>; //<div className="list">{newArray}</div>;
}

export default ProductList;
