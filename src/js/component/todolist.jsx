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
				if (response.status == 404) {
					fetch(URI, {
						method: "POST",
						body: JSON.stringify([]), // data can be `string` or {object}!
						headers: {
							"Content-Type": "application/json",
						},
					})
						.then((resp) => {
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then((data) => {
							// from class notes ----console.log("success", response)
							// from class notes ----getFetch()
							//here is were your code should start after the fetch finishes
							console.log(data); //this will print on the console the exact object received from the server
						})
						.catch((error) => {
							//error handling
							console.log(error);
							//from class notes ----console.error("error", error);
						});
				} else {
					return response.json();
				}
			})
			.then((responseinJS) => {
				modifyTask(responseinJS);
			});
	}, []);

	const putRequest = (updatedTodos) => {
		//updatedTodos is just a placeholder for the info we get from newToDos becuase newToDO only exist in saveTask function
		//put  FETCH API command
		fetch(URI, {
			method: "PUT",
			body: JSON.stringify(updatedTodos), // data can be `string` or {object}!
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				// from class notes ----console.log("success", response)
				// from class notes ----getFetch()
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
				//error handling
				console.log(error);
				//from class notes ----console.error("error", error);
			});
	};

	const deleteRequest = (updatedTodos) => {
		fetch(URI, {
			method: "DELETE",
		})
			.then((response) => {
				return response.json();
			})
			.then((responseinJS) => {
				modifyTask([]);
			});
	};

	const postRequest = () => {
		fetch(URI, {
			method: "POST",
			body: JSON.stringify([
				{
					label: "sample task",
					done: false,
				},
			]), // data can be `string` or {object}!
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				// from class notes ----console.log("success", response)
				// from class notes ----getFetch()
				modifyTask([{ label: "sample task", done: false }]);
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
				//error handling
				console.log(error);
				//from class notes ----console.error("error", error);
			});
	};

	const [inputTask, setInputTask] = useState("");
	const [taskList, modifyTask] = useState([]);
	//update modifyTask to setTaskList in the future
	let saveTask = (e) => {
		if (e.keyCode == 13) {
			modifyTask([...taskList, { label: inputTask, done: false }]);
			putRequest([...taskList, { label: inputTask, done: false }]);

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
				<TasksWithDeleteIcon
					tlist={taskList}
					modlist={modifyTask}
					putRequest={putRequest}
					deleteRequest={deleteRequest}
					postRequest={postRequest}
				/>
			</div>
		</>
	);
};
