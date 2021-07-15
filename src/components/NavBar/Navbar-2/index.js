import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuData } from '../../../data/MenuData';
import Button from '../../Button/button';
import { FaBars } from 'react-icons';

const Navbar = () => {
    return (
        <nav>
            <div className="logo navLink"><NavLink to="/">Marino</NavLink></div>
            <div className="menuBar"></div>
            <div className="navMenu">    
            {menuData.map((item, index) => (
                    <NavLink className="navLink" to={item.link} key={index} exact>{item.title}</NavLink>
            ))}
            </div>
            <Button />
        </nav>
    )
}

export default Navbar; 
 
