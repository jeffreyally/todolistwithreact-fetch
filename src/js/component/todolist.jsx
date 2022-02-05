import React from "react";
import { useState } from "react";

export const TodoList = (props) => {
	const [inputTask, setInputTask] = useState("");
	const [taskList, modifyTask] = useState([]);
	let saveTask = (e) => {
		if (e.keyCode == 13) {
			modifyTask([...taskList, inputTask]);
			setInputTask("");
		}
	};
	return (
		<>
			<div className="todolistbox">
				<div className="h1box">
					<h1>Todos</h1>
					<input
						onKeyUp={(e) => saveTask(e)}
						type=""
						value={inputTask}
						onChange={(e) => setInputTask(e.target.value)}></input>
					<ol type="1">
						{taskList.map((task) => {
							return <li>{task}</li>;
						})}
					</ol>
				</div>
			</div>
		</>
	);
};
