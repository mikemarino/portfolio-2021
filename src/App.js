import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project  from './components/Project';
import Resume from './components/Resume';
import NavBar from './components/NavBar/Navbar-2';

import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection'
import { InfoData } from './data/InfoData';
 
function App() {

	const [isOpen, setIsOpen] = useState(false)
	
	const toggle = () => {
		setIsOpen(!isOpen)
		console.log('hey');
		console.log(isOpen);
	}
	return (

		<BrowserRouter>
			<NavBar toggle={toggle}/>
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Hero slides={SliderData} />
			<InfoSection {...InfoData}/>
			<Switch>
				<Route component={Home} path='/' exact />
				<Route component={About} path='/about' />
				<Route component={SinglePost} path='/post/:slug' />
				<Route component={Post} path='/post' />
				<Route component={Project} path='/project' />
				<Route component={Resume} path='/resume' />
			</Switch>
		</BrowserRouter>
		
	)
};
export default App;
