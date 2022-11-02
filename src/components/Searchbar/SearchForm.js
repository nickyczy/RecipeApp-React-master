import React, { useRef } from "react";
import classes from "./SearchForm.module.css";
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Modal from "../Layout/Modal";

const SearchForm = (props) => {
	const textInputRef = useRef();

	return (
		<Modal>
			<div className={classes.container}>
				<div className={classes.iconContainer} onClick={props.onClose}>
					<GrClose className={classes.closeIcon} />
				</div>
				<div className={classes.form}>
					<form>
						<input type="text" placeholder="Find a Recipe . . ." />
						<button>
							<FaSearch className={classes.icon} />
						</button>
					</form>
				</div>
				<span></span>
			</div>
		</Modal>
	);
};

export default SearchForm;
