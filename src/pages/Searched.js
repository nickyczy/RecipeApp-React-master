import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-co";

const Searched = () => {
	const [searchedRecipe, setSearchedRecipe] = useState([]);
	let params = useParams();

	const getSearched = async (name) => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=63748567f146459bac586b2e78fbc096&number=9&query=${name}`
		);

		const recipes = await api.json();
		setSearchedRecipe(recipes.results);
	};

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);
};

export default Searched;
