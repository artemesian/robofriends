import React from 'react';
import "./SearchBox.css";

export default function SearchBox(props) {
	return (
		<div>
			<input type="search" placeholder="search Robot" className="searchbox" onChange={(e)=>props.onSearchField(e.target.value)}/>
		</div>
	)
}