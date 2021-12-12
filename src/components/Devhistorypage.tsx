import React from "react";
import "../styles/Devhistorypage.css";

function Devhistorypage() {
	return (
		<div>
			<p className="introduction-dev">
				Here you'll find out more about the stages of our development!
			</p>

			<div className="main-container">
				<div className="text-wrapper">
					<p> Development Stage 1 - Report :</p>
					<a className="stage-anchor" href="https://drive.google.com/file/d/19Ri4yWsT8wsuWtCI1sUQA4DB1vFy2ZFA/view" target="_blank" download> Click Here For Stage 1</a>
				</div>

				<div className="text-wrapper-right">
					<p> : Development Stage 2 - Report</p>
					<a className="stage-anchor-right" href="https://drive.google.com/file/d/1kpA8NGDBXHiLRlFsnyD3f2w2QLa0qIp_/view" target="_blank" download> Click Here For Stage 2</a>
				</div>

				<div className="text-wrapper">
					<p> Development Stage 3 - Report :</p>
					<a className="stage-anchor" href="https://drive.google.com/file/d/1CYrb__q9BAufbjSDy0uTzsDPjIOD9rXj/view" target="_blank" download> Click Here For Stage 3</a>
				</div>

				<div className="text-wrapper-right">
					<p> : Development Stage 4 - Report</p>
					<a className="stage-anchor-right" href="https://drive.google.com/file/d/1zyLxa2QcC077YPxQpUEY5O1yYAMhml1J/view" target="_blank" download> Click Here For Stage 4</a>
				</div>

				<div className="incomplete-text-wrapper">
					<p> Development Stage 5 :</p>

					<p> Development Stage 6 :</p>
				</div>
			</div>
		</div>
	);
}

export default Devhistorypage;
