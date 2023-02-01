<script context="module">
	import { getProjects } from "../metadata";

	export async function load() {
		const projects = getProjects('en')

		return {
			props: {
				localProjects: projects,
			}
		}
	}
</script>

<script lang="ts">
	// import "../sass/app.css"
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { afterUpdate, onMount } from 'svelte';
	import { browser } from "$app/env";

	import { projects } from '../stores/UI';

	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import Preloader from "../components/Preloader.svelte";
	import Cursor from '../components/Cursor.svelte';
	import { AppShell } from "@skeletonlabs/skeleton";

	export let localProjects

	onMount(() => {
		$projects = localProjects
	})


	let splitting = null;

	afterUpdate(async () => {
        if (browser) {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports
            const splittingModule = await import('splitting');
            // This will trigger candle redraw if candles data was raced faster than uplot
            splitting = splittingModule.default;
			splitting()
        }

    });
</script>


<svelte:head>
	<link rel="preload" as="image" href="/logo-192.png" />
</svelte:head>

<Preloader />


<AppShell>
	<svelte:fragment slot="header"><Nav /></svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment> -->
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	<!-- <svelte:fragment slot="pageHeader"></svelte:fragment> -->
	<!-- Router Slot -->
	<div class="wrapper">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>


<Cursor />
