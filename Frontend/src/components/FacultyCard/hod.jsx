import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const HODCard = ({ className }) => {
	return (
		<div
			className={`card flex items-center flex-row p-3 justify-between ${className}`}
		>
			<div className="mx-3 w-1/2">
				<img
					className="rounded-xl object-cover w-[125px]"
					src="https://nitdgp.ac.in/uploads/userfiles/images/Subrata_Nandi.jpg"
					alt="hod"
				/>
			</div>
			<div className="flex w-full h-full flex-col items-start justify-between">
				<div className="text-center font-bold  text-[20px] w-full rounded-xl navItemBg">
					<h1>HOD</h1>
				</div>
				<div className="w-full flex flex-col h-full mt-3 items-center justify-between">
					<p className="text-xl font-semibold text-center">Subrata Nandi</p>
					<div className="text-center">
						<p className="text-sm font-semibold text-blue-900">
							Research Intrest
						</p>
						<span className="text-sm">
							Delay Tolerant Network, Sensor Network, Complex Network Theory
						</span>
					</div>
					<div className="flex items-center justify-between w-full">
						<div className="flex items-center gap-2 justify-center">
							<HiMail />
							<span>123@test.com</span>
						</div>
						<div className="flex items-center gap-2 justify-center">
							<BsFillTelephoneFill />
							<span>122928993</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HODCard;
