import React from 'react';
import logo from '../public/img/logo.png';


const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='app-logo' src={logo} alt='swiggy logo' />
            </div>
            <div className='nav-container'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}   
export default Header;