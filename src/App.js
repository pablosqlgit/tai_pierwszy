import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* COMPONENTS */
import Home from './src/components/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
