import React, { Component } from 'react';
import '../App.css';
import Card from './Card';

class Content extends Component {
  render() {
    return (
     <div className="content">
		
			<div className="left">
				<Card name='News' />
				<Card name='Class Overview' />
				<Card name='Tasks' />

			</div>

			<div className="right">
				<Card name='Calendar' />
			</div>

		</div>
    );
  }
}

export default Content;

