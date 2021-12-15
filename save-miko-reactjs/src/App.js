import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import AboutUs from "./components/layouts/AboutUs";
import DogsDatabase from "./components/layouts/DogsDatabase";
import Home from "./components/layouts/Home";
import Form from "./components/layouts/Form";


function App() {
  return (
    <div className="App"> 
    <Header />
    <Navbar />
    <Home />
    <DogsDatabase />
    <Form />
    <AboutUs />
    <Footer />
    </div>
  );
}

export default App;
