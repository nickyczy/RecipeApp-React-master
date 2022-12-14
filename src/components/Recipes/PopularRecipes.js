import React, { useEffect, useState } from "react";

import classes from "./PopularRecipes.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Gradient from "../UI/Gradient";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

const PopularRecipes = () => {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		fetchPopular();
	}, []);

	const fetchPopular = async () => {
		const check = localStorage.getItem("popular");

		if (check) {
			setPopular(JSON.parse(check));
		} else {
			const api = await fetch(
				"https://api.spoonacular.com/recipes/random?apiKey=63748567f146459bac586b2e78fbc096&number=10"
			);
			// if (!api.ok) {
			// 	throw new Error("Something went wrong!");
			// }

			const responseData = await api.json();

			localStorage.setItem("popular", JSON.stringify(responseData.recipes));
			console.log(responseData.recipes);

			setPopular(responseData.recipes);
		}
	};

	const popularList = popular.map((recipe) => {
		return (
			<SplideSlide key={recipe.id}>
				<div className={classes.recipe}>
					<Link to={"/recipe/" + recipe.id}>
						<p>{recipe.title}</p>
						<img src={recipe.image} alt={recipe.name} />
						<Gradient />
					</Link>
				</div>
			</SplideSlide>
		);
	});
	// const instructionSteps = loadedRecipes.instructions.map((instruction) => (
	// 	<li>{instruction}</li>
	// ));

	return (
		<Card>
			<section className={classes.recipes}>
				<h1>Popular Recipes</h1>
				<Splide
					options={{
						perPage: 5,
						arrows: false,
						pagination: false,
						drag: "free",
						gap: "2rem",
					}}
				>
					{popularList}
				</Splide>
			</section>
		</Card>
	);
};

export default PopularRecipes;
