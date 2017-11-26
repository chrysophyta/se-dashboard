import React, { Component } from 'react';
import '../App.css';

class Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    	return (
	    	<div className="card">
				<p className="card-title">{this.props.name}</p>
			</div>
    );
  }
}

export default Card;
