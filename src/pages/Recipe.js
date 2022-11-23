import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Recipe = () => {
	const getRecipe = async (name) => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=63748567f146459bac586b2e78fbc096&number=9&titleMatch=${params}`
		);

		const data = await api.json();
	};
	return <div>Recipe</div>;
};

export default Recipe;
