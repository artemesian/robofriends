import React from 'react';
import "./Card.css";

export default function Card({id,name,email}) {
	return (
		<div className="card-container">
			<img alt="robot" src={`https://robohash.org/${id}?size=200x200`} className="card-image"/>
			<h4 className="card-name">{name}</h4>
			<h5 className="card-email">{email}</h5>
		</div>
	)
}