<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	export let title;
</script>

<svelte:head>
	<title>{title}</title>
	<style>
		header {
			display: flex;
			flex-direction: column;
			gap: 1em;
			max-width: min(100%, 68ch);
		}
	</style>
</svelte:head>

	<Nav />
	<div class="section">
		<p class="title has-text-white">{title}</p>
		<div class="box content">
			<slot />
		</div>
	</div>
	<Footer />


<!--style lang="scss">
	@charset 'utf8';
	/* @import "../../node_modules/bulma/sass/utilities/initial-variables.sass";
	@import "../../node_modules/bulma/sass/utilities/functions.sass";
	*/

	/** Colors */
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

	/** Link colors */
	$link: $primary;

	/** Box Model */
	$spacer: 2rem;

	/** Backgrounds */
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


</style-->