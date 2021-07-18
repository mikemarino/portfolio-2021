import React from 'react';
import { menuData } from '../../data/MenuData';
import { NavLink } from 'react-router-dom';
import Button from '../Button/button';

const Dropdown = () => {
	return (
		<div className='dropdownContainer'>
			<h1>HEllo!!</h1>Hello!
			<div className='icon'>
				<div className='closeIcon' />
			</div>
			<div className='dropdownWrapper'>
				<div className='dropdownMenu'>
					{menuData.map((item, index) => (
                    <NavLink className="" to={item.link} key={index} exact>{item.title}</NavLink>
            ))}
				</div>
			</div>
			<Button text='Contact Us' />
		</div>
	);
};

export default Dropdown;
