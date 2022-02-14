import React from "react";
import { useState } from "react";
import { Todolist } from "./todolist.jsx";

export const TasksWithDeleteIcon = (props) => {
	return (
		<>
			<ol type="1">
				{props.tlist.length == 0
					? null //if the list is empty show nothing so that a line with just a trashcan at the end is not shown
					: props.tlist.map(
							(maptask, indexforIDandFilterFunction) => {
								return (
									<>
										<br></br>
										<li>
											<span
												className="thetask"
												id={
													indexforIDandFilterFunction
												}>
												<span>{maptask.label}</span>
												<span>
													<i
														className="fa fa-trash"
														onClick={(e) => {
															let filteredarray =
																props.tlist.filter(
																	(
																		tasktToRemove,
																		i
																	) =>
																		i !=
																		indexforIDandFilterFunction
																);
															props.modlist(
																filteredarray
															);
															props.putRequest(
																filteredarray
															);
														}}></i>
												</span>
											</span>
										</li>
									</>
								);
							}
					  )}
			</ol>
			<span class="flexbuttons">
				<button
					class="deletebutton"
					onClick={() => {
						props.deleteRequest(props.tlist);
					}}>
					Delete then Restart Tasklist
				</button>
			</span>
		</>
	);
};
