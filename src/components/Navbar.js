import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light shadow-lg">
            <div className="container-fluid justify-content-end">
                <button className="btn btn-warning px-4 me-3">About</button>
            </div>
        </nav>
    )
}
