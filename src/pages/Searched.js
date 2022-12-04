import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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

	const searchedResults = searchedRecipe.map((item) => {
		return (
			<Card key={item.id}>
				<img src={item.image} alt="" />
				<h4>{item.title}</h4>
			</Card>
		);
	});

	return (
		<Container>
			<h2>Search Results :{params.search}</h2>
			<Grid>{searchedResults}</Grid>
		</Container>
	);
};
const Container = styled.div`
	padding: 2rem;
`;

const Grid = styled.div`
	padding: 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 2rem;
`;

const Card = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
	}
	a {
		text-decoration: none;
	}
	h4 {
		font-size: 1.25rem;
		text-align: center;
		padding: 1rem;
	}
`;
export default Searched;
