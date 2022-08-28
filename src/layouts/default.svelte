<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { projects } from '../stores/UI';

	let projectIndex = -1
	let pathname = ""

	export let title
	export let subtitle
	export let thumbnail
	export let changed

	onMount(() => {
		pathname = $page.url.pathname
	})

	$: if($projects) { projectIndex = $projects.findIndex(project => project.path == pathname) }

	function nextProject(){
		if($projects.length == projectIndex - 1)
			return 0
		else
			return projectIndex + 1
	}
</script>

<svelte:head>
<title>{title}</title>
</svelte:head>

<!-- Section Started Heading -->
<div class="section section-inner started-heading">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

				<!-- titles -->
				<div class="h-titles">
					{#if subtitle}<div class="h-subtitle red splitting-text-anim-1 scroll-animate-replace animate__active animate__animated" data-splitting="chars" data-animate="active">{subtitle}</div>{/if}
					<div class="h-title splitting-text-anim-2 scroll-animate-replace animate__active animate__animated" data-splitting="chars" data-animate="active">{title}</div>
				</div>
			</div>
		</div>
	</div>
</div>

{#if thumbnail}
<!-- Section Image Large -->
<div class="section section-inner m-image-large" data-animate="active">
	<div class="image">
		<div class="img js-parallax" style="background-image: url({thumbnail});"></div>
	</div>
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
			<div class="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
				<div class="m-titles">
					<div class="m-title scrolla-element-anim-1 scroll-animate-replace animate__active animate__animated" data-animate="active">Introduction</div>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div class="description-text scrolla-element-anim-1 scroll-animate-replace animate__active animate__animated" data-animate="active">
					<slot />
				</div>
			</div>
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
<div class="section section-inner m-image-large scrolla-element-anim-1 scroll-animate-replace animate__active animate__animated" data-animate="active">
	<div class="image">
		<div class="img js-parallax" style="background-image: url({changed});"></div>
	</div>
</div>
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
				<div class="h-titles h-navs">
					{#if $projects && projectIndex != -1}
					<a href="{$projects[nextProject()].path}">
						<span class="nav-arrow scrolla-element-anim-1 scroll-animate-replace animate__active animate__animated" data-animate="active">Next Project</span>
						<span class="h-title splitting-text-anim-2 scroll-animate-replace  animate__active animate__animated" data-splitting="chars" data-animate="active">{$projects[nextProject()].title}</span>
					</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.scroll-animate-replace {
		opacity: 1 !important;
	}
</style>