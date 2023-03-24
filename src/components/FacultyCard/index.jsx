import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const FacultyCard = ({
	designation,
	name,
	image,
	expertise,
	contact,
	joinYear,
}) => {
	return (
		<div className="card flex flex-col items-center justify-between p-3 w-[300px] h-[29rem]">
			<img
				className="rounded-2xl object-cover w-[200px] h-[200px]"
				src={image}
				alt="prof"
			/>
			<div className="flex flex-col items-center justify-center">
				<p className="font-semibold text-xl mt-2">{name}</p>
				<h2 className="text-sm mt-1">{designation}</h2>
			</div>
			<p className="mt-2 text-sm font-semibold text-blue-900">
				Research Intrest
			</p>
			{console.log(expertise)}
			{expertise?.map((e) => {
				console.log(e);
				return <span className="text-sm">{e}</span>;
			})}
			<div className="flex flex-col items-start my-2 px-2">
				<div className="flex items-center gap-2 justify-center break-all">
					<HiMail size={20} />
					<span>{contact?.email}</span>
				</div>
				<div className="flex flex-wrap items-center gap-2 justify-center">
					<BsFillTelephoneFill />
					<span>{contact?.phone}</span>
				</div>
			</div>

			<span className="text-sm">Joined : {joinYear}</span>
		</div>
	);
};

export default FacultyCard;
