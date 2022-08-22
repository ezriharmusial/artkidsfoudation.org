<script lang="ts">
	import { projects } from "../stores/UI";
</script>

<!-- Header -->
<header class="header">
	<div class="header__builder">

		<!-- logo -->
		<div class="logo-image">
			<a sveltekit:prefetch class="navbar-item has-text-weight-bold has-text-shadow mb-0 is-5" href="/">
				<span class="icon">
					<img src="/logo-192.png" alt="ArtKids Foundation: Funding Happiness" width="30" height="30">
				</span>
				<span>
					<span class="artkids has-text-danger is-size-4">ArtKids</span>
					<span class="foundation has-text-warning is-size-4">Foundation</span>
				</span>
			</a>
		</div>

		<!-- menu btn -->
		<a href="#" class="menu-btn full"><span></span></a>

		<!-- Menu Full Overlay -->
		<div class="menu-full-overlay">

			<div class="menu-full-container">
				<div class="container">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">

							<!-- menu full -->
							<div class="menu-full">
								<ul class="menu-full">
									<li class="menu-item menu-item-has-children has-children">
										<a class="splitting-text-anim-2" data-splitting="chars" href="/">Home</a>
										<!-- <ul class="sub-menu">
											<li class="menu-item"><a class="splitting-text-anim-1" data-splitting="chars" href="index.html">Parallax Slider</a></li>
											<li class="menu-item"><a class="splitting-text-anim-1" data-splitting="chars" href="home-grid-slider.html">Grid Slider</a></li>
											<li class="menu-item"><a class="splitting-text-anim-1" data-splitting="chars" href="home-half-slider.html">Half Slider</a></li>
											<li class="menu-item"><a class="splitting-text-anim-1" data-splitting="chars" href="home-grid-fully-slider.html">Blur Horizontal Slider</a></li>
											<li class="menu-item"><a class="splitting-text-anim-1" data-splitting="chars" href="home-motion-slider.html">Distortion Slider</a></li>
											<li class="menu-item"><a class="splitting-text-anim-1" data-splitting="chars" href="home-portfolio.html">Portfolio Grid</a></li>
										</ul> -->
									</li>
									<li class="menu-item menu-item-has-children has-children">
										<a class="splitting-text-anim-2" data-splitting="chars" href="#">Projects</a>
										<ul class="sub-menu">
											{#if $projects}
											{#each $projects as project, i}
											<li class="menu-item">
												<a class="splitting-text-anim-1" data-splitting="chars" title="go to {project.title}" href={project.path}>
													{project.nav_label || project.title}
												</a>
											</li>
											{/each}
											{/if}
										</ul>
									</li>
									<!-- <li class="menu-item menu-item-has-children has-children">
										<a class="splitting-text-anim-2" data-splitting="chars" href="#">Works</a>
										<ul class="sub-menu">
											<li class="menu-item"><a class="splitting-text-anim-1" data-splitting="chars" href="works-2-column.html">Works (2 Columns)</a></li>
											<li class="menu-item"><a class="splitting-text-anim-1" data-splitting="chars" href="works-3-column.html">Works (3 Columns)</a></li>
											<li class="menu-item"><a class="splitting-text-anim-1" data-splitting="chars" href="works-creative.html">Works (Creative)</a></li>
											<li class="menu-item"><a class="splitting-text-anim-1" data-splitting="chars" href="gallery-2-column.html">Gallery (2 Columns)</a></li>
											<li class="menu-item"><a class="splitting-text-anim-1" data-splitting="chars" href="gallery-3-column.html">Gallery (3 Columns)</a></li>
										</ul>
									</li>
									<li class="menu-item">
										<a class="splitting-text-anim-2" data-splitting="chars" href="contacts.html">Contact</a>
									</li>
									<li class="menu-item">
										<a class="splitting-text-anim-2" data-splitting="chars" href="blog.html">Blog</a>
									</li> -->
								</ul>
							</div>

						</div>
					</div>
				</div>
			</div>

			<!-- social -->
			<div class="menu-social-links">
				<a href="https://instagram.com/" target="blank" class="scrolla-element-anim-1" title="Instagram">Instagram</a>
				<a href="https://facebook.com/ArtKidsFoundation/" target="blank" class="scrolla-element-anim-1" title="Facebook">Facebook</a>
				<a href="https://twitter.com/artkids" target="blank" class="scrolla-element-anim-1" title="Twitter">Twitter</a>
				<a href="https://linkedin.com/" target="blank" class="scrolla-element-anim-1" title="Linkedin">Linkedin</a>
			</div>

			<!-- <LanguageSelector /> -->
		</div>

	</div>
</header>