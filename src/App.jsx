import { BrowserRouter, Routes, Route } from "react-router-dom";

/* COMPONENTS */
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import ErrorPage from './components/ErrorPage/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
