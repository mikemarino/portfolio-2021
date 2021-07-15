import React, {useState } from 'react';
import { NavLink } from 'react-router-dom';
// import './navbar.scss';
import { BOOTSTRAP, NPM, BOWER } from '../../Icons/svg/Icon-paths';
import SvgIcon from '../../Icons/svg/SvgIcon';

import { FaLinkedin } from 'react-icons/fa';
import LI from '../../Icons/svg/Icon-paths2';
import { COMPOSER } from '../../Icons/svg/index';
import { FcBiotech } from 'react-icons/fc';
import { DiHtml53DEffects } from 'react-icons/di';
import { IconContext } from 'react-icons';
import { GrTwitter, GrLinkedin, GrGithub } from 'react-icons/gr';
import { IMAGES } from '../../Icons/pixel-rotate';
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../../../assets/js/script.js"
import useInterval from 'react-useinterval'
// import "bootstrap/js/dist/collapse"
// import "bootstrap/js/dist/button"


const NavBar = () => {
	const [index, set] = useState(0)
	const item = IMAGES[index]
	const increment = () => set(state => (state+1) % IMAGES.length)
	useInterval(increment, 2000 )

	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
			<div className='container'>
				<NavLink to='/' exact>
					{/* <img className='logo' src={Logo} alt='logo'  /> */}
					{/* <img className='logo' id="logo" alt='logo'  /> */}
					{/* <img src={item.path} className='logo' id='logo' alt="" /> */}
				</NavLink>
				{/* <a className='navbar-brand' href='#'></a> */}
				{/* <img className='logo' id='logo' alt="" /> */}
				
				{/* <img  className='logo' alt ="" /> */}
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            	<div className="navbar-toggler-inner"></div>
				</button>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse justify-content-end'
					id='navbarSupportedContent'
				>

	{/* 					
						<div className='navbar-nav'>
							<h1 className='heroName'>
								<NavLink to='/' exact>
									Michael Marino
								</NavLink>
							</h1>
						</div> */}
				</div>
				


				<div
					className='collapse navbar-collapse justify-content-end'
					id="navbarSupportedContent"
				>
					<div className='navbar-nav'>
						<NavLink className='nav-item nav-link' to='/post'>
							<div className='nav-item'>Blog Post</div>
						</NavLink>
						<NavLink className='nav-link' to='/project'>
							Projects
						</NavLink>
						<NavLink className='nav-link' to='/about'>
							About
						</NavLink>
						<NavLink className='nav-link' to='/resume'>
							Resume
						</NavLink>

						<IconContext.Provider
							value={{
								size: '20px',
								className: 'react-icons',
								title: 'icons',
								attr: { filter: 'url(#f1)' },
							}}
						>
						

							<div>
								<NavLink className='nav-link' to='www.twitter.com'>
									<GrTwitter
										value={{ attr: { backdropFilter: 'blur(5px)' } }}
									/>
								</NavLink>
							</div>
							<div>
								<NavLink className='nav-link' to='www.twitter.com'>
									<GrGithub />
								</NavLink>
							</div>
							<div>
								<NavLink className='nav-link' to='www.twitter.com'>
									<GrLinkedin />
								</NavLink>
							</div>
						</IconContext.Provider>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
