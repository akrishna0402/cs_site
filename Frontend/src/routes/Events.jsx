import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { eventsData } from "../utils/events.config";
import useWindowSize from "../hooks/useWindowWidth";

const Events = () => {
	const { width } = useWindowSize(	);
	return (
		<div className="mx-5 my-4 flex items-start justify-between">
			<div className={`${width <= 768 ? "basis-full" : "basis-[20%] "} w-full`}>
				<Sidebar data={eventsData} />
			</div>
			<div
				className={`${
					width > 768 && "basis-[80%]"
				} my-3 w-full overflow-scroll md:overflow-hidden`}
			>
				<Outlet />
			</div>
		</div>
	);
};

export default Events;
