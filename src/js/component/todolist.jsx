import React from "react";
import { useState } from "react";
import { TasksWithDeleteIcon } from "./taskswithdelete.jsx";

export const TodoList = (props) => {
	const [inputTask, setInputTask] = useState("");
	const [taskList, modifyTask] = useState([]);
	//update modifyTask to setTaskList in the future
	let saveTask = (e) => {
		if (e.keyCode == 13) {
			modifyTask([...taskList, { task: inputTask, done: false }]);

			setInputTask("");
		}
	};
	return (
		<>
			<div className="todolistbox">
				<div className="h1box">
					<h1>To-Do List</h1>
					<input
						onKeyUp={(e) => saveTask(e)}
						type=""
						value={inputTask}
						onChange={(e) => setInputTask(e.target.value)}></input>
				</div>
				<TasksWithDeleteIcon tlist={taskList} modlist={modifyTask} />
			</div>
		</>
	);
};
