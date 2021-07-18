import React from "react";
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
 
function App() {
	return (

		<BrowserRouter>
			<NavBar />
		
			<Hero slides={SliderData} />
			{/* <Dropdown /> */}
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
