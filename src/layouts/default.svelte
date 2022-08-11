<script>
	export let title
	export let subtitle
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
				</figure>
				{/if}
	</div>
		<div class="hero-foot">
		<div class="container">
			<div class="notification is-dark">
				<p class="title is-size-4-mobile has-text-white">{title}</p>
				{#if subtitle}
				<p class="subtitle is-size-5-mobile has-text-white">{subtitle}</p>
				{/if}
			</div>
		</div>
		</div>
	</header>

	<main class="container">
		<div class="box section content">
			<slot />
		</div>
	</main>


<style global lang="scss">
	.hero.is-fullheight {
		min-height: 75vh !important;
		max-height: 75vh !important;
	}

	.image {
		max-width: 1248px;
		max-height: 70vh;
		margin: 0 auto;
	}

	@media screen and (max-width:1024px) {
		.hero.is-fullheight {
			min-height: 50vh !important;
			max-height: 50vh !important;

		}

		.image {
			max-height: 50vh !important;
		}

		.hero-body margin{
			padding-top: 0;
		}

	}

	.notification {
		display:inline-block;
		position: absolute;
		bottom: 0;
		z-index: 15;
	}
</style>