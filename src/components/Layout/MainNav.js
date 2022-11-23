import { Spin as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import classes from "./MainNav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const [clicked, setClicked] = useState(false);

	const iconClickedHandler = () => {
		setClicked(!clicked);
	};

	const multipleClasses = classes.navbar + " " + classes.active;
	let activeStyle = {
		color: "black",
		textDecoration: "none",
	};

	return (
		<header>
			<div className={classes.logo}>
				<NavLink
					to={"/"}
					className={({ isActive }) =>
						isActive ? classes.navlinkActive : classes.navlinkInactive
					}
				>
					Food Diary
				</NavLink>
			</div>
			<nav>
				<ul
					id={classes.navbar}
					className={clicked ? multipleClasses : classes.navbar}
				>
					<li className={classes.active}>
						<NavLink
							to={"/"}
							className={({ isActive }) =>
								isActive ? classes.navlinkActive : classes.adnavlinkInactive
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/recipes"}
							className={({ isActive }) =>
								isActive ? classes.navlinkActive : classes.navlinkInactive
							}
						>
							Recipes
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/contact"}
							className={({ isActive }) =>
								isActive ? classes.navlinkActive : classes.navlinkInactive
							}
						>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/products"}
							className={({ isActive }) =>
								isActive ? classes.navlinkActive : classes.navlinkInactive
							}
						>
							Products
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/signin"}
							className={({ isActive }) =>
								isActive ? classes.navlinkActive : classes.navlinkInactive
							}
						>
							Sign in
						</NavLink>
					</li>
					<button>Logout</button>
				</ul>
			</nav>
			<div className={classes.mobile}>
				<Hamburger toggled={clicked} toggle={setClicked} size={38} />
			</div>
		</header>
	);
};

export default Nav;
