import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* COMPONENTS */
import Home from './components/Home/Home'
import BmiCalculator from './components/BmiCalculator/BmiCalculator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bmicalculator' element={<BmiCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
