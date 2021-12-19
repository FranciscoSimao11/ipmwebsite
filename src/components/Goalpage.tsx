import React from "react";
import "../styles/Goalpage.css";

function Goalpage() {
	return (
		<div className="goal-container">
			<div className="goal-wrapper">
				<p className="goal">
					{" "}
					<b>URL of the application:</b>{" "}
					<a
						className="goal-anchor"
						href="https://franciscosimao11.github.io/balltogether/"
					>
						{" "}
						https://franciscosimao11.github.io/balltogether/{" "}
					</a>
				</p>
				<p className="goal">
					{" "}
					<b>GitHub Repository:</b>{" "}
					<a
						className="goal-anchor"
						href="https://github.com/FranciscoSimao11/balltogether"
					>
						{" "}
						https://github.com/FranciscoSimao11/balltogether{" "}
					</a>
				</p>
				<p className="goal">
					{" "}
					<b>Startup instructions:</b> To use the deployed application on the{" "}
					<a
						className="goal-anchor"
						href="https://franciscosimao11.github.io/balltogether/"
					>
						{" "}
						https://franciscosimao11.github.io/balltogether/{" "}
					</a>{" "}
					url, all that needs to be done is to run the following command locally
					- npx json-server --watch data/db.json --port 8000 on the appropriate
					directory. This will simulate a database. You can create a folder
					named “data” and place the db.json file we provide on that folder.
					Then you just need to run the command on the directory of the folder.
				</p>
				<p className="goal">
					{" "}
					<b>For example:</b> You create the folder “data” on your desktop and
					place the json file inside it. Then you open the terminal in the
					directory of the desktop “…/Desktop/” and execute the command there.{" "}
				</p>
				<p className="goal">
					<b>Briefing:</b> Our application aims to solve a problem that we have
					been through before which prevented us from having fun at times. We
					wanted to organize a friendly 5v5 football match, for example, but it
					was always tough to find 10 people who were available to play at the
					same time. And so we thought we could do something about that and aid
					those in the same situation with our application. We allow you to host
					your own matches and invite your friends or join matches that have
					already been created. You can play with friends or with people you
					haven’t met yet, so it’s easier to find enough people to play with.
					You can create your own account and customize your profile. You’re
					able to add friends and see other player’s profiles. And, above all,
					you’re able to search for matches with filters so you can find the
					perfect match to jump in and show your skills!
				</p>
			</div>
		</div>
	);
}

export default Goalpage;
