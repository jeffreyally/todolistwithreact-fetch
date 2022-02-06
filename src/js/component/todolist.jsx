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
					<h1>To-Do List</h1>
					<input
						onKeyUp={(e) => saveTask(e)}
						type=""
						value={inputTask}
						onChange={(e) => setInputTask(e.target.value)}></input>
					<ol type="1">
						{taskList.map((task) => {
							return (
								<>
									<br></br>
									<li>
										<span className="thetask">
											{task}
											<i
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
												}></i>
										</span>
									</li>
								</>
							);
						})}
					</ol>
				</div>
			</div>
		</>
	);
};
let g = `console.log(
	e.target.previousSibling.data
	
	console.log(true)`;

let f = `onClick={(e) =>
		taskList.filter(
			(writtentask) => {
				console.log(
					writtentask
				);
				return (
					writtentask !=
					e.target
						.previousSibling
				);
			}
		)
	}`;
