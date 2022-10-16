import { useState } from 'react';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import Loginpage from './page/Aboutpage';
import Userpage from './page/Aboutpage';
import { Routes, Route, Navigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom'

function App() {
  const [authenticate, setauthenticate] = useState(false)
  const PrivateRoute = () => {
    return authenticate == true?<Userpage/>:<Navigate to="/login"/>
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<Aboutpage />}/>
        <Route path="/products/" element={<ProductPage />}/>
        <Route path="/products/:id" element={<ProductDetailPage />}/>
        <Route path="/login" element={<Loginpage />}/>
        <Route path="/user" element={<PrivateRoute />}/>
      </Routes>
    </div>
  );
}
export default App;
