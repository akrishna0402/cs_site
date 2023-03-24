import React from "react";
import NavItem from "../NavItem/item";

const Sidebar = ({ data }) => {
	return (
		<div className="card md:mr-6 rounded-xl">
			<nav className="flex flex-col items-start justify-center gap-3">
				{data.map((i, index) => {
					return <NavItem className="navItemBg" key={index} item={i} />;
				})}
			</nav>
		</div>
	);
};

export default Sidebar;
