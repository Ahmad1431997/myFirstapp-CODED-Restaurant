function ProductItem(props) {
  return (
    <div>
      <div>
        <img
          alt="product-img"
          className="product-image"
          src={props.product.imag}
        />

        <h2> {props.product.name}</h2>
        <p> {props.product.price} KD</p>
      </div>
    </div>
  );
}

export default ProductItem;
