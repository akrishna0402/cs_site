import React from "react";
import { useParams } from "react-router-dom";
import { SemData } from "../../utils/sem.config";

const SemTable = () => {
	const { ugId } = useParams();
	const list = SemData.find((s) => s.id == ugId);
	return (
		<div>
			<table className="border border-black w-full text-center">
				<thead className="p-2 font-bold text-white bg-[#4489ffed]">
					<td>COURSE TITLE</td>
					<td>CODE</td>
					<td>L</td>
					<td>T</td>
					<td>S</td>
					<td>C</td>
				</thead>
				<tbody>
					{list?.courses.map((c) => {
						console.log(c);
						return (
							<tr>
								<td>{c.name}</td>
								<td>{c.code}</td>
								<td>{c.L}</td>
								<td>{c.T}</td>
								<td>{c.S}</td>
								<td>{c.C}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default SemTable;
