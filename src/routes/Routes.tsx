import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { routes } from "../routes";
import Blogs from "../pages/blogs/blogs";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
        
      </main>
      <Footer/>
    </Router>
  );
};

export default App;
