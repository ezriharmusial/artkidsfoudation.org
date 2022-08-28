<script lang="ts">
	import { fade } from "svelte/transition";

	import { browser } from "$app/env";
	import { onMount, afterUpdate } from "svelte";
	import imagesLoaded from 'imagesloaded'

	// import { scrolla } from '../lib/scrolla'

	afterUpdate(() => {
		// If we are in the Browser
		if (browser) {
			// Select the body
			let body = document.getElementsByTagName('body')

			// When Images loaded on the body Init Other Functions
			imagesLoaded(body, {}, () => {
				// fadeout the preloader
				fadeOut = true;

				/**
				init Scrolla
				**/
				// scrolla(document.querySelectorAll('.scroll-animate-replace'), {
					// once: true,
					// mobile: true
				// })
			});
		}
	})
	let fadeOut = false


	let viewHeight: number;

</script>

<!-- Preloader -->
<div class="preloader" class:loaded={fadeOut}>
	{#if !fadeOut}
	<div class="centrize full-width" transition:fade>
		<div class="vertical-center">
			<div class="spinner-logo">
				<img src="/logo-192.png" alt="ArtKids Foundation: Funding Happiness" width="128" height="128">
				<div class="spinner-dot"></div>
				<div class="spinner spinner-line"></div>
			</div>
		</div>
	</div>
	{/if}
</div>
