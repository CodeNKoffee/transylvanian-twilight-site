<script lang="ts">
	// Color palette for highlights
	const palette = [
		{ name: 'Carpathian Midnight', hex: '#0B1220', role: 'Primary editor background' },
		{ name: 'Danube Depths', hex: '#0E1628', role: 'Sidebar, panels, activity bar' },
		{ name: 'Transylvanian Shadow', hex: '#111A2E', role: 'Title bar, menus, dropdowns' },
		{ name: 'Bucegi Cave', hex: '#141E36', role: 'Hovers and tooltips' },
		{ name: 'Iași Blue Hour', hex: '#1A2442', role: 'Selections and overlays' },
		{ name: 'Cluj Snow', hex: '#E6EDF3', role: 'Primary text' },
		{ name: 'Danube Delta Cyan', hex: '#7FE9FF', role: 'Cursors, highlights' },
		{ name: 'Constanța Blue', hex: '#4FC3F7', role: 'Functions, links' },
		{ name: 'Apuseni Teal', hex: '#2EE6A6', role: 'Strings, success' },
		{ name: 'Transylvanian Purple', hex: '#B69CFF', role: 'Keywords, classes' },
		{ name: 'Doina Magenta', hex: '#FF6AD5', role: 'Constants, literals' }
	];
</script>

<!-- Main Layout -->
<div class="min-h-screen bg-gradient-to-b from-[#0B1220] via-[#111A2E] to-[#1A2442] text-[#E6EDF3] font-serif flex flex-col">
	<!-- Hero Section -->
	<section class="flex flex-col items-center justify-center py-16 px-4 text-center prose prose-invert prose-lg max-w-2xl mx-auto">
		<div class="w-full mb-8">
							<!-- Artistic Giphy GIF + SVG overlay -->
							<div class="relative mx-auto mb-6" style="max-width:600px;">
								<img src="https://media.giphy.com/media/6C6SASmBJIq0q7qhaW/giphy.gif" alt="Transylvanian Twilight Night" class="rounded-2xl w-full h-[200px] object-cover border-2 border-[#B69CFF] shadow-2xl" />
								<!-- SVG overlay for gothic border and mist -->
								<svg viewBox="0 0 600 200" fill="none" class="absolute top-0 left-0 w-full h-full pointer-events-none">
									<rect x="8" y="8" width="584" height="184" rx="20" fill="none" stroke="#B69CFF" stroke-width="2" opacity="0.4" />
									<ellipse cx="300" cy="180" rx="280" ry="32" fill="#B69CFF" opacity="0.08" />
									<ellipse cx="300" cy="190" rx="260" ry="18" fill="#FF6AD5" opacity="0.07" />
								</svg>
							</div>
			<h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 gothic-title">Transylvanian Twilight</h1>
			<p class="text-lg md:text-xl text-[#B8C4D9] mb-2 font-serif">A Romanian-flavored arctic-dark VS Code theme for elegant, mysterious night coding.</p>
			<p class="text-base text-[#8FA1BF] italic font-serif">Haunting beauty. High contrast. Gothic charm.</p>
		</div>
	</section>
	<!-- Palette Highlights -->
	<section class="max-w-3xl mx-auto px-4 py-8 prose prose-invert">
		<h2 class="text-2xl font-semibold mb-6 text-[#B69CFF] font-serif">Color Palette</h2>
		<div class="grid grid-cols-2 md:grid-cols-3 gap-6">
			{#each palette as color}
				<div class="flex flex-col items-center bg-[#0E1628] rounded-xl p-4 shadow-lg border border-[#141E36]">
					<div class="w-8 h-8 rounded-full mb-2" style="background:{color.hex}; border:2px solid #1A2442"></div>
					<span class="font-medium text-[#E6EDF3]">{color.name}</span>
					<span class="text-xs text-[#B8C4D9]">{color.role}</span>
					<span class="text-xs text-[#7FE9FF]">{color.hex}</span>
				</div>
			{/each}
		</div>
	</section>
	<!-- Installation Steps -->
	<section class="max-w-2xl mx-auto px-4 py-8 prose prose-invert">
		<h2 class="text-xl font-semibold mb-4 text-[#7FE9FF] font-serif">Install in VS Code</h2>
		<ol class="list-decimal list-inside space-y-2 text-[#B8C4D9] font-serif">
			<li>Open <span class="font-semibold text-[#E6EDF3]">VS Code</span></li>
			<li>Go to <span class="font-semibold text-[#E6EDF3]">Extensions</span> (Ctrl+Shift+X / Cmd+Shift+X)</li>
			<li>Search for <span class="font-semibold text-[#B69CFF]">Transylvanian Twilight</span></li>
			<li>Click <span class="font-semibold text-[#2EE6A6]">Install</span></li>
			<li>Open Command Palette (Ctrl+Shift+P / Cmd+Shift+P)</li>
			<li>Type <span class="font-semibold text-[#B69CFF]">Preferences: Color Theme</span></li>
			<li>Select <span class="font-semibold text-[#B69CFF]">Transylvanian Twilight</span></li>
		</ol>
		<div class="mt-6 flex justify-center">
			<a href="https://marketplace.visualstudio.com/items?itemName=HatemSoliman.transylvanian-twilight" target="_blank" rel="noopener" class="bg-[#B69CFF] hover:bg-[#7FE9FF] text-[#0B1220] font-bold py-3 px-8 rounded-full shadow-lg transition font-serif">Install Theme</a>
		</div>
	</section>
	<!-- Pledge Section -->
	<section class="max-w-2xl mx-auto px-4 py-8 text-center prose prose-invert">
		<h2 class="text-xl font-semibold mb-4 text-[#C4B5FD] font-serif">The Transylvanian Twilight Pledge</h2>
		<blockquote class="bg-[#141E36] rounded-xl p-6 text-[#B8C4D9] italic shadow-md border border-[#1A2442] font-serif">
			I solemnly swear to code under the Carpathian moon,<br>
			To embrace the fog, the shadows, and the night,<br>
			To write mystical, bug-fighting code,<br>
			And to debug like a vampire… silently and elegantly.
		</blockquote>
		<p class="mt-4 text-[#7FE9FF] font-serif">Take the pledge before opening your IDE for a fully enchanted experience! 🦇🌙</p>
	</section>
	<!-- Feedback Link -->
	<section class="max-w-2xl mx-auto px-4 py-8 text-center prose prose-invert">
		<h2 class="text-lg font-semibold mb-2 text-[#4FC3F7] font-serif">Feedback</h2>
		<p class="text-[#B8C4D9] mb-2 font-serif">Found a bug or have a suggestion?</p>
		<a href="https://github.com/HatemSoliman/transylvanian-twilight" target="_blank" rel="noopener" class="underline text-[#7FE9FF] hover:text-[#B69CFF] font-serif">Open an issue on GitHub</a>
		<p class="mt-2 text-xs text-[#8FA1BF] italic font-serif">Bats, wolves, and nocturnal developers welcome.</p>
	</section>
	<footer class="mt-auto py-6 text-center text-[#6C7A96] text-xs font-serif">
		&copy; 2025 Transylvanian Twilight. Code under the Carpathian moon.
	</footer>
</div>


<style lang="postcss">
.gothic-title {
	font-family: 'Cinzel', 'EB Garamond', serif;
	letter-spacing: 0.02em;
	text-shadow: 0 2px 16px #0B1220, 0 0px 2px #B69CFF;
}
</style>
