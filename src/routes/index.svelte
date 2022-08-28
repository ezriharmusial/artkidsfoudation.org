<script lang="ts">
	// Import Swiper Svelte components
	import { Swiper } from 'swiper';
	import { afterUpdate } from "svelte";
	import { projects } from "../stores/UI";
	import { browser } from '$app/env';

	let swiper

	afterUpdate(() => {

		// 	initMainSlider()

		if(browser){

			// Hero Main Slider */
			swiper = new Swiper('.hero-main-slider .swiper-container', {
				slidesPerView: 1,
				spaceBetween: 0,
				loop: true,
				autoplay: {
					delay: 5000
				},
				speed: 1000,
				mousewheel: true,
				watchSlidesProgress: true,
				pagination: {
					el: '.hero-main-slider .swiper-pagination',
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on: {
					progress: function(){
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress = swiper.slides[i].progress, innerOffset = swiper.width * 0.5, innerTranslate = slideProgress * innerOffset;
							swiper.slides[i].querySelector(".slide").style.transform = "translateX(" + innerTranslate + "px)";
						}
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(swiper, speed) {
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".slide").style.transition = speed + "ms";
						}
					},
					slideChangeTransitionStart: function(swiper, speed) {
						for (var i = 0; i < swiper.slides.length; i++) {
							document.querySelectorAll('.hero-main-slider .swiper-slide').forEach((element) => {
								element.classList.remove('animate-active');
							})

							document.querySelector('.hero-main-slider .swiper-slide-active').classList.add('animate-active');

							if ( document.querySelector('.hero-main-slider .swiper-slide-active') && document.querySelectorAll('.dark').length ) {
								if ( ! document.querySelector('body').classList.contains('dark-first') ) {
									document.querySelector('body').classList.add('dark-first');
								}
							} else {
								document.querySelector('body').classList.remove('dark-first');
							}
						}
					},
					init: function() {
						var swiper = this;

						setTimeout(function(){
							if ( document.querySelector('.hero-main-slider .swiper-slide-active') ) {
								// console.log('Triggered')
								document.querySelector('.hero-main-slider .swiper-slide-active').classList.add('animate-active');
							}
						}, 500);

						if ( document.querySelectorAll('.hero-main-slider .swiper-slide-active') && document.querySelectorAll('.dark').length ) {
							if ( ! document.querySelector('body')?.classList.contains('dark-first') ) {
								document.querySelector('body').classList.add('dark-first');
							}
						} else {
							document.querySelector('body').classList.remove('dark-first');
						}
					}
				}
			});
			/*st_slider.controller.control = st_image_slider;
			st_image_slider.controller.control = st_slider;*/
		}

	})


$: console.log(swiper)
</script>

<!-- Section Hero Main Slider -->
<div class="section hero-main-slider">
	<div class="swiper-container">
		<div class="swiper-wrapper">

			{#if $projects}
			{#each $projects as project, i}
			<div class="swiper-slide">

				<!-- image -->
				<div class="slide" style="background-image: url({project.thumbnail || '/logo-192.png'});"></div>

				<!-- slide titles -->
				<div class="slide-titles">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

							<!-- title -->
							<div class="titles" class:dark={project.color == 'dark'}>
								<div class="label scrolla-element-anim-1">art</div>
								<div class="title"><span class="title-inner splitting-text-anim-2" data-splitting>{project.title}</span></div>
								{#if project.subtitle}
								<div class="subtitle scrolla-element-anim-1">
									{project.subtitle}
								</div>
								{/if}
							</div>

							<div class="more-bts">
								<a sveltekit:prefetch href="{project.path}" data-splitting class="btn more-btn scrolla-element-anim-1">see details</a>
							</div>

						</div>
					</div>
				</div>

			</div>
			{/each}
			{/if}
		</div>

		<!-- pagination -->
		<div class="swiper-pagination scrolla-element-anim-1 scroll-animate-replace" data-animate="active">
		</div>

		<!-- navigation -->
		<div class="swiper-buttons">
			<div class="swiper-button-prev" on:click={() => {swiper.slidePrev()}}></div>
			<div class="swiper-button-next" on:click={() => {swiper.slideNext()}}></div>
		</div>

	</div>
</div>
