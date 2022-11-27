import React, { useState } from "react";
import classes from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
	const [input, setInput] = useState("");
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate("/searched/" + input);
	};
	return (
		<div className={classes.container}>
			<div className={classes.form}>
				<h1>Find a Recipe...</h1>
				<form onSubmit={submitHandler}>
					<input
						onChange={(e) => {
							setInput(e.target.value);
						}}
						type="text"
						value={input}
					/>
					<button>
						<FaSearch className={classes.icon} />
					</button>
				</form>
			</div>
		</div>
	);
};

export default SearchBar;
