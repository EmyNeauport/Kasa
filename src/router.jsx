import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/home.jsx";
import AboutPage from "./pages/About/about.jsx";
import ProductPage from "./pages/Product/product.jsx";
import ErrorPage from "./pages/Error/error.jsx";

const Router = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Router;
