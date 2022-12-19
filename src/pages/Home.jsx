import { repos, setUsername, username } from "../App"

function Home() {
	const refetchWithUsername = (event) => {
		event.preventDefault()
		setUsername(event.target.username.value)
	}
	return (
		<div>
			<form class="mb-3" onSubmit={(event) => refetchWithUsername(event)}>
				<input
					type="text"
					class="p-1 align-middle"
					name="username"
					required
				/>
				<button class="btn btn-dark ms-3 w-auto">Fetch</button>
			</form>
			<h2>Github repos for {username()}</h2>
		</div>
	)
}

export default Home
