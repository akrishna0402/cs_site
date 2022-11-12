import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const activeStyle = {
		backgroundColor: "black",
		borderRadius: "100%",
		width: "100%",
	};
	return (
		<div className="rounded-full sticky mt-5 mx-4 flex text-white items-center justify-evenly bg-blue-400">
			<nav className="w-full">
				<ul className="w-full flex justify-evenly items-center rounded-full">
					<li className="w-full">
						<NavLink
							to="/"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							<div className="navItem">Home</div>
						</NavLink>
					</li>
					<li className="w-full">
						<NavLink
							to="/programmes"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							<div className="navItem">Programmes</div>
						</NavLink>
					</li>
					<li className="w-full">
						<NavLink
							to="/faculty"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							<div className="navItem">Faculty</div>
						</NavLink>
					</li>
					<li className="w-full">
						<NavLink
							to="/research"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							<div className="navItem">Research</div>
						</NavLink>
					</li>
					<li className="w-full">
						<NavLink
							to="/projects"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							<div className="navItem">Projects</div>
						</NavLink>
					</li>
					<li className="w-full">
						<NavLink
							to="/alumini"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							<div className="navItem">Alumini</div>
						</NavLink>
					</li>
					<li className="w-full">
						<NavLink
							to="/events"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							<div className="navItem">Events</div>
						</NavLink>
					</li>
					<li className="w-full">
						<NavLink
							to="/contact"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							<div className="navItem">Contact</div>
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
