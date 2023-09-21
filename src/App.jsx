import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* COMPONENTS */
import Home from './components/Home/Home'
import BmiCalculator from './components/BmiCalculator/BmiCalculator'
import Product from './components/Product/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/bmicalculator' element={<BmiCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
