<script>
	export let title
	export let subtitle
	export let nav_label
	export let thumbnail
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

	<header class="hero is-fullheight is-warning is-bold">
		<div class="hero-body">
			{#if thumbnail}
			<figure class="image">
				<img src="{thumbnail}" alt="{title}">
				<figcaption class="notification is-dark">
					<p class="title is-size-4-mobile has-text-white">{title}</p>
					{#if subtitle}
					<p class="subtitle is-size-5-mobile has-text-white">{subtitle}</p>
					{/if}
				</figcaption>
			</figure>
			{:else}
			<div class="notification is-dark" style="display:inline-block;">
				<p class="title has-text-white is-size-4-mobile">{title}</p>
				{#if subtitle}
				<p class="subtitle is-size-5-mobile has-text-white">{subtitle}</p>
				{/if}
			</div>
			{/if}
		</div>
	</header>

	<main class="container">
		<div class="box content">
			<slot />
		</div>
	</main>


<style global lang="scss">
	.is-fullheight {
		margin-bottom: -15vh;
		margin-top: calc(-15vh + 52px);

		.image {
			flex-grow: 1;
			max-height: 60vh;
			overflow: hidden;

			figcaption {
				position: absolute;
				bottom: 0;
			}
		}
	}
</style>