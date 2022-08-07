<script>
	export let title
	export let subtitle
	export let nav_label
	export let thumbnail
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

	<header class="hero is-medium is-warning is-bold">
		<div class="hero-body py-0">
			{#if thumbnail}
			<figure class="image">
				<img src="{thumbnail}" alt="{title}">
				<figcaption class="notification is-dark" style="position:absolute; top: 7rem;">
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
			<p class="title is-size-3-mobile">{title}</p>
			{#if subtitle}
			<p class="subtitle is-size-4-mobile">{subtitle}</p>
			{/if}
			<slot />
		</div>
	</main>


<style global lang="scss">
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
</style>