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
						<img src={m.photo} className="picture-container"></img>
						<p className="member-text">{m.name}</p>
						<p className="member-text">{m.number}</p>
						<p className="member-text">{m.email}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Teampage;
