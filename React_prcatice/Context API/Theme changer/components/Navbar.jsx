import React, { useContext} from "react";
import TodoList from "./TodoList";
import {ThemeContext} from "./ContextAPI";



export default function Navbar() {
    let {theme,darkTheme,lightTheme}=useContext(ThemeContext);
    
    return (
        <>
            <nav className={`navbar ${theme==="dark" ? "bg-dark navbar-dark":"bg-primary navbar-dark"}`}>
                <div className="container-fluid">
                    <a href="#" className="navbar-brand" >🛒Amazon</a>
                    <div>
                    <button className={`btn ${theme==="dark" ? "btn-light":"btn-dark"} me-2 btn-sm`} onClick={darkTheme}>Dark</button>
                    <button className={`btn ${theme==="dark" ? "btn-primary":"btn-light"} btn-sm`} onClick={lightTheme}>light</button>
                    </div>
                </div>
            </nav>
            <TodoList/>
        </>
    );
}