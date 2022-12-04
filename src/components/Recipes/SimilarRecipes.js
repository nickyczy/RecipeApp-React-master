import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SplideSlide } from "@splidejs/react-splide";

const SimilarRecipes = () => {
	let params = useParams();
	const [similar, setSimilar] = useState([]);

	useEffect(() => {
		const fetchSimilar = async () => {
			const data = await fetch(
				`https://api.spoonacular.com/recipes/${params.name}/similar?apiKey=63748567f146459bac586b2e78fbc096`
			);
			const similarData = await data.json();
			// console.log(params.name);
			setSimilar(similarData);
		};
		fetchSimilar();
	}, [params.name]);

	return (
		<div>
			{similar.map((recipe) => {
				return (
					<div key={recipe.id}>
						<img
							src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.${recipe.imageType}`}
							alt=""
						/>
						<h1 key={recipe.id}>{recipe.title}</h1>
					</div>
				);
			})}
		</div>
	);
};

export default SimilarRecipes;
