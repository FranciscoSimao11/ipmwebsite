import { Button, Link } from "@mui/material";
import React from "react";
import "../styles/Homepage.css";

function Homepage() {
	return (
		<div className="intro-container">
			<p className="introduction">
				Welcome to Ball Together's information website! Feel free to explore
				around the website to find out about us and our goal!
			</p>
			<div className="back">
				<Button
					sx={{
					}}
				>
					<Link style={{
						textDecoration: "none",
						color: "rgb(0, 178, 155)",
						fontSize: "20px",
						fontWeight: 600
					}} href="https://github.com/FranciscoSimao11/balltogether/archive/refs/heads/master.zip">
						Click here to download the application!
					</Link>
				</Button>
			</div>
		</div >
	);
}

export default Homepage;
