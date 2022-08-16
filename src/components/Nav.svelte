<script lang="ts">
import { onMount } from "svelte";

	import { fade } from "svelte/transition";

	import { routes } from "../stores/UI"
	import LanguageSelector from "./Language-Selector.svelte";

	let menuActive = false;
	let currentRoute: number = 0;

	function toggleMenu() {
		menuActive = !menuActive
	}

	function foldMenu() {
		menuActive = false
	}

	// Set Route index
	function setRoute(index: number) {
		// as long as index is smaller then $routes.length
		if(index <= $routes.length && index >= 0)
			currentRoute = index
		// Close menu in any case
		foldMenu()
	}

	// $: currentRoute = $routes.findIndex(() => {})
</script>

<header class="banner">
	<nav class="navbar is-fixed-top is-spaced has-shadow is-dark" aria-label="main navigation">
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
				{#each $routes as route, i}
				<a class="navbar-item icon-text" title="go to {route.title}" on:click={() => setRoute(i)} href={route.path} in:fade>
					{route.nav_label || route.title}
				</a>
				{/each}
				{/if}
			</div>
		</div>
	</nav>
</header>

{#if $routes}
<main class="next-previous">
	{#if currentRoute-1 >= 0}
	<a class="button left is-dark is-text" title="go to {$routes[currentRoute-1].title}" on:click={() => setRoute(currentRoute-1)} href={$routes[currentRoute-1].path} in:fade>
		<div class="icon-text">
			<span class="icon">
				<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/></svg>
			</span>
			<span class="text">
					{$routes[currentRoute-1].nav_label || $routes[currentRoute-1].title}
			</span>
		</div>
	</a>
	{/if}
	{#if currentRoute+1 <= $routes.length - 1}
	<a class="button right is-dark is-text" title="go to {$routes[currentRoute+1].title}" on:click={() => setRoute(currentRoute+1)} href={$routes[currentRoute+1].path} in:fade>
		<div class="icon-text">
			<span class="text">
				{$routes[currentRoute+1].nav_label || $routes[currentRoute+1].title}
			</span>
			<span class="icon">
				<svg fill="currentColor" class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg>
			</span>
		</div>
	</a>
	{/if}
</main>
{/if}

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

	.next-previous {

		.button.right,
		.button.left {
			position: absolute;
			left: 0;
			top: calc(50vh - 10px);
			z-index: 44;

			.icon-text .text {
				transition: width 1s, opacity 1s;
			}
		}

		.button.right {
			left: unset;
			right: 0;
		}
	}

	@media screen and (max-width:1024px) {
		.button.right,
		.button.left {
			top: 25vh !important;

			.icon-text .text {
				max-width: 0;
				opacity: 0.1;
			}

			&:hover .icon-text .text{
				max-width: unset;
				opacity: 1;
			}
		}

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


	.navbar.has-shadow {
		box-shadow: 0 10px 26px 11px rgb(0 0 0 / 30%);
	}
</style>