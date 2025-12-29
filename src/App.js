import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import MoviePage from "./pages/MoviePage";
import CartPage from "./pages/CartPage";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/movie/:movieId" element={<MoviePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
