import React from "react";
import Layout from "../components/Layout/Layout";
import SearchBar from "../components/Searchbar/SearchBar";
import PopularRecipes from "../components/Recipes/PopularRecipes";

const Home = () => {
	return (
		<Layout>
			{searchIsShown && <SearchForm onClose={hideSearchBarHandler} />}
			<SearchBar onShowSearchBar={showSearchBarHandler} />
			<PopularRecipes />
		</Layout>
	);
};

export default Home;
