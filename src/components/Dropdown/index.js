import React from 'react';
import { menuData } from '../../data/MenuData';
import { NavLink } from 'react-router-dom';
import Button from '../Button/button';

const Dropdown = ({ isOpen, toggle }) => {
	return (
		<div
			className='dropdownContainer'
			style={{
				opacity: isOpen ? '1' : '0',
				top: isOpen ? '0' : '-100%',
			}}
			isOpen={isOpen}
			onClick={toggle}
		>
			<div className='icon'>
				<div className='closeIcon' onClick={toggle} />
			</div>
			<div className='dropdownWrapper'>
				<div className='dropdownMenu'>
					{menuData.map((item, index) => (
						<NavLink className='dropdownLink' to={item.link} key={index} exact>
							{item.title}
						</NavLink>
					))}
				</div>
			</div>
			<Button text='Contact' className='nav-btn btnWrap' />
		</div>
	);
};

export default Dropdown;
