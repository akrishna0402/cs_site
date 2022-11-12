import React from "react";

const FacultyCard = ({
	designation,
	name,
	image,
	experise,
	contact,
	joinYear,
}) => {
	return (
		<div className="card flex flex-col items-center p-3">
			<h2 className="text-2xl font-bold mb-2">{designation}</h2>
			<hr className=" border border-black w-full mb-3" />
			<img className="rounded-2xl w-[10rem] h-[15rem]" src={image} alt="prof" />
			<p className="font-semibold text-xl my-2">{name}</p>
			<p>Joined : {joinYear}</p>
			<p className="my-2 font-semibold">Research Intrest</p>
			{experise}
			<hr />
			{contact}
		</div>
	);
};

export default FacultyCard;
