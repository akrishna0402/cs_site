import React from "react";
import FacultyCard from "../FacultyCard";
import { useLocation } from "react-router-dom";
import {
	facultyDetails,
	StaffDetails,
	StudentDetails,
} from "../../utils/faculty.config";

const Faculty = () => {
	const { pathname } = useLocation();

	console.log(pathname.split("/")[2]);
	const facultyType = pathname.split("/")[2];

	let data = facultyDetails;
	if (facultyType === "student") data = StudentDetails;
	else if (facultyType === "staff") data = StaffDetails;

	return (
		<div className="flex flex-wrap gap-2 items-center justify-start">
			{data.map((d) => {
				return (
					<FacultyCard
						key={d.name}
						name={d.name}
						designation={d.desg}
						image={d.profile}
						contact={d.contact}
						expertise={d.researchIntrests}
						joinYear={d.joined}
					/>
				);
			})}
		</div>
	);
};

export default Faculty;
