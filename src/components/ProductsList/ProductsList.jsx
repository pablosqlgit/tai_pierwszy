import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsList.css";

export default function ProductsList(props) {
  const navigate = useNavigate();
  const { products, filtered } = props;

  const productsList = products.map((product, key) => (
    <div className="product" key={key}>
      <img src={product.strMealThumb} alt={product.strMeal} />
      <div>
        <p>{product.strMeal}</p>
        <button
          onClick={() => navigate(`/product/${product.idMeal}`)}
          className="product-link-button"
        >
          See product
        </button>
      </div>
    </div>
  ));

  return (
    <div className="products-list-wrapper">
      {!!productsList[0]
        ? productsList
        : filtered
        ? "Nie ma takiego dania"
        : "Wczytywanie..."}
    </div>
  );
}
