<slot />

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
		top: 40vh;
		padding: 0.5rem;
	}

	@import "../../node_modules/bulma/sass/utilities/initial-variables.sass";
	@import "../../node_modules/bulma/sass/utilities/functions.sass";

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

    // Primary Shapes
    $radius: 0.75rem;

	/** Box Model */
	$spacer: 2rem;

	/** Backgrounds */
	$body-background-color: $light;
	$body-color: $dark;

	// Import only what you need from Bulma
    @import "../../node_modules/bulma/sass/utilities/_all.sass";
    @import "../../node_modules/bulma/sass/base/_all.sass";
    @import "../../node_modules/bulma/sass/helpers/_all.sass";
    @import "../../node_modules/bulma/sass/elements/_all.sass";
    @import "../../node_modules/bulma/sass/form/shared.sass";
    @import "../../node_modules/bulma/sass/form/input-textarea.sass";
    @import "../../node_modules/bulma/sass/form/select.sass";
    @import "../../node_modules/bulma/sass/form/tools.sass";
    @import "../../node_modules/bulma/sass/components/dropdown.sass";
    @import "../../node_modules/bulma/sass/components/level.sass";
    @import "../../node_modules/bulma/sass/components/media.sass";
    @import "../../node_modules/bulma/sass/components/menu.sass";
    @import "../../node_modules/bulma/sass/components/modal.sass";
    @import "../../node_modules/bulma/sass/components/navbar.sass";
    @import "../../node_modules/bulma/sass/components/tabs.sass";
    @import "../../node_modules/bulma/sass/grid/columns.sass";
    @import "../../node_modules/bulma/sass/layout/_all.sass";

	$colors: map-merge(
	(
		"secondary": ($secondary,
		$secondary-invert),
		"calm": ($calm,
		$calm-invert),
	),
	$colors
	);
</style>