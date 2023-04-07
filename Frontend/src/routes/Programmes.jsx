import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { ProgrammesData } from "../utils/sideMenu.config";
import useWindowSize from "../hooks/useWindowWidth";

const Programmes = () => {
	const { width, height } = useWindowSize();
	return (
		<div className="mx-5 my-4 flex flex-wrap items-start justify-between">
			<div className={`${width <= 768 ? "basis-full" : "basis-[20%] "} w-full`}>
				<Sidebar data={ProgrammesData} />
			</div>
			<div className={`${width > 768 && "basis-[80%]"} my-3 w-full overflow-scroll md:overflow-hidden`}>
				<Outlet />
			</div>
		</div>
	);
};

export default Programmes;
