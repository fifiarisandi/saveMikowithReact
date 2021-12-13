import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import AboutUs from "./components/layouts/AboutUs";
import DogsDatabase from "./components/layouts/DogsDatabase";

function App() {
  return (
    <div className="App"> 
    <Header />
    <Navbar />
    <AboutUs />
    <DogsDatabase />
    <Footer />
    </div>
  );
}

export default App;
