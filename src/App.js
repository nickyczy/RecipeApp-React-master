import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AvailableRecipes from "./components/Recipes/AvailableRecipes";
import SearchBar from "./components/Searchbar/SearchBar";
import SearchForm from "./components/Searchbar/SearchForm";

const App = () => {
	const [searchIsShown, setSearchIsShown] = useState(false);

	const showSearchBarHandler = () => {
		setSearchIsShown(true);
	};

	const hideSearchBarHandler = () => {
		setSearchIsShown(false);
	};

	return (
		<Layout>
			{searchIsShown && <SearchForm onClose={hideSearchBarHandler} />}
			<SearchBar onShowSearchBar={showSearchBarHandler} />
			<AvailableRecipes />
		</Layout>
	);
};

export default App;
