import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Error = () => {
    return (
        <div>
            <Navbar />
            <h1>Error : Page Does not exits</h1>

            <h2><span>Go back to</span> 
                <NavLink to="/" className="text-black-50">Home Page</NavLink>
            </h2>

            <Footer />
        </div>
    )
}

export default Error
