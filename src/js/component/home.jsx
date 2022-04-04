import React, { useState } from "react";
// import "/workspace/react-hello/src/styles/index.css";

const Home = () => {
	const [selected, setSelected] = useState("blue");

	return (
		<div>
			<div className="stick bg-dark m-auto"></div>
			<div className="rectangle bg-dark m-auto">
				<div
					onClick={() => setSelected("red")}
					className={
						"red bg-danger mt-2 " +
						(selected === "red" ? "lightOn" : "")
					}></div>
				<div
					onClick={() => setSelected("yellow")}
					className={
						"yellow bg-warning " +
						(selected === "yellow" ? "lightOn" : "")
					}></div>
				<div
					onClick={() => setSelected("green")}
					className={
						"green bg-success " +
						(selected === "green" ? "lightOn" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
