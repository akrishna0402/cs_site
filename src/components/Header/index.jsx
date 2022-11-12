import React from "react";

const Header = () => {
	return (
		<div className="px-4 py-2 flex justify-between items-center sticky w-full bg-blue-400 text-white">
			<div className="flex items-center gap-4">
				<img
					src="https://nitdgp.ac.in/front/assets/images/logo.png"
					alt="Nitdgp"
				/>
				<span className="text-2xl">
					National Institute of Technolgy, Durgapur
				</span>
			</div>
			<div>
				<span className="text-xl">Computer Science and Enginnering</span>
			</div>
		</div>
	);
};

export default Header;
