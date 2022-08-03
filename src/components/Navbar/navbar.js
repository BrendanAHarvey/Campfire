import React from "react";
import "./navbar.css"
import Search from "./Search/searchTemp";


export default function Navbar() {
    return (
        <div className="navbar">
            <h2 className="logo">Campire</h2>
            <div className="search-feature">
                <input className="searchbar" placeholder="Search">
                    <Search />
                </input>
                <button></button>
            </div>
        </div>
    )
}