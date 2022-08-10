import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className="n-name">PLANET</div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/tree">Tree</Link>
                        </li>
                        <li>
                            <Link to="/benefits">Benefits</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            Travel
                        </li>
                    </ul>
                </div>
                <Link to="/feedback">
                    <button className="button n-button">FeedBack</button>
                </Link>
            </div>

        </div >

    )
}
export default Navbar;