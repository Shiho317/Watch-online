import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Item from "./components/item/Item";
import Service from "./components/service/Service";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Details from "./components/details/Details";

export const AppContext = createContext();

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      getDocs(collection(db, "watches"))
        .then((storeData) => {
          setDatas(
            storeData.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    getData();
  }, []);

  return (
    <>
      <AppContext.Provider value={{ datas }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/item" element={<Item />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/service" element={<Service />} />
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
