import { createSignal, For } from "solid-js"
import RepoCard from "../components/RepoCard"

const [favRepos, setFavRepos] = createSignal([])

function FavRepos() {
	return (
		<div>
			<h2>Your favourite repos</h2>
			<For each={favRepos()}>{(repo) => <RepoCard repo={repo} />}</For>
		</div>
	)
}

export { setFavRepos }
export default FavRepos
