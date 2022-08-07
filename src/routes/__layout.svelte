<script>
	import '../app.scss';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import { locale, setRoutes } from '../stores/UI';

	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import PageTransition from '../components/PageTransition.svelte';


	onMount(() => {
		setRoutes($locale)
	})

</script>

<Nav />

<PageTransition url={$page.url}>
<slot />
</PageTransition>

<Footer />