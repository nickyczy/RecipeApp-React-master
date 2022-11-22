import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import PopularRecipes from "./components/Recipes/PopularRecipes";
import SearchBar from "./components/Searchbar/SearchBar";
import SearchForm from "./components/Searchbar/SearchForm";
import { BrowserRouter } from "react-router-dom";

const App = () => {
	const [searchIsShown, setSearchIsShown] = useState(false);

	const showSearchBarHandler = () => {
		setSearchIsShown(true);
	};

	const hideSearchBarHandler = () => {
		setSearchIsShown(false);
	};

	return (
		<BrowserRouter>
			<Layout>
				{searchIsShown && <SearchForm onClose={hideSearchBarHandler} />}
				<SearchBar onShowSearchBar={showSearchBarHandler} />
				<PopularRecipes />
			</Layout>
		</BrowserRouter>
	);
};

export default App;
