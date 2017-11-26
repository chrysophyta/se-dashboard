import React, { Component } from 'react';
import '../App.css';

class Nav extends Component {
  render() {
    return (
     <nav>
		<ul>
			<li className="logo"><a href="index.html"></a></li>
			<li className="empty"></li>
			<li className="welcome">Hi, Justin</li>
			<li className="nav-item"><a href="#"><i data-feather="settings"></i>Account</a></li>
			<li className="nav-item"><a href="#"><i data-feather="power"></i>Logout</a></li>
		</ul>
		
	</nav>
    );
  }
}

export default Nav;
