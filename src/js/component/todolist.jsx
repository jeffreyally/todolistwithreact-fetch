import React from "react";
import { useState } from "react";

export const TodoList = () => {
	const [inputTask, setInputTask] = useState("");
	const [taskList, modifyTask] = useState([])
	return (
		<>
			<div className="todolistbox">
				<h1>Todos</h1>
				<input
                    onKeyUp={()=>}
					type=""
					value={inputTask}
					onChange={(e) => setInputTask(e.target.value)}></input>
			</div>
		</>
	);
};
