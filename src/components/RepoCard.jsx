import { setFavRepos, favRepos } from "../pages/FavRepos"

const favThis = (repo) => {
	setFavRepos([repo, ...favRepos()])
}

const unfavThis = (repoId) => {
	const nextState = favRepos()?.filter((item) => item.id !== repoId)
	setFavRepos(nextState)
}

const repoIsFav = (repoId) => {
	const match = favRepos()?.filter((item) => item.id === repoId)
	return match?.length > 0
}

function RepoCard({ repo }) {
	return (
		<div class="card">
			<div class="card-header">
				&#11088; stars: {repo.stargazers_count}
			</div>
			<div class="card-body">
				<a
					href={repo.html_url}
					class="h4 card-title text-decoration-none"
					target="_blank"
					rel="noreferrer">
					<strong>{repo.owner?.login}</strong>/{repo.name}
				</a>
				<p class="card-text">{repo.description}</p>
				{repoIsFav(repo.id) ? (
					<button
						class="btn btn-danger"
						onClick={() => unfavThis(repo.id)}>
						Unsave
					</button>
				) : (
					<button
						class="btn btn-success"
						onClick={() => favThis(repo)}>
						Save
					</button>
				)}
			</div>
		</div>
	)
}

export default RepoCard
