import React from "react";
import { useState } from "react";
import { Todolist } from "./todolist.jsx";

export const TasksWithDeleteIcon = (props) => {
	return (
		<>
			<ol type="1">
				{props.tlist.length == 0
					? null
					: props.tlist.map((maptask, makeidtheindex) => {
							return (
								<>
									<br></br>
									<li>
										<span
											className="thetask"
											id={makeidtheindex}>
											{maptask.label}

											<i
												className="fa fa-trash"
												onClick={(e) =>
													props.modlist(
														props.tlist.filter(
															(
																eachtask,
																eachtaskindex
															) => {
																//this is where I think I will delete one task from the todo list
																//(PUT request?)
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
