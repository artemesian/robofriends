import React from 'react';
import Card from "../Card/Card.js";
import "./CardList.css"

export default function CardList({searchField,robots}) {
	const filteredRobots = robots.filter(robot=>robot.name.toLowerCase().includes(searchField.toLowerCase()))
	const style = {
		fontSize:"2em"
	}
	return (
		<div className="cardlist-container">
		{(robots.length===0)?
			<h2 className="SEGA" style={style}>Loading...<span role="img" aria-label="loading">⏳</span></h2>
		:
			(filteredRobots.length !== 0)?
				filteredRobots.map(robot=><Card id={robot.id} name={robot.name} email={robot.email} key={`key${robot.id}`}/>)
			:
				<h2 className="SEGA" style={style}>Ooops Not found<span role="img" aria-label="404">😕</span></h2>
		}
		</div>
	)
}