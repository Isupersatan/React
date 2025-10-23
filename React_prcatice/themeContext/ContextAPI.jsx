import React, { createContext, useContext, useState } from "react";
import Navbar from "./Navbar";
let ThemeContext = createContext();

export default function ContextAPI() {
    let [theme, setTheme] = useState("Dark");
    return (
        <>
            <Navbar />
            <ThemeContext.Provider value={theme}>
                <Catagories />
            </ThemeContext.Provider>
        </>
    );
}

function Catagories() {
    return (
        <>
            <h1>Catagories</h1>
            <Products />
        </>
    );
}

// function Products(){
//     return (
//         <>
//         <section className="container-fluid">
//             <div className="row">
//                 <div className="col">
//                     <ThemeContext.Consumer>
//                         {
//                             (theme)=>{
//                                 return (
//                                     <>
//                                         <h2>Product</h2>
//                                         <button style={theme=="light" ? {border:"3px solid blue"}:{border:"3px solid red"}}>Add to Cart</button>
//                                     </>
//                                 );
//                             }
//                         }
//                     </ThemeContext.Consumer>
//                 </div>
//             </div>
//         </section>
//         </>
//     );
// }

function Products() {
    let theme = useContext(ThemeContext);
    return (
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h2>Product</h2>
                        <button style={theme == "light" ? { border: "3px solid blue" } : { border: "3px solid red" }}>
                            add to cart
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}