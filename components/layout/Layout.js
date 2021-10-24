import React from 'react'
import Nav from "../Navbar";

export default function Layout({ children }) {
    return (
        <>
        <Nav />
        <div className="container">{children}</div>

        
        </>
    )
}
