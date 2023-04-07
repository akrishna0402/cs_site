import React from "react";
import Sidebar from "../components/Sidebar";
import { facultyData } from "../utils/faculty.config";
import { Outlet } from "react-router-dom";
import useWindowSize from "../hooks/useWindowWidth";

const People = () => {
	const { width } = useWindowSize();
	return (
		<div className="mx-5 my-4 flex flex-wrap pb-10 items-start justify-between">
			<div className={`${width <= 768 ? "basis-full" : "basis-[20%] "} w-full`}>
				<Sidebar data={facultyData} />
			</div>
			<div
				className={`${
					width > 768 && "basis-[80%]"
				} my-3 w-full px-6 py-4 overflow-scroll md:overflow-hidden`}
			>
				<Outlet />
			</div>
		</div>
	);
};

export default People;
