import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import RecipeItem from "./RecipeItem/RecipeItem";
import classes from "./AvailableRecipes.module.css";

const AvailableRecipes = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "8a3f62dde8mshb708f633790d065p18957cjsn1ba41ebdea7a",
				"X-RapidAPI-Host": "tasty.p.rapidapi.com",
			},
		};

		const fetchRecipe = async () => {
			const response = await fetch(
				"https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=under_30_minutes",
				options
			);
			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const responseData = await response.json();
			console.log(responseData);

			const loadedRecipes = [];

			for (const key in responseData) {
				loadedRecipes.push({
					id: responseData[key],
					name: responseData[key].name,
					instructions: responseData[key].instructions,
				});
			}

			setRecipes(responseData.results);
		};
		fetchRecipe();
	}, []);

	// const recipeList = recipes.map((recipe) => (
	// 	<RecipeItem
	// 		key={recipe.id}
	// 		id={recipe.id}
	// 		name={recipe.name}
	// 		description={recipe.description}
	// 	/>
	// ));

	// const instructionSteps = loadedRecipes.instructions.map((instruction) => (
	// 	<li>{instruction}</li>
	// ));

	return (
		<section className={classes.recipes}>
			<Card>
				{recipes.map((recipe) => (
					<RecipeItem
						key={recipe.id}
						name={recipe.name}
						description={recipe.description}
						image={recipe.thumbnail_url}
						cooktime={recipe.cook_time_minutes}
						servings={recipe.num_servings}
						// instructions={instructionSteps}
					/>
				))}
			</Card>
		</section>
	);
};

export default AvailableRecipes;
