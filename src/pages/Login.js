import React from "react";
import SigninForm from "../components/auth/SigninForm";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDRAbFoV_VUWDz3tyDVnyugPTDYJPMKbPY",
	authDomain: "recipe-e3c58.firebaseapp.com",
	projectId: "recipe-e3c58",
	storageBucket: "recipe-e3c58.appspot.com",
	messagingSenderId: "649837849759",
	appId: "1:649837849759:web:8af7211f5ad3df2df346aa",
	measurementId: "G-T3403KHHRV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const email = "nickyczy@gmail.com";
const password = "password";

// Initialize Firebase Analytics
createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		const user = userCredential.user;
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode, errorMessage);
	});

const Login = () => {
	return (
		<div>
			<SigninForm />
		</div>
	);
};

export default Login;
