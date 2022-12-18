import React, { useRef, useState } from "react";
import classes from "./SigninForm.module.css";
import { auth } from "../../firebase";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";

const SigninForm = () => {
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [signinEmail, setSigninEmail] = useState("");
	const [signinPassword, setSigninPassword] = useState("");

	const btnRef = useRef(null);
	const loginRef = useRef(null);
	const registerRef = useRef(null);

	const signInSubmit = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, signinEmail, signinPassword)
			.then((userCredential) => {
				console.log(userCredential);
			})
			.catch((err) => console.log(err));
	};

	const registerSubmit = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
			.then((userCredential) => {
				console.log(userCredential);
			})
			.catch((err) => console.log(err));
	};

	const registerHandler = () => {
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
					onSubmit={signInSubmit}
				>
					<input
						type="text"
						className={classes["input-field"]}
						placeholder="User Email"
						required
						value={signinEmail}
						onChange={(e) => setSigninEmail(e.target.value)}
					/>
					<input
						type="password"
						className={classes["input-field"]}
						placeholder="Enter password"
						value={signinPassword}
						onChange={(e) => setSigninPassword(e.target.value)}
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
					onSubmit={registerSubmit}
				>
					<input
						type="email"
						className={classes["input-field"]}
						placeholder="Email ID"
						required
						onChange={(e) => setRegisterEmail(e.target.value)}
						value={registerEmail}
					/>
					<input
						type="password"
						className={classes["input-field"]}
						placeholder="Enter password"
						onChange={(e) => setRegisterPassword(e.target.value)}
						value={registerPassword}
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
