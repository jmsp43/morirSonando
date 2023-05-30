import React from "react";
import Header from "../Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../pages/Home/index";
import Menu from "../../pages/Menu/index";
import Cart from "../../pages/Cart/index";
import Error from "../../pages/Error/index";
import Login from "../../pages/Login/index";
import Receipt from "../../pages/Receipt/index";
import SignUp from "../../pages/SignUp/index";
import Catering from "../../pages/Catering";
import ItemInfo from "../../pages/ItemInfo";

function DefaultLayout() {
  return (
    <div className="defaultContainer">
      <Router>
      <Header />
        <Routes>
          <Route path="/" className="link" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/error" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Menu/*" element={<Menu />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/Menu/:name" element={<ItemInfo />} />
        </Routes>

      </Router>
      
    </div>
  );
}

export default DefaultLayout;