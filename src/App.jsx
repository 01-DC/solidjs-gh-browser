import { createEffect, createSignal } from "solid-js"
import { Route, Routes } from "solid-app-router"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import FavRepos from "./pages/FavRepos"

const [username, setUsername] = createSignal("01-DC")
const [repos, setRepos] = createSignal([])

createEffect(async () => {
	const res = await fetch(
		`https://api.github.com/users/${username()}/repos?sort=created`
	)
	setRepos(await res.json())
})

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

export { username, setUsername, repos }
export default App
