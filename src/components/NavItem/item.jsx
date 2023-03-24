import React from "react";
import { NavLink } from "react-router-dom";
import NavItemHeader from "./index.jsx";

const NavItem = (props) => {
	const activeClassname = {
		color: "white",
		backgroundColor: "#4489FFDE",
		padding: "10px",
		borderRadius: "10px"
	};
	const { name, to, children } = props.item;

	if (children) {
		return <NavItemHeader item={props.item} className="navItemBg" />;
	}

	return (
		<div className={`w-full h-full p-3 rounded-xl ${props.className}`}>
			<NavLink
				style={({ isActive }) => (isActive ? activeClassname : undefined)}
				to={to}
				exact="true"
			>
				{name}
			</NavLink>
		</div>
	);
};

export default NavItem;
