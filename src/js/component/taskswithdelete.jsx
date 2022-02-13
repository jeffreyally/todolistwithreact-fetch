import React from "react";
import { useState } from "react";
import { Todolist } from "./todolist.jsx";

export const TasksWithDeleteIcon = (props) => {
	return (
		<>
			<ol type="1">
				{props.tlist.length == 0
					? null
					: props.tlist.map((maptask, makespanIDtheindex) => {
							return (
								<>
									<br></br>
									<li>
										<span
											className="thetask"
											id={makespanIDtheindex}>
											<span>{maptask.label}</span>
											<span>
												<span
													onClick={(e) => {
														if (
															props.tlist.indexOf(
																maptask ==
																	makespanIDtheindex
															)
														) {
															maptask.done =
																!maptask.done;
															console.log(
																maptask
															);
														}
													}}
													className={
														maptask.done
															? "green"
															: ""
													}>
													<i className="fas fa-check-square"></i>
												</span>
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
																	makespanIDtheindex
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
					  })}
			</ol>
		</>
	);
};

let holdit = `<i onClick={(e) => { if ( props.tlist.indexOf( maptask == makespanIDtheindex ) ) { maptask.done = !maptask.done; console.log(maptask); } }} className={ maptask.done ? "" : "green" } className="fas fa-check-square"></i>`;
