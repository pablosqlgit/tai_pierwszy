import { useEffect, React, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriesList.css";

export default function CategoriesList(props) {
  const navigation = useNavigate();
  const filtersRef = useRef(null);

  const { currentCategory, categories } = props;

  const handleNavigate = (category) => {
    if (category === currentCategory) {
      navigation(`/`);
    } else {
      navigation(`?q=${category}`);
    }
    window.location.reload();
  };

  const categoriesList = categories.map((category, key) => (
    <span
      key={key}
      className="category"
      style={{
        outline: currentCategory === category.strCategory && "1px solid black",
      }}
      onClick={() => handleNavigate(category.strCategory)}
    >
      <p>{category.strCategory}</p>
    </span>
  ));

  const categoriesListMobile = categories.map((category, key) => (
    <li
      key={key}
      className="category-mobile"
      onClick={() => handleNavigate(category.strCategory)}
      style={{
        background:
          currentCategory === category.strCategory && "rgba(0, 0, 0, .3)",
      }}
    >
      <p>{category.strCategory}</p>
    </li>
  ));

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target.className !== "filters-mobile" &&
        filtersRef.current &&
        filtersRef.current.style.display === "flex"
      ) {
        filtersRef.current.className = "filters-list-out";
        setTimeout(() => {
          filtersRef.current.style.display = "none";
        }, 450);
      }
    });
  }, []);

  const handleShowFilters = () => {
    if (
      (filtersRef.current.style.display === "none") |
      (filtersRef.current.style.display === "")
    ) {
      filtersRef.current.className = "filters-list";
      filtersRef.current.style.display = "flex";
    } else {
      filtersRef.current.className = "filters-list-out";
      setTimeout(() => {
        filtersRef.current.style.display = "none";
      }, 450);
    }
  };

  return (
    <>
      <button className="filters-mobile" onClick={handleShowFilters}>
        Show filters
        <ul className="filters-list" ref={filtersRef}>
          {categoriesListMobile}
        </ul>
      </button>
      <div className="category-list-wrapper">{categoriesList}</div>
    </>
  );
}
