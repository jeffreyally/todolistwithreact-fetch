import React from "react";
import { useState } from "react";
import { TasksWithDeleteIcon } from "./taskswithdelete.jsx";

//const URI = 'http://assets.breatheco.de/apis/fake/todos/user/jeffreyally'
//useEffect(() => {
//Runs only on the first render
//}, []); we need to populate our todo list on first render

export const TodoList = (props) => {
	const [inputTask, setInputTask] = useState("");
	const [taskList, modifyTask] = useState([]);
	//update modifyTask to setTaskList in the future
	let saveTask = (e) => {
		if (e.keyCode == 13) {
			// 	const newTask = {
			// 		task: inputTask,
			// 		done: false,
			// 	}
			modifyTask([...taskList, { label: inputTask, done: false }]);
			//above modifyTask([...taskList, newTask]) could also be used
			//this is where I think I will send a task to the backend(PUT request?)
			//it needs to be an array of objects so I believe that part is in place at least
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
