import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import MainPage from "../pages/main-page/main-page";
import Order from "../pages/order/order";
import ScrollToTop from "../ui/scroll-to-top/scroll-to-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route
              index
              element={<MainPage features={features} products={products} />}
            />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<Order products={products} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
