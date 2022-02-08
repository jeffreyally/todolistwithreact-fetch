import React from "react";
import { useState } from "react";
import { Todolist } from "./todolist.jsx";

export const TasksWithDeleteIcon = (props) => {
	return (
		<>
			<ol type="1">
				{props.tlist.map((task, makeidtheindex) => {
					return (
						<>
							<br></br>
							<li>
								<span className="thetask" id={makeidtheindex}>
									{task}
									<i
										className="fa fa-trash"
										onClick={(e) =>
											props.modlist(
												props.tlist.filter(
													(
														eachtask,
														eachtaskindex
													) => {
														return (
															eachtaskindex !=
															makeidtheindex
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
		</>
	);
};
