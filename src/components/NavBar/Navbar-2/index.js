import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuData } from '../../../data/MenuData';
import Button from '../../Button/button';

const Navbar = ({toggle}) => {
    return (
        <nav>
            <div className="logo navLink"><NavLink to="/">Marino</NavLink></div>
            <div className="menuBar" onClick={toggle}></div>
            <div className="navMenu">    
            {menuData.map((item, index) => (
                    <NavLink className="navLink" to={item.link} key={index} exact>{item.title}</NavLink>
            ))}
            </div>
            <Button text="Contact" className="nav-btn primary"/>
        </nav>
    )
}

export default Navbar; 
