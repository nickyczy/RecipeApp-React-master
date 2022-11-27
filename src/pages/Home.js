import React from "react";

import SearchBar from "../components/Searchbar/SearchBar";
import PopularRecipes from "../components/Recipes/PopularRecipes";

const Home = () => {
	return (
		<div>
			<SearchBar />
			<PopularRecipes />
		</div>
	);
};

export default Home;
