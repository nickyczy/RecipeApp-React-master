import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SimilarRecipes from "../components/Recipes/SimilarRecipes";

const Recipe = () => {
	let params = useParams();
	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState("");

	useEffect(() => {
		const fetchDetails = async () => {
			const data = await fetch(
				`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=63748567f146459bac586b2e78fbc096`
			);
			const detailData = await data.json();

			setDetails(detailData);
			
		};
		fetchDetails();
	}, [params.name]);

	const activeTabHandler = (event) => {
		setActiveTab(event.target.innerText);
	};

	return (
		<div>
			<DetailWrapper>
				<div>
					<h1>{details.title}</h1>
					<img src={details.image} alt="" />
				</div>
				<Info>
					<Button
						className={activeTab === "Summary" ? "active" : ""}
						onClick={activeTabHandler}
					>
						Summary
					</Button>
					<Button
						className={activeTab === "Instructions" ? "active" : ""}
						onClick={activeTabHandler}
					>
						Instructions
					</Button>
					<Button
						className={activeTab === "Ingredients" ? "active" : ""}
						onClick={activeTabHandler}
					>
						Ingredients
					</Button>
					{activeTab === "Summary" && (
						<Container>
							<h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
						</Container>
					)}
					{activeTab === "Instructions" && (
						<Container>
							<h3
								dangerouslySetInnerHTML={{ __html: details.instructions }}
							></h3>
						</Container>
					)}
					{activeTab === "Ingredients" && (
						<ul>
							{details.extendedIngredients.map((ingredient) => (
								<li key={ingredient.id}>{ingredient.original}</li>
							))}
						</ul>
					)}
				</Info>
			</DetailWrapper>
			<SimilarRecipes />
		</div>
	);
};

const DetailWrapper = styled.div`
	margin-top: 10rem;

	display: flex;
	justify-content: center;

	.active {
		background: linear-gradient(35deg, #494949, #313131);
		color: white;
	}
	h1 {
		max-width: 600px;
		word-wrap: break-word;

		margin-bottom: 2rem;
	}
	h3 {
		font-weight: normal;
		max-width: 600px;
	}

	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}

	ul {
		margin-top: 2rem;
	}
`;

const Button = styled.button`
	padding: 1rem 2rem;
	color: #313131;
	background: white;
	border: 2px solid black;
	margin-right: 2rem;
	font-weight: 600;
`;

const Info = styled.div`
	margin: 0 7rem;
	width: 40%;
`;

const Container = styled.div`
	padding: 2rem 0;
`;

export default Recipe;
