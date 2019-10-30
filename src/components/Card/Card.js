import React from 'react';
import "./Card.css";

export default function Card({id,name,email}) {
	return (
		<div className="card-container">
			<img alt="robot" src={`https://robohash.org/${id}?size=200x200`} className="card-image"/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	)
}