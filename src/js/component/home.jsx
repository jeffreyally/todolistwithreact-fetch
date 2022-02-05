import React from "react";
import { TodoList } from "./todolist.jsx";

//create your first component
export const Home = (props) => {
	return (
		<div className="Homediv">
			<TodoList />
		</div>
	);
};

//
