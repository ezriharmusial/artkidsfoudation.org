<script context="module">
	import { getProjects } from "../metadata";

	export async function load(context) {
		const projects = getProjects('en')

		return {
			props: {
				localProjects: projects
			}
		}
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	import { projects } from '../stores/UI';

	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let localProjects

	onMount(() => {
		$projects = localProjects
	})

</script>

<svelte:head>
	<link rel="preload" as="image" href="/logo-192.png" />
 	{#if $projects}
	{#each $projects as project, i}
		{#if i > 3}
		<link rel="preload" as="image" href={project.thumbnail} />
	  	{/if}
    {/each}
	{/if}
</svelte:head>


<Nav />

<!-- Wrapper -->
<div class="wrapper">
	<slot />
</div>

<Footer />
