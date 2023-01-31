<script lang="ts">
	import { fade } from "svelte/transition";

	import { projects } from "../stores/UI";

	let active = false
	let visible = false
	let noTouch = false
	let hasScroll = false
	let open = false
	/**
	Menu Full Overlay
	**/
	const toggleMenu = () => {
		let body:HTMLBodyElement = document.querySelector('body')
		if(active) {
			active = false
			hasScroll= false
			body.classList.remove('no-scroll');
			noTouch = true
			setTimeout(function(){
				visible = false
				noTouch = false
			}, 1000);
		} else {
			active = true
			body.classList.add('no-scroll');
			visible = true
			noTouch = true
			setTimeout(function(){
				hasScroll = true
				noTouch = false
			}, 1000);
		}
		return false;
	};

	/**
	Menu Full Overlay Submenu
	**/
	const clickChildren = () => {
		if(open) {
			open = false
			// 	$(this).closest('li').find('> ul').css('max-height', 0);
		} else {
			open = true
		}
		return false;
	};

	$: innerHeight = 0
</script>

<svelte:window bind:innerHeight />

<!-- Header -->
<header class="header">
	<div class="header__builder">

		<!-- logo -->
		<div class="logo-image">
			<a class="" href="/" on:click={() => {if(active){ toggleMenu()}}}>
				<figure class="image icon-text">
					<img src="/logo-192.png" alt="ArtKids Foundation: Funding Happiness" width="30" height="30">
					<span class="logo-text">
						<span class="artkids">ArtKids</span><span class="foundation">Foundation</span>
					</span>
				</figure>
			</a>
		</div>

		<!-- menu btn -->
		<!-- Make 3 bars, correct collors -->
		<a href="#" class="menu-btn full"
		class:active
		class:no-touch={noTouch}
		on:click={toggleMenu}><span></span></a>

		<!-- Menu Full Overlay -->
		<div class="menu-full-overlay"
		class:active
		class:is-open={active}
		class:has-scroll={hasScroll}
		class:animate-active={hasScroll}
		class:visible>

		<div class="menu-full-container" style:overlfow={open ? 'visible' : 'auto'}>
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">

						<!-- menu full -->
						{#if active}
						<div class="menu-full" transition:fade>
							<ul class="menu-full">
								<li class="menu-item">
									<a class="splitting-text-anim-2" class:animate__active={open} class:animate__animated={open}  data-splitting="chars" href="/" on:click={toggleMenu}>Home</a>
								</li>
								<li class="menu-item menu-item-has-children has-children" class:opened={open} class:closed={!open}>
									<a class="splitting-text-anim-2" class:animate__active={open} class:animate__animated={open}  data-splitting="chars" href="#projects" on:click={clickChildren}>Projects</a>
									<ul class="sub-menu" style:max-height={!open ? 0 : 'unset'} style:height={open ? $projects.length * 30 + 20 + 'px' : 'unset'}>
										{#if $projects}
										{#each $projects as project, i}
										<li class="menu-item" style:max-height={!open ? 0: 'unset'} style:height={!open ? 0 : '20px'}>
											<a class="splitting-text-anim-1" class:animate__active={open} class:animate__animated={open} data-splitting="chars" title="go to {project.title}" href={project.path} on:click={toggleMenu} >
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
						{/if}
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

<style lang="scss">
	.header {
		top: 0 !important;
		padding-top: 15px;
		padding-bottom: 15px;
		background-color: rgba(0, 0, 0, .15);
		backdrop-filter: blur(5px);

		.logo-image a {
			text-decoration: none;
			font-family: "Roboto";
			font-style: italic;
			font-weight: 800;
			font-size: 22px;

			.artkids {
				color: #e62d2b;
			}

			.foundation {
				color: #ffd800;
			}
		}
	}
</style>