import { createSignal, For } from "solid-js"
import RepoCard from "../components/RepoCard"

const favFromLocal = JSON.parse(localStorage.getItem("favrepos") || "[]")
const [favRepos, setFavRepos] = createSignal(favFromLocal)

function FavRepos() {
	return (
		<div>
			<h2>Your favourite repos</h2>
			<For each={favRepos()}>{(repo) => <RepoCard repo={repo} />}</For>
		</div>
	)
}

export { setFavRepos, favRepos }
export default FavRepos
