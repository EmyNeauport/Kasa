
import { Routes, Route } from "react-router-dom";

import HomePage from "../../pages/Home/index.jsx";
import AboutPage from "../../pages/About/index.jsx";
import ProductPage from "../../pages/Product/index.jsx";
import ErrorPage from "../../pages/Error/index.jsx";

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
