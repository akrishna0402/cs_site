import React from "react";

const Card = ({ heading, data, className }) => {
	return (
		<div
			className={`relative rounded-2xl px-3 py-2 border w-[80%] ml-[10%] my-2 border-black ${className}`}
		>
			<div className="absolute top-0 left-0 bg-gray-200 rounded-tl-2xl p-1">
				20/11/2022
			</div>
			<p className="mt-4 text-xl text-center">Notice</p>
		</div>
	);
};

export default Card;
