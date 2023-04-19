import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}
