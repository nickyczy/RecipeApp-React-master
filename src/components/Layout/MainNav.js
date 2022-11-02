import React from "react";
import classes from "./MainNav.module.css";

const Nav = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Logo</div>
			<nav className={classes.nav}>
				<ul>
					<li>Recipes</li>
					<li>Contact</li>
					<li>Products</li>
					<li>Sign in</li>
				</ul>
				<button>Logout</button>
			</nav>
		</header>
	);
};

export default Nav;
