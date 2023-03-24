import React from "react";
import { projectsData } from "../utils/projects.config";

const Projects = () => {
	return (
		<div className="mx-5 my-4 flex flex-col items-start justify-between pb-10 overflow-scroll md:overflow-hidden">
			<h1 className="text-2xl mb-4 font-bold">Sponsored Projects</h1>
			<table className="border my-4 border-black w-full text-center">
				<thead className="p-2 font-bold text-white bg-[#4489ffed]">
					{Object.keys(projectsData[0]).map((p) => {
						return <td>{p}</td>;
					})}
				</thead>
				<tbody>
					{projectsData.map((p) => {
						return (
							<tr>
								{Object.keys(p).map((i) => {
									return <td>{p[i]}</td>;
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Projects;
