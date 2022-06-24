<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	export let title;
	export let subtitle;
	export let nav_label
	export let thumbnail
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

	<Nav />
	<header class="hero is-medium is-warning is-bold">
		<div class="hero-body">
			{#if thumbnail}
			<figure class="image">
				<img src="{thumbnail}" alt="{title}">
				<figcaption class="notification is-black">
					<p class="title has-text-white">{title}</p>
					{#if subtitle}
					<p class="subtitle has-text-white">{subtitle}</p>
					{/if}
				</figcaption>
			</figure>
			{:else}
			<div class="notification is-black" style="display:inline-block;">
				<p class="title has-text-white">{title}</p>
				{#if subtitle}
				<p class="subtitle has-text-white">{subtitle}</p>
				{/if}
			</div>
			{/if}
		</div>
	</header>

	<main class="section">
		<p class="title has-text-white">{title}</p>

		<div class="box content">
			nav label: {nav_label} <br />
			<slot />
		</div>
	</main>
	<Footer />


<style lang="scss">
	/* TODO: Fix crazy build styling error */
	@charset 'utf8';
	.image {
		position: relative;
		max-height: 60vh;
		overflow: hidden;
	}

	figcaption {
		position: absolute;
		left: 0;
		top: 49vh;
		padding: 0.5rem;
	}

	/* @import "../../node_modules/bulma/sass/utilities/initial-variables.sass";
	@import "../../node_modules/bulma/sass/utilities/functions.sass";
	*/

	/** Colors
	$primary: #f3750a;
	$secondary: #ffd800 !default;
	$danger: #e62d2b;
	$warning: #eb621c;
	$success: #92c138;
	$calm: #63bda1 !default;
	$info: #40c0f0;
	$light: #fcf1ce;
	$dark: #343a40;

	$secondary-invert: $black !default;
	$calm-invert: $white !default;
*/
	/** Link colors
	$link: $primary;
*/
	/** Box Model
	$spacer: 2rem;
*/
	/** Backgrounds
	$body-background-color: $light;
	$body-color: $dark;

	// Import only what you need from Bulma
	@import "../node_modules/bulma/sass/utilities/_all.sass";
	@import "../node_modules/bulma/sass/base/_all.sass";
	@import "../node_modules/bulma/sass/elements/button.sass";
	@import "../node_modules/bulma/sass/elements/container.sass";
	@import "../node_modules/bulma/sass/elements/title.sass";
	@import "../node_modules/bulma/sass/form/_all.sass";
	@import "../node_modules/bulma/sass/components/navbar.sass";
	@import "../node_modules/bulma/sass/layout/hero.sass";
	@import "../node_modules/bulma/sass/layout/section.sass";

	$colors: map-merge(
	(
		"secondary": ($secondary,
		$secondary-invert),
		"calm": ($calm,
		$calm-invert),
	),
	$colors
	);
*/

</style>