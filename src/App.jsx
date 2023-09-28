import { BrowserRouter, Routes, Route } from "react-router-dom";

/* COMPONENTS */
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import ErrorPage from './components/ErrorPage/ErrorPage'
import Loading from './components/Loading/Loading'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:productId" element={<Product />} />
        <Route path='/test' element={<Loading />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
