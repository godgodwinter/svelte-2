<script>
	import './app.css';

	// assets
	import imgLogo from './assets/svelte.png';

	import {Router, Link, Route} from 'svelte-navigator';
	import MenuBar from './lib/babeng/MenuBar.svelte';
	import Home from './routes/Home.svelte';
	import About from './routes/About.svelte';
</script>

<div class="w-full">
	<Router>
		<MenuBar />
		<main class="container  mx-w-6xl mx-auto py-4 font-serif">
			<div class="w-full px-10">
				<Route path="/">
					<Home />
				</Route>
				<Route path="about" component={About} />
			</div>
		</main>
	</Router>
</div>

<footer class="p-0 bg-gray-50 rounded-lg shadow md:px-0 md:pt-8 dark:bg-gray-800">
	<div class="sm:flex sm:items-center sm:justify-end">
		<ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
			<li>
				<a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
			</li>
			<li>
				<a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
			</li>
			<li>
				<a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
			</li>
			<li>
				<a href="#" class="hover:underline">Contact</a>
			</li>
		</ul>
	</div>

	<div class="bg-gray-100">
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<span class=" block text-sm text-gray-500 sm:text-center dark:text-gray-400"
			>© 2022 <a href="https://babeng.web.id" class="hover:underline">Babeng</a>. All Rights
			Reserved.
		</span>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	</div>
</footer>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
