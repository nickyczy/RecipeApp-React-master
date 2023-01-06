import React from "react";
import SigninForm from "../components/auth/SigninForm";
import AuthDetails from "../components/auth/AuthDetails";

const Login = () => {
	return (
		<div>
			<SigninForm />
			<AuthDetails />
		</div>
	);
};

export default Login;
