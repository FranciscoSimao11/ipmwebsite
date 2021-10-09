import React, { useState } from "react";
import { members } from "../Developers";
import "../styles/Teampage.css";

function Teampage() {
	const [developers, setDevs] = useState(members);
	console.log(developers);
	return (
		<div>
			<div className="team-container">
				{developers.map((m) => (
					<div className="member-container">
						<p>{m.name}</p>
						<p>{m.number}</p>
						<p>{m.email}</p>
						<img src={m.photo} className="picture-container"></img>
					</div>
				))}
			</div>
		</div>
	);
}

export default Teampage;
