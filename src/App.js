import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Recipe from "./pages/Recipe";
import Searched from "./pages/Searched";

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/recipe/:name" element={<Recipe />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/searched/:search" element={<Searched />} />
			</Routes>
		</Layout>
	);
};

export default App;
