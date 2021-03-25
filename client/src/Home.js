import React,{Component} from 'react'
import axios from 'axios'
import ProfileUpdate from './profileUpdate';
import PasswordChange from "./passwordChange";
import Login from './login.js';
import Signup from './signup.js';
import Dashboard from './Dashboard.js';
import About from './about.js';
import Nav1 from './Nav1.js';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 


class Home extends Component
{
	render()
	{
		return (
			<div>
				<Nav1 />
            {/* <Link to="/loginpage">
                <li>Login</li>
            </Link>
            <Link to="/signuppage">
            	<li>Sign Up </li>
          	</Link> */}
			<h1> This is home page</h1>
		</div>
		)
	}
}
export default Home



