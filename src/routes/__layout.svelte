<script>
	import '../app.scss';

	import { onMount } from 'svelte';

	import { locale, setRoutes } from '../stores/UI';

	onMount(() => {
		setRoutes($locale)
	})

	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Nav />

<slot />

<Footer />