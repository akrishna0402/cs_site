import React from "react";
import { NavLink } from "react-router-dom";
import NavItemHeader from "./index.jsx";

const NavItem = (props) => {
	const activeClassname = {
		color: "white",
		backgroundColor: "#021333",
		
		borderRadius: "10px"
	};
	const { name, to, children } = props.item;

	if (children) {
		return <NavItemHeader item={props.item} className="navItemBg" />;
	}

	return (
		
			<NavLink
				style={({ isActive }) => (isActive ? activeClassname : undefined)}
				className={`w-full`}
				to={to}
				exact="true"
			>
				<div className={`w-full h-full p-3 rounded-xl ${props.className}`}>
				{name}
				</div>
			</NavLink>
		
	);
};

export default NavItem;
