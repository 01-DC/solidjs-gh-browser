import { Route, Routes } from "solid-app-router"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import FavRepos from "./pages/FavRepos"

function App() {
	return (
		<div class="container">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/favrepos" element={<FavRepos />} />
			</Routes>
		</div>
	)
}

export default App
