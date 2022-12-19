import { NavLink } from "solid-app-router"

function Nav() {
	return (
		<div class="mt-5 mb-3">
			<NavLink
				href="/"
				class="btn btn-primary me-2"
				end
				activeClass="btn-success">
				Home
			</NavLink>
			<NavLink
				href="/favrepos"
				class="btn btn-primary me-2"
				activeClass="btn-success">
				Favourite ~ 5
			</NavLink>
		</div>
	)
}

export default Nav
