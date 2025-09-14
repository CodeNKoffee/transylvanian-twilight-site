
<script lang="ts">
		import '../app.css';
		import favicon from '$lib/assets/favicon.svg';

		let { children } = $props();

		// SEO metadata object
		export const metadata = {
			title: "Transylvanian Twilight — Gothic VS Code Theme",
			description: "Transylvanian Twilight: A Romanian-flavored arctic-dark VS Code theme. Elegant, mysterious, and high-contrast for night coding. 🦇🇷🇴",
			keywords: "VS Code theme, Transylvanian Twilight, dark theme, gothic, Romania, Dracula, arctic, code, developer, night mode, high contrast",
			authors: [{ name: "Hatem Soliman" }],
			creator: "Hatem Soliman",
			publisher: "Transylvanian Twilight",
			formatDetection: {
				email: false,
				address: false,
				telephone: false,
			},
			metadataBase: "https://transylvanian-twilight.com",
			alternates: {
				canonical: "https://transylvanian-twilight.com/",
			},
			openGraph: {
				title: "Transylvanian Twilight — Gothic VS Code Theme",
				description: "A Romanian-flavored arctic-dark VS Code theme for elegant, mysterious night coding. High contrast, gothic charm, and Dracula vibes.",
				url: "https://transylvanian-twilight.com/",
				siteName: "Transylvanian Twilight",
				images: [
					{
						url: "https://media.giphy.com/media/6C6SASmBJIq0q7qhaW/giphy.gif",
						width: 600,
						height: 200,
						alt: "Transylvanian Twilight Night",
					},
				],
				locale: "en_US",
				type: "website",
			},
			twitter: {
				card: "summary_large_image",
				title: "Transylvanian Twilight — Gothic VS Code Theme",
				description: "A Romanian-flavored arctic-dark VS Code theme for elegant, mysterious night coding. High contrast, gothic charm, and Dracula vibes.",
				images: ["https://media.giphy.com/media/6C6SASmBJIq0q7qhaW/giphy.gif"],
			},
			robots: {
				index: true,
				follow: true,
				googleBot: {
					index: true,
					follow: true,
					"max-video-preview": -1,
					"max-image-preview": "large",
					"max-snippet": -1,
				},
			},
			verification: {
				google: "",
				yandex: "",
				yahoo: "",
			},
		};
</script>


<svelte:head>
		<title>{metadata.title}</title>
		<meta name="description" content={metadata.description} />
		<meta name="keywords" content={metadata.keywords} />
		<meta name="author" content={metadata.authors[0].name} />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="theme-color" content="#0B1220" />
		<link rel="icon" href={favicon} />
		<link rel="canonical" href={metadata.alternates.canonical} />
		<!-- Open Graph -->
		<meta property="og:title" content={metadata.openGraph.title} />
		<meta property="og:description" content={metadata.openGraph.description} />
		<meta property="og:type" content={metadata.openGraph.type} />
		<meta property="og:url" content={metadata.openGraph.url} />
		<meta property="og:image" content={metadata.openGraph.images[0].url} />
		<meta property="og:site_name" content={metadata.openGraph.siteName} />
		<meta property="og:locale" content={metadata.openGraph.locale} />
		<!-- Twitter Card -->
		<meta name="twitter:card" content={metadata.twitter.card} />
		<meta name="twitter:title" content={metadata.twitter.title} />
		<meta name="twitter:description" content={metadata.twitter.description} />
		<meta name="twitter:image" content={metadata.twitter.images[0]} />
		<!-- Robots -->
		<meta name="robots" content="index, follow" />
		<meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
		<!-- Verification -->
		{#if metadata.verification.google}
			<meta name="google-site-verification" content={metadata.verification.google} />
		{/if}
		{#if metadata.verification.yandex}
			<meta name="yandex-verification" content={metadata.verification.yandex} />
		{/if}
		{#if metadata.verification.yahoo}
			<meta name="yahoo-site-verification" content={metadata.verification.yahoo} />
		{/if}
</svelte:head>

{@render children?.()}
