import React, { Component } from 'react';
import '../App.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
			<ul>
				<li><a href="index.html"><i data-feather="home"></i>Dashboard</a></li>
				<li><a href="students.html"><i data-feather="user"></i>Students</a></li>
				<li><a href="tasks.html"><i data-feather="check-square"></i>Tasks</a></li>
				<li><a href="games.html"><i data-feather="grid"></i>Games</a></li>
			</ul>
		</div>
    );
  }
}

export default Sidebar;
