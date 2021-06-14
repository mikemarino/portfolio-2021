import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

const NavBar = () => {
	return (
		<header>
			<div>
                <nav>
                    <h1><NavLink to='/' exact>
                        Marino
                    </NavLink></h1>
                    <h1>Marino</h1>
                    <NavLink to='/post'>
                        Blog Post
                    </NavLink>
                    <NavLink to='/project'>
                        Projects
                    </NavLink>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                    <NavLink to='/resume'>
                        Resume
                    </NavLink>
                </nav>
			</div>
		</header>
	);
}

export default NavBar;
