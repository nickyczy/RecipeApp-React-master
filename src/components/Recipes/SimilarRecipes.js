import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

const SimilarRecipes = () => {
	let params = useParams();
	const [similar, setSimilar] = useState([]);

	const fetchSimilar = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${name}/similar?apiKey=63748567f146459bac586b2e78fbc096&number=13`
		);
		const similarData = await data.json();
		// console.log(params.name);
		setSimilar(similarData);
	};

	useEffect(() => {
		fetchSimilar(params.name);
	}, [params.name]);

	const similarList = similar.map((recipe) => {
		return (
			<Card key={recipe.id}>
				<a href={recipe.sourceUrl} target="_blank" rel="noreferrer">
					<img
						src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.${recipe.imageType}`}
						alt=""
					/>
					<h2 key={recipe.id}>{recipe.title}</h2>
				</a>
			</Card>
		);
	});

	return (
		<Container>
			<h1>Similar Recipes</h1>
			<Grid>{similarList}</Grid>
		</Container>
	);
};

const Container = styled.div`
	padding: 2rem;
	text-align: center;

	h1 {
		border-top: 1px solid rgba(0, 0, 0, 0.3);
		border-bottom: 1px solid rgba(0, 0, 0, 0.3);
		padding: 1rem 0;
	}
`;

const Grid = styled.div`
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;

const Card = styled.div`
	padding: 1rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	border-radius: 6px;
	background-color: white;

	img {
		width: 100%;
		border-radius: 2rem;
		object-fit: cover;
	}

	h2 {
		max-width: 350px;
		word-wrap: break-word;
		font-weight: 600;
		font-size: 1.25rem;
		color: black;
	}

	a {
		text-decoration: none;
	}
`;

export default SimilarRecipes;
