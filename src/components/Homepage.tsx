import React from "react";
import "../styles/Homepage.css";

function Homepage() {
	return (
		<div className="intro-container">
			<p className="introduction">
				Welcome to Ball Together's information website! Feel free to explore
				around the website to find out about us and our goal!
			</p>
			<img
				src="https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157931_1280.png"
				className="ball-picture"
			></img>
		</div>
	);
}

export default Homepage;
