import React from "react";
import { useState, useEffect } from "react";
import { TasksWithDeleteIcon } from "./taskswithdelete.jsx";

export const TodoList = (props) => {
	const URI = "https://assets.breatheco.de/apis/fake/todos/user/jeffreyally";
	useEffect(() => {
		fetch(URI, {
			method: "GET",
		})
			.then((response) => {
				return response.json();
			})
			.then((responseinJS) => {
				modifyTask(responseinJS);
				console.log("Response in JS", responseinJS);
			});
	}, []);

	const [inputTask, setInputTask] = useState("");
	const [taskList, modifyTask] = useState([]);
	//update modifyTask to setTaskList in the future
	let saveTask = (e) => {
		if (e.keyCode == 13) {
			let todos = [...taskList];
			let newTodos = todos.concat({
				// takes previous list and new item to make current list
				label: inputTask,
				done: false,
			});
			console.log(newTodos);
			modifyTask(newTodos);
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
