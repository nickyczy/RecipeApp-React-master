import React, { useRef, useState } from "react";
import classes from "./SigninForm.module.css";

const SigninForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const btnRef = useRef(null);
	const loginRef = useRef(null);
	const registerRef = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		// Send a request to the server with the login credentials
	};

	const registerHandler = () => {
		console.log(loginRef);
		loginRef.current.style.left = "-400px";
		registerRef.current.style.left = "50px";
		btnRef.current.style.left = "110px";
	};
	const loginHandler = () => {
		loginRef.current.style.left = "50px";
		registerRef.current.style.left = "450px";
		btnRef.current.style.left = "0px";
	};

	return (
		<div className={classes.hero}>
			<div className={classes["form-box"]}>
				<div className={classes["button-box"]}>
					<div ref={btnRef} id={classes.btn}></div>
					<button
						type="button"
						className={classes["toggle-btn"]}
						onClick={loginHandler}
					>
						Login
					</button>
					<button
						onClick={registerHandler}
						type="button"
						className={classes["toggle-btn"]}
					>
						Register
					</button>
				</div>

				<form
					action=""
					ref={loginRef}
					className={classes["input-group"]}
					id={classes.login}
				>
					<input
						type="text"
						className={classes["input-field"]}
						placeholder="User Email"
						required
						value={email}
					/>
					<input
						type="password"
						className={classes["input-field"]}
						placeholder="Enter password"
					/>
					<input
						type="checkbox"
						name="checkbox"
						className={classes["checkbox"]}
						required
					/>
					<label htmlFor="checkbox">Remember password</label>
					<button type="submit" className={classes["submit-btn"]}>
						Login
					</button>
				</form>

				<form
					action=""
					className={classes["input-group"]}
					ref={registerRef}
					id={classes.register}
				>
					<input
						type="text"
						className={classes["input-field"]}
						placeholder="User ID"
						required
					/>
					<input
						type="email"
						className={classes["input-field"]}
						placeholder="Email ID"
						required
					/>
					<input
						type="password"
						className={classes["input-field"]}
						placeholder="Enter password"
					/>
					<input
						type="checkbox"
						name="checkbox"
						className={classes["checkbox"]}
						required
					/>
					<label htmlFor="checkbox">
						I agree with the Terms and Conditions
					</label>
					<button type="submit" className={classes["submit-btn"]}>
						Register
					</button>
				</form>
			</div>
		</div>
	);
};

export default SigninForm;
