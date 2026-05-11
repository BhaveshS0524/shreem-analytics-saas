/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Dashboard from "./pages/Dashboard";
import BlogArchitecture from "./pages/BlogArchitecture";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="blog" element={<BlogArchitecture />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
