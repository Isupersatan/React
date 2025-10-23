import React, { createContext, useState } from "react";
import Navbar from "./Navbar";
export let ThemeContext = createContext({theme:"light"});

export default function ContextAPI() {
    let [theme, setTheme] = useState("light");

    function darkTheme(){
        setTheme("dark");
    }

    function lightTheme(){
        setTheme("light");
    }
    return (
        <>  
            <ThemeContext.Provider value={{theme,darkTheme,lightTheme}}>
                <Navbar/>
            </ThemeContext.Provider>
        </>
    );
}

