<script lang="ts">
	import { page } from '$app/stores';
	import { afterUpdate, onMount } from 'svelte';

	import { projects } from '../stores/UI';

	import IntersectionObserver from "svelte-intersection-observer";
	import { browser } from '$app/env';

	let projectIndex = -1
	let pathname = ""
	let elements = {
			title: {
				el: undefined,
				intersecting: false
			},
			thumbnail: {
				el: undefined,
				intersecting: false
			},
			description: {
				el: undefined,
				intersecting: false
			},
			changed: {
				el: undefined,
				intersecting: false
			},
			nextProject: {
				el: undefined,
				intersecting: false
			}
		}

	export let title
	export let subtitle
	export let thumbnail
	export let changed

	let jarallax

	onMount(async () => {
		pathname = $page.url.pathname
		let module = await import('jarallax');
		jarallax = module.jarallax;
		let elements = document.querySelectorAll('.js-parallax')
		if (jarallax && elements){
			console.log('jarralax elements', elements)
			jarallax(elements, {
				speed: 0.65,
				type: 'scroll'
			})
		}
	})

	$: if($projects) { projectIndex = $projects.findIndex(project => project.path == pathname) }

	function nextProject(){
		if($projects.length == projectIndex + 1)
			return 0
		else
			return projectIndex + 1
	}

	$: console.log('elements', elements)
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<!-- Section Started Heading -->
<div class="section section-inner started-heading">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<IntersectionObserver once element={elements.title.el} bind:intersecting={elements.title.intersecting}>
				<!-- titles -->
				<div class="h-titles" bind:this={elements.title.el}>
					{#if subtitle}<div class="h-subtitle red splitting-text-anim-1 scroll-animate-replace" class:animate__active={elements.title.intersecting} class:animate__animated={elements.title.intersecting} data-splitting="chars" data-animate="active">{subtitle}</div>{/if}
					<div class="h-title splitting-text-anim-2 scroll-animate-replace" class:animate__active={elements.title.intersecting} class:animate__animated={elements.title.intersecting} data-splitting="chars" data-animate="active">{title}</div>
				</div>
				</IntersectionObserver>
			</div>
		</div>
	</div>
</div>

{#if thumbnail}
<!-- Section Image Large -->
<div class="section section-inner m-image-large scrolla-element-anim-1 scroll-animate" data-animate="active" class:animate__active={elements.thumbnail.intersecting} class:animate__animated={elements.thumbnail.intersecting} >
	<IntersectionObserver once element={elements.thumbnail.el} bind:intersecting={elements.thumbnail.intersecting}>
		<div class="image" bind:this={elements.thumbnail.el}>
			<div class="img js-parallax" style="background-image: url({thumbnail});"></div>
		</div>
	</IntersectionObserver>
</div>
{/if}

<!-- Section Details -->
<div class="section section-inner m-details">
	<div class="container">
		<div class="details-box">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
					<div class="details-label">
						<strong>Client</strong> Envato
					</div>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
					<div class="details-label">
						<strong>Category</strong> Photography
					</div>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
					<div class="details-label">
						<strong>Year</strong> 2020
					</div>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
					<div class="details-label">
						<strong>Website</strong> bslthemes.com
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Section Description -->
<div class="section section-inner m-description">
	<div class="container">
		<div class="row">
			<IntersectionObserver once element={elements.description.el} bind:intersecting={elements.description.intersecting}>
				<div class="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
					<div class="m-titles">
						<div class="m-title scrolla-element-anim-1 scroll-animate-replace" data-animate="active" class:animate__active={elements.description.intersecting} class:animate__animated={elements.description.intersecting} >Introduction</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" bind:this={elements.description.el}>
					<div class="description-text scrolla-element-anim-1 scroll-animate-replace" data-animate="active" class:animate__active={elements.description.intersecting} class:animate__animated={elements.description.intersecting} >
						<slot />
					</div>
				</div>
			</IntersectionObserver>
		</div>
	</div>
</div>

<!-- Section Gallery -->
<!-- <div class="section section-inner m-gallery">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
				<div class="works-item">
					<div class="image scrolla-element-anim-1 scroll-animate-replace" data-animate="active">
						<div class="img">
							<a href="/assets/images/started-n12-920x1080.jpg" class="has-popup-image">
								<img src="/assets/images/started-n12-920x1080.jpg" alt="Image #1" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
				<div class="works-item">
					<div class="image scrolla-element-anim-1 scroll-animate-replace" data-animate="active">
						<div class="img">
							<a href="/assets/images/started-n15-920x1080.jpg" class="has-popup-image">
								<img src="/assets/images/started-n15-920x1080.jpg" alt="Image #2" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> -->

{#if changed}
<!-- Section Image Large -->
<IntersectionObserver once element={elements.changed.el} bind:intersecting={elements.changed.intersecting}>
<div class="section section-inner m-image-large scrolla-element-anim-1 scroll-animate-replace" data-animate="active" bind:this={elements.changed.el} class:animate__active={elements.changed.intersecting} class:animate__animated={elements.changed.intersecting} >
	<div class="image">
		<div class="img js-parallax" style="background-image: url({changed});"></div>
	</div>
</div>
</IntersectionObserver>
{/if}

<!-- Section Description -->
<!-- <div class="section section-inner m-description">
	<div class="container">
		<div class="row">

			<div class="m-title scrolla-element-anim-1 scroll-animate-replace" data-animate="active">Result</div>
		</div>
	</div>
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		<div class="description-text scrolla-element-anim-1 scroll-animate-replace" data-animate="active">
			<p>It is not enough that we build products that function, that are understandable and usable, we also need to build products that bring joy and excitement, pleasure and fun, and, yes, beauty to people’s lives. Creativity is to discover a question that has never been asked. If one brings up an idiosyncratic question, the answer he gives will necessarily be unique as well.</p><p>Creativity is to discover a question that has never been asked. If one brings up an idiosyncratic question, the answer he gives will necessarily be unique as well.</p>
		</div>
	</div>
</div>
</div>
</div> -->


<!-- Section Gallery Carousel -->
<!-- <div class="section section-inner m-gallery-carousel scrolla-element-anim-1 scroll-animate-replace" data-animate="active">
	<div class="container">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="/assets/images/started-n2_4.jpg" alt="Image #1" />
				</div>
				<div class="swiper-slide">
					<img src="/assets/images/started-n20.jpg" alt="Image #2" />
				</div>
				<div class="swiper-slide">
					<img src="/assets/images/started-n14.jpg" alt="Image #3" />
				</div>
			</div>
		</div>
	</div>
</div> -->

<!-- Section Navigation -->
<div class="section section-inner m-page-navigation">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-2">
				<IntersectionObserver once element={elements.nextProject.el} bind:intersecting={elements.nextProject.intersecting}>
				<div class="h-titles h-navs">
					{#if $projects && projectIndex != -1}
					<a href="{$projects[nextProject()].path}">
						<span class="nav-arrow scrolla-element-anim-1 scroll-animate-replace" data-animate="active" class:animate__active={elements.nextProject.intersecting} class:animate__animated={elements.nextProject.intersecting} >Next Project</span>
						<span class="h-title splitting-text-anim-2 scroll-animate-replace" data-splitting="chars" data-animate="active" bind:this={elements.nextProject.el} class:animate__active={elements.nextProject.intersecting} class:animate__animated={elements.nextProject.intersecting} >{$projects[nextProject()].title}</span>
					</a>
					{/if}
				</div>
				</IntersectionObserver>
			</div>
		</div>
	</div>
</div>
