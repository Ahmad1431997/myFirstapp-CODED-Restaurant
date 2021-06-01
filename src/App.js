import products from "./products";
import "./App.css";

function App() {
  const newArray = products.map((product) => (
    <div>
      <img className="product-image" src={product.imag} />

      <h2> {product.name}</h2>
      <p> {product.price} KD</p>
    </div>
  ));
  return (
    <div>
      <h1 className="text">CODED Restaurant</h1>
      <h4 className="text"> Welcome to the CODED Restaurant </h4>
      <img
        className="image"
        src="http://media.kenanaonline.com/photos/1238241/1238241475/gallery_1238241475.jpg?1343133914"
      />
      <div className="list">{newArray}</div>
    </div>
  );
}

export default App;
