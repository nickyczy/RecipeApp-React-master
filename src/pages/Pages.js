import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Recipe from "./Recipe";

const Pages = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/recipes" element={<Recipe />} />
		</Routes>
	);
};

export default Pages;
