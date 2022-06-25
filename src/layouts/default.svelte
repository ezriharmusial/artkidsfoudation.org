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
		<div class="hero-body py-0">
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
		<div class="box content">
			<p class="title">{title}</p>
			{#if subtitle}
			<p class="subtitle">{subtitle}</p>
			{/if}
			<slot />
		</div>
	</main>
	<Footer />