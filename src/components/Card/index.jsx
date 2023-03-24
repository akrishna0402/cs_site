import React from "react";

const Card = ({ date, notice, className }) => {
	return (
		<div
			className={`flex flex-col md:flex-row items-start md:items-center justify-start rounded-xl py-1 px-2 md:px-3 md:py-2 border w-[80%] ml-[10%] my-2 navItemBg ${className}`}
		>
			<div className=" bg-[#4489ffed] text-white rounded-md p-1 my-2 md:mr-2 md:my-0 text-sm navItemBg">
				{date}
			</div>
			<p className="text-md  md:text-center ml-2">{notice}</p>
		</div>
	);
};

export default Card;
