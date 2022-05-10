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
import { db } from "./Firebase";
import Details from "./components/details/Details";
import CustomerSupport from "./components/customerSupport/CustomerSupport";
import ScrollToTop from "./components/ScrollToTop";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from "react-redux";
import Checkout from "./components/checkout/Checkout";

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

  const theme = createTheme({
    palette: {
      primary: {
        main: '#bfb2ab'
      }
    }
  })

  const [isCartOpen, setIsCartOpen] = useState(false);
  const items = useSelector((state) => state.items);

  return (
    <>
      <AppContext.Provider value={{ datas, isCartOpen, setIsCartOpen, items }}>
        <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop/>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/item" element={<Item />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/service" element={<Service />} />
            <Route path="/support" element={<CustomerSupport />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </Router>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;
