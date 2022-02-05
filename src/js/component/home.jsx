import React from "react";
import { TodoList } from "./todolist.jsx";
import { taskLi } from "./taskli.jsx";

//create your first component
export const Home = (props) => {
	return (
		<div className="Homediv">
			<TodoList />
		</div>
	);
};

//
