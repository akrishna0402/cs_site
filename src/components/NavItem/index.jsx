import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
const resolveLinkPath = (childTo, parentTo) => `${parentTo}/${childTo}`;

const NavItemHeader = (props) => {
	const activeClassname = {
		color: "blue",
	};
	const { item } = props;
	const { name, to: headerToPath, children } = item;
	const location = useLocation();

	const [expanded, setExpand] = useState(
		location.pathname.includes(headerToPath)
	);

	const onExpandChange = (e) => {
		e.preventDefault();
		setExpand((expanded) => !expanded);
	};

	return (
		<>
			<div className={`w-full h-full p-3 rounded-xl ${props.className}`}>
				<button
					className="flex w-full h-full items-center justify-between"
					onClick={onExpandChange}
				>
					<span>{name}</span>
					{expanded ? <IoMdArrowDropup size={20} /> : <IoMdArrowDropdown />}
				</button>
			</div>

			{expanded && (
				<div className="flex flex-col ml-2 gap-3">
					{children.map((item, index) => {
						const key = `${item.name}-${index}`;

						const { name, to, children } = item;

						if (children) {
							return (
								<div key={key}>
									<NavItemHeader
										item={{
											...item,
											to: resolveLinkPath(item.to, props.item.to),
										}}
									/>
								</div>
							);
						}

						return (
							<NavLink
								style={({ isActive }) =>
									isActive ? activeClassname : undefined
								}
								key={key}
								to={to}
							>
								<span>{name}</span>
							</NavLink>
						);
					})}
				</div>
			)}
		</>
	);
};

export default NavItemHeader;
