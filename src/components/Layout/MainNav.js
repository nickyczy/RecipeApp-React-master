import { Spin as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import classes from "./MainNav.module.css";

const Nav = () => {
	const [clicked, setClicked] = useState(false);

	const iconClickedHandler = () => {
		setClicked(!clicked);
	};

	const multipleClasses = classes.navbar + " " + classes.active;

	return (
		<header>
			<div className={classes.logo}>Logo</div>
			<nav>
				<ul
					id={classes.navbar}
					className={clicked ? multipleClasses : classes.navbar}
				>
					<li className={classes.active}>Home</li>
					<li>Recipes</li>
					<li>Contact</li>
					<li>Products</li>
					<li>Sign in</li>
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
