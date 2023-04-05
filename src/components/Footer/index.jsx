import React from "react";

const Footer = () => {
	return (
		<div className="flex items-center justify-between fixed bottom-0 w-full bg-[#021333] text-white">
			<div className="flex justify-start items-center">
				<p className="m-2 ml-4">Home</p>
				<p className="m-2">Contact us</p>
			</div>
			<div>
				<span className="mr-4">Copyright@2022 NIT Durgapur</span>
			</div>
		</div>
	);
};

export default Footer;
