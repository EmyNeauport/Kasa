import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/Home.jsx";
import AboutPage from "./pages/About/About.jsx";
import ProductPage from "./pages/Product/Product.jsx";
import ErrorPage from "./pages/Error/Error.jsx";

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
