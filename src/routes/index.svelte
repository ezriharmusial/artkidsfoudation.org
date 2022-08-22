<script lang="ts">
	import { projects } from "../stores/UI";
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
							<div class="titles" class:dark={i % 2 == 1}>
								<div class="label scrolla-element-anim-1">art</div>
								<div class="title"><span class="title-inner splitting-text-anim-2" data-splitting>{project.title}</span></div>
								{#if project.subtitle}
								<div class="subtitle scrolla-element-anim-1">
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

			</div>
			{/each}
			{/if}
		</div>

		<!-- pagination -->
		<div class="swiper-pagination scrolla-element-anim-1 scroll-animate" data-animate="active">
		</div>

		<!-- navigation -->
		<div class="swiper-buttons">
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>

	</div>
</div>
