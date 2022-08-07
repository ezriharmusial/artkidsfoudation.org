<script lang="ts">
	import { fade } from "svelte/transition";

	import { routes } from "../stores/UI"
	import LanguageSelector from "./Language-Selector.svelte";

	let menuActive = true;

	function toggleMenu() {
		menuActive = !menuActive
	}

	function foldMenu() {
		menuActive = false
	}
</script>

<header class="banner">
	<nav class="navbar is-fixed-top is-dark" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item has-text-weight-bold is-italic has-text-shadow is-size-5" href="/" on:click={foldMenu}>
				<span class="icon">
					<img src="/logo-192.png" alt="ArtKids Foundation: Funding Happiness" width="30" height="30">
				</span>
				<span>
					<span class="artkids has-text-danger">ArtKids</span>
					<span class="foundation has-text-warning">Foundation</span>
				</span>
			</a>

			<div class="nav-toggle navbar-burger float-left" class:is-active={menuActive} on:click={toggleMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>

		{#if menuActive}
		<div class="nav-background has-background-dark is-hidden-desktop"></div>
		{/if}
		<div class="navbar-menu nav-menu" class:is-active={menuActive}>
			<div class="navbar-start">
				<div class="navbar-item">
					<LanguageSelector />
				</div>
				{#if $routes}
				{#each $routes as route}
				<a class="navbar-item icon-text" title="go to {route.title}" on:click={foldMenu} href={route.path}>
					{route.nav_label || route.title}
				</a>
				{/each}
				{/if}
			</div>
		</div>
	</nav>
</header>

<style lang="scss">
	.nav-background {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		opacity: 0.6;
		z-index: -1;
		backdrop-filter: blur(10px);
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

	@media screen and (max-width:1024px) {
		.nav-menu {
			transition: opacity 0.5s;
			display: none;
			opacity: 0;

			&.is-active {
				display: block;
				opacity: 1;
			}
		}
	}

	.navbar-item { text-transform: capitalize }
</style>