import React from "react";
import { FaVideo } from "react-icons/fa";


const EventInfo = ({date, eventName, eventLink}) => {
	return (
		<div className="flex w-full items-center justify-between border p-2 border-black rounded-xl">
			<div className="flex items-center justify-start">
				<div className=" bg-[#021333] text-white rounded-xl p-2 text-sm navItemBg">
					10-11-2022
				</div>
				<span className="md:ml-4">
                    CSE Society Auditions Round-2, 2022
                </span>
			</div>
			<button to="https://meet.google.com/" className="flex items-center justify-between buttons text-white rounded-xl bg-[#021333] p-2 hover:bg-[rgba(2,19,51,0.8)]">
				<FaVideo className="w-10" />
				<span className="ml-2 mr-4">Join</span>
			</button>
		</div>
	);
};

export default EventInfo;
