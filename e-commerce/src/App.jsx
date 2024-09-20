import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import PageContainer from "./container/PageContainer";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <PageContainer>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:id" element={<Detail/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </PageContainer>
  );
};

export default App;
