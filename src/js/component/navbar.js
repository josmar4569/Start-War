import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				<a class="nav-link dropdown-toggle" href="#" id="agregar" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Favorities </a>
				</Link>
			</div>
		</nav>
	);
};
