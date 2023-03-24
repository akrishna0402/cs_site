import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import useWindowSize from "../../hooks/useWindowWidth";
import { NavLink } from "react-router-dom";

const Header = () => {
	const { width } = useWindowSize();
	const [active, setActive] = useState(false);

	const activeStyle = {
		padding: "10px",
		borderRadius: "20px",
		color: "white",
		background: "black",
	};

	const handleClick = () => {
		setActive(!active);
	};

	const mobileNav = (
		<nav className="w-full">
			<ul className="nav-menu active">
				<li className="w-full">
					<NavLink
						to="/"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Home
					</NavLink>
				</li>
				<li className="w-full">
					<NavLink
						to="/programmes"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Programmes
					</NavLink>
				</li>
				<li className="w-full">
					<NavLink
						to="/people"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						People
					</NavLink>
				</li>
				<li className="w-full">
					<NavLink
						to="/research"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Research
					</NavLink>
				</li>
				<li className="w-full">
					<NavLink
						to="/projects"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Projects
					</NavLink>
				</li>
				<li className="w-full">
					<NavLink
						to="/alumini"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Alumini
					</NavLink>
				</li>
				<li className="w-full">
					<NavLink
						to="/events"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Events
					</NavLink>
				</li>
				<li className="w-full">
					<NavLink
						to="/contact"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);

	return (
		<div className="px-4 py-2 flex flex-col md:flex-row justify-between items-center w-full bg-[#4489ff]  text-white">
			<div className="flex w-full items-center gap-4">
				<img
					src="https://nitdgp.ac.in/front/assets/images/logo.png"
					alt="Nitdgp"
				/>
				<span className="text-xl md:text-2xl font-bold">
					National Institute of Technolgy, Durgapur
				</span>
			</div>
			<div className="flex items-center  justify-between md:justify-end w-full mt-4 md:my-0">
				<span className="text-md md:text-xl font-semibold">
					Computer Science and Enginnering
				</span>
				{width < 768 && (
					<buttom
						onClick={handleClick}
						className="flex items-center justify-center border rounded-md gap-2 border-white p-1"
					>
						<FiMenu />
						<span>Menu</span>
					</buttom>
				)}
			</div>
			{active && mobileNav}
		</div>
	);
};

export default Header;
