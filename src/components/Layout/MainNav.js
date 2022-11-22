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
	};

	return (
		<header>
			<div className={classes.logo}>Logo</div>
			<nav>
				<ul
					id={classes.navbar}
					className={clicked ? multipleClasses : classes.navbar}
				>
					<li className={classes.active}>
						<NavLink
							to={"/"}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/recipes"}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Recipes
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/contact"}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/products"}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Products
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/signin"}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
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
