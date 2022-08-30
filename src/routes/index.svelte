<script lang="ts">
	// Import Swiper Svelte components
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	import { Navigation, Pagination, Parallax, Virtual } from 'swiper';
	import { projects } from "../stores/UI";
import { onMount } from 'svelte';

	let splitting

	onMount(async () => {
		let module = await import('splitting');
		splitting = module.default;
		if (splitting){
			splitting()
		}
	});

	let activeIndex: number
	let speed = 1000

	// OnSlicdeChange Transition end set index
	const onSlideChangeTransitionEnd = (swiper) => {
		activeIndex = swiper.detail[0].realIndex
	}

	// function run on slideChangeTransitionStart
	const onSlideChangeTransitionStart = (swiper) => {
		if ( document.querySelector('.hero-main-slider .swiper-slide-active') && document.querySelectorAll('.dark').length ) {
			if ( ! document.querySelector('body').classList.contains('dark-first') ) {
				document.querySelector('body').classList.add('dark-first');
			}
		} else {
			document.querySelector('body').classList.remove('dark-first');
		}
	}

	// function run on setTransition
	const onSetTransition = (swiper) => {
		let slides = swiper.detail[0].$el[0].querySelectorAll('.swiper-slide')
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.transition = speed + "ms";
			slides[i].querySelector(".slide").style.transition = 1000 + "ms";
		}
	}

	// function run on touchStart
	const onTouchStart = (swiper) => {
		let slides = swiper.detail[0].$el[0].querySelectorAll('.swiper-slide')
		for (let i = 0; i < slides.length; i++) {
			 slides[i].style.transition = "";
		}
	}

	// function run on progress
	const onProgress = (swiper) => {
		let slides = swiper.detail[0].$el[0].querySelectorAll('.swiper-slide')
		for (let i = 0; i < slides.length; i++) {
			let slideProgress = slides[i].progress,
					innerOffset = swiper.width * 0.5,
					innerTranslate = slideProgress * innerOffset;
			slides[i].querySelector(".slide").style.transform = "translateX(" + innerTranslate + "px)";
		}
	}

	// function run on Init
	const onInit = () => {

		setTimeout(function(){
			if ( document.querySelector('.hero-main-slider .swiper-slide-active') ) {
				// console.log('Triggered')
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

	// Compare if given slide is Active slide
	const isActiveSlide = (index) => {
		// Get active slide index
		let activeSlideIndex = document.querySelector('.swiper-slide-visible.swiper-slide-active')?.dataset.swiperSlideIndex

		// If current slide is active slide
		if (activeSlideIndex && index == activeSlideIndex)
			return true

		// Else
		return false
	}

	// $: console.log('swiper', swiper)
	// $: console.log('$projects', $projects)
</script>

<!-- Section Hero Main Slider -->
{#if $projects }
<div class="section hero-main-slider">
	<div class="swiper-container">
		<div class="swiper-wrapper">

			<Swiper
			modules={[Navigation, Pagination, Parallax]}
			slidesPerView={1}
			spaceBetween={0}
			loop={true}
			autoplay={true}
			{speed}
			mousewheel={true}
			watchSlidesProgress={true}
			pagination={{el: '.hero-main-slider .swiper-pagination'}}
			navigation={{nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev'}}
			parallax={true}
			on:progress={onProgress}
			on:touchStart={onTouchStart}
			on:init={onInit}
			on:setTransition={onSetTransition}
			on:slideChangeTransitionStart={onSlideChangeTransitionStart}
			on:slideChangeTransitionEnd={onSlideChangeTransitionEnd}>

				{#each $projects as project, i }
				<SwiperSlide class="{activeIndex == i ? 'animate-active' : ''}" >
					<!-- image -->
						<div class="slide" style="background-image: url({project.thumbnail || '/logo-192.png'});"></div>

						<!-- slide titles -->
						<div class="slide-titles">
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

									<!-- title -->
									<div class="titles" class:dark={project.color == 'dark'} style="text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);">
										<div class="label scrolla-element-anim-1" class:animate__active={activeIndex == i} class:animate__animated={activeIndex == i} >art</div>
										<div class="title"><span class="title-inner splitting-text-anim-2" class:animate__active={activeIndex == i} class:animate__animated={activeIndex == i} data-splitting><span style="font-size: 11rem;left: -2.5rem; bottom:-2rem; position:absolute; opacity: 0.125;">{i}</span> {project.title}</span></div>
										{#if project.subtitle}
										<div class="subtitle scrolla-element-anim-1" class:animate__active={activeIndex == i} class:animate__animated={activeIndex == i} >
											{project.subtitle}
										</div>
										{/if}
									</div>

									<div class="more-bts">
										<a href="{project.path}" data-splitting class="btn more-btn scrolla-element-anim-1">see details</a>
									</div>
								</div>
							</div>
						</div>

				</SwiperSlide>
				{/each}
			</Swiper>
		</div>

		<!-- pagination -->
		<div class="swiper-pagination scrolla-element-anim-1 scroll-animate-replace" data-animate="active">
		</div>

		<!-- navigation -->
		<div class="swiper-buttons">
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>

	</div>
</div>
{/if}
