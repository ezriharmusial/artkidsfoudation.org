<script>
	import { getRoutes } from "../metadata";

	let menuActive = false;

	function toggleMenu() {
		menuActive = !menuActive
	}

	function foldMenu() {
		menuActive = false
	}

	const routes = getRoutes();
</script>

<style lang="scss">
	@media screen and (max-width: 1023px) {
		.nav-toggle,.nav-menu.is-active {
			display: block;
		}
		.nav-menu { display: none; }
	}

	.nav-toggle.is-active {
	 	span {
			&:nth-child(1) {
				transform: translateY(5px) rotate(45deg);
			}

			&:nth-child(2) {
				opacity: 0;
			}

			&:nth-child(3) {
				transform: translateY(-5px) rotate(-45deg);
			}
		}
	}

	.navbar-item { text-transform: capitalize }
</style>

<header class="banner">
	<nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item has-text-weight-bold is-italic has-text-shadow is-size-5" href="/" on:click={foldMenu}>
				<span class="icon">
					<img src="/logo-192.png" alt="EkeSolar Unlimited: Funding Happiness" width="30" height="30">
				</span>
				<span>
					<span class="artkids has-text-info">ArtKids</span>
					<span class="foundation has-text-success">Foundation</span>
				</span>
			</a>

			<div class="nav-toggle navbar-burger float-left" class:is-active={menuActive} on:click={toggleMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>

		<div class="navbar-menu nav-menu" class:is-active={menuActive}>
			<div class="navbar-end">
				<a class="navbar-item icon-text" href="/" title="go to Home" on:click={foldMenu}>
					<span class="icon">
						<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"/></svg>					</span>
					<span>Home</span>
				</a>
				{#each routes as route}
					<a class="navbar-item icon-text" title="go to {route.title}" href={route.path}>
						{route.title}
					</a>
				{/each}
			</div>
		</div>
	</nav>
</header>
