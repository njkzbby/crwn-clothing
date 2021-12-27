import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
