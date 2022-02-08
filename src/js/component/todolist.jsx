import React from "react";
import { useState } from "react";
import { TasksWithDeleteIcon } from "./taskswithdelete.jsx";

export const TodoList = (props) => {
	const [inputTask, setInputTask] = useState("");
	const [taskList, modifyTask] = useState([]);
	let saveTask = (e) => {
		if (e.keyCode == 13) {
			modifyTask([...taskList, inputTask]);
			//s st stu stud "study"
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
let g = `console.log(
	e.target.previousSibling.data
	
	console.log(true)`;

let f = `<i
className="fa fa-trash"
onClick={(e) =>
	modifyTask(
		taskList.filter(
			(eachtask) => {
				console.log(
					eachtask !=
						e.target
							.previousSibling
							.data
				);
				return (
					eachtask !=
					e.target
						.previousSibling
						.data
				);
			}
		)
	)
}>`;
