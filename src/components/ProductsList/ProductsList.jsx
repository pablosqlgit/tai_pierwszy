import { React } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ProductsList.css";

export default function ProductsList(props) {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { products, filtered } = props;

  const handleNavigate = (where) => {
    navigate(`/meal/${where}`, { state: search && search.slice(3) });
    // window.location.reload()
  };

  const productsList = products.map((product, key) => (
    <div className="product" key={key}>
      <img src={product.strMealThumb} alt={product.strMeal} />
      <div>
        <p>{product.strMeal}</p>
        <button
          onClick={() => handleNavigate(product.idMeal)}
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
        ? "No results"
        : "Loading..."}
    </div>
  );
}
