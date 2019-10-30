import React from 'react';
import Card from "../Card/Card.js";
import {robots} from "../../robots.js"
import "./CardList.css"

export default function CardList({searchField}) {
	const filteredRobots = robots.filter(robot={
		return robot.name.toLowerCase().includes(searchField.toLowerCase())})
	return (
		<div className="cardlist-container">
		{(filteredRobots.length !== 0)}
		{filteredRobots.map(robot=><Card id={robot.id} name={robot.name} email={robot.email} key={`key${robot.id}`}/>)}
		</div>
	)
}