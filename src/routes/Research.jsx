import React from "react";
import { researchData } from "../utils/research.config";
const Research = () => {
	return (
		<div className="mx-5 my-4 flex flex-col items-start justify-between  overflow-scroll md:overflow-hidden">
			<h1 className="text-2xl mb-4 font-bold">
				Collaboration with Academic and Research Institutions in recent times
			</h1>
			<table className="border my-4 border-black w-full text-center">
				<thead className="p-2 font-bold text-white bg-[#021333]">
					{Object.keys(researchData[0]).map((h) => {
						return <td>{h}</td>;
					})}
				</thead>
				<tbody>
					{researchData.map((res) => {
						return (
							<tr>
								<td>{res["Collaborating Institute / Organization"]}</td>
								<td>{res["Areas of Collaboration"]}</td>
								<td>{res["Faculty Members Involved"]}</td>
								<td>{res.Year}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Research;
