import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Starwars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div class="nav-item dropdown">
					<button className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Favoritos</button>
					<ul class="dropdown-menu">
					  <li><a class="dropdown-item justify-content-right" href="#">Action</a></li>
					  <li><a class="dropdown-item justify-content-right" href="#">Another action</a></li>
					  <li><a class="dropdown-item justify-content-right" href="#">Something else here</a></li>
					</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};