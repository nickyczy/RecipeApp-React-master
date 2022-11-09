import React from "react";
import classes from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = (props) => {
	return (
		<div className={classes.container}>
			<div className={classes.form}>
				<h1>Find a Recipe...</h1>
				<form onClick={props.onShowSearchBar}>
					<input type="search" />
					<button>
						<FaSearch className={classes.icon} />
					</button>
				</form>
			</div>
		</div>
	);
};

export default SearchBar;
