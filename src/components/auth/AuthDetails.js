import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import styled from "styled-components";

const AuthDetails = () => {
	const [authUser, setAuthUser] = useState(null);

	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuthUser(user);
			} else {
				setAuthUser(null);
			}
		});
		return () => {
			listen();
		};
	}, []);

	const userSignOut = () => {
		signOut(auth)
			.then(() => {
				console.log("signed out successfully");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Container>
			{authUser ? (
				<div>
					<p>{`Signed In as ${authUser.email}`}</p>
					<Button onClick={userSignOut}>Sign out</Button>
				</div>
			) : (
				<p>Signed Out</p>
			)}
		</Container>
	);
};

const Container = styled.div``;

const Button = styled.button`
	padding: 5rem;
`;
export default AuthDetails;
