<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>


<svelte:head>
	<title>Transylvanian Twilight — Gothic VS Code Theme</title>
	<meta name="description" content="Transylvanian Twilight: A Romanian-flavored arctic-dark VS Code theme. Elegant, mysterious, and high-contrast for night coding. 🦇🇷🇴" />
	<meta name="keywords" content="VS Code theme, Transylvanian Twilight, dark theme, gothic, Romania, Dracula, arctic, code, developer, night mode, high contrast" />
	<meta name="author" content="Hatem Soliman" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#0B1220" />
	<link rel="icon" href={favicon} />
	<link rel="canonical" href="https://transylvanian-twilight.com/" />
	<!-- Open Graph -->
	<meta property="og:title" content="Transylvanian Twilight — Gothic VS Code Theme" />
	<meta property="og:description" content="A Romanian-flavored arctic-dark VS Code theme for elegant, mysterious night coding. High contrast, gothic charm, and Dracula vibes." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://transylvanian-twilight.com/" />
	<meta property="og:image" content="https://media.giphy.com/media/6C6SASmBJIq0q7qhaW/giphy.gif" />
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Transylvanian Twilight — Gothic VS Code Theme" />
	<meta name="twitter:description" content="A Romanian-flavored arctic-dark VS Code theme for elegant, mysterious night coding. High contrast, gothic charm, and Dracula vibes." />
	<meta name="twitter:image" content="https://media.giphy.com/media/6C6SASmBJIq0q7qhaW/giphy.gif" />
</svelte:head>

{@render children?.()}
