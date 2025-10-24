import { Fragment } from "react";
import Navbar from "./components/Layout/Navbar";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/Layout/Home";
import Contact from "./components/Layout/Contact";
import About from "./components/Layout/About";
import Login from "./components/Users/Login";
import SignUp from "./components/Users/SignUp";
import ProductList from "./components/products/ProductList";
import ProductDetails from "./components/products/ProductDetails";


function app() {
    return (
        <Fragment>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/productList" element={<ProductList/>}/>
                    <Route path="/product/:id" element={<ProductDetails/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default app;