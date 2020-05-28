import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
 const Navbar = () => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <Link className="navbar-brand ml-2 text-info" to="/">
            SalesForce
        </Link>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <div className="offset-9">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to="/contact">
                            {' '}
                            <h5 className=" text-info mt-2"> Contact </h5>
                        </Link>
                    </li>
                    <li className="nav-item mx-5">
                        <Link to="/vision">
                            <h5 className=" text-info mt-2"> Vision </h5>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </div>
    )
}

export default Navbar

