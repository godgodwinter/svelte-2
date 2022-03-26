<script>
	import './app.css';

	// assets
	import imgLogo from './assets/svelte.png';

	import {Router, Link, Route} from 'svelte-navigator';
	import Home from './routes/Home.svelte';
	import About from './routes/About.svelte';

	//declare variable
	let isMenuOpen = false;

	//declare function
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<div class="w-full">
	<Router>
		<aside
			class="w-64  fixed z-50 overflow-scroll h-screen block md:hidden {isMenuOpen ? '' : 'hidden'}"
			aria-label="Sidebar"
		>
			<div class="overflow-y-auto h-screen py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
				<ul class="space-y-2">
					<li>
						<a
							href="#"
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<svg
								class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
									d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
								/></svg
							>
							<span class="ml-3">Dashboard</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<svg
								class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
								/></svg
							>
							<span class="flex-1 ml-3 whitespace-nowrap">Kanban</span>
							<span
								class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
								>Pro</span
							>
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<svg
								class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
								/><path
									d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
								/></svg
							>
							<span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
							<span
								class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
								>3</span
							>
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<svg
								class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
									clip-rule="evenodd"
								/></svg
							>
							<span class="flex-1 ml-3 whitespace-nowrap">Users</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<svg
								class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
									clip-rule="evenodd"
								/></svg
							>
							<span class="flex-1 ml-3 whitespace-nowrap">Products</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<svg
								class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
									clip-rule="evenodd"
								/></svg
							>
							<span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<svg
								class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
									clip-rule="evenodd"
								/></svg
							>
							<span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
						</a>
					</li>
				</ul>
			</div>
		</aside>

		<div class="relative py-2 px-4 sm:px-6 lg:px-8 bg-sky-50">
			<nav
				class="relative flex items-center justify-between sm:h-10 lg:justify-between max-w-7xl mx-auto  "
				aria-label="Global"
			>
				<div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
					<div class="flex items-center justify-between w-full md:w-auto">
						<a href="#" class="flex py-2 text-gray-600 gap-4 ">
							<span class="sr-only">Workflow</span>
							<img class="h-8 w-auto sm:h-10" src={imgLogo} />
							<p class="pt-2 font-semibold">Babeng.web.id</p>
						</a>
						<div class="-mr-2 flex items-center md:hidden">
							<button
								on:click={toggleMenu}
								type="button"
								class="bg-transparent border-2 border-sky-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-200"
								aria-expanded="false"
							>
								<span class="sr-only">Open main menu</span>
								<!-- Heroicon name: outline/menu -->
								{#if !isMenuOpen}
									<svg
										width="24"
										height="24"
										xmlns="http://www.w3.org/2000/svg"
										fill-rule="evenodd"
										clip-rule="evenodd"
										><path
											d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
											fill="#1040e2"
										/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" /></svg
									>
								{:else}
									<svg
										width="24"
										height="24"
										xmlns="http://www.w3.org/2000/svg"
										fill-rule="evenodd"
										clip-rule="evenodd"
										><path
											d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"
										/></svg
									>
								{/if}
							</button>
						</div>
					</div>
				</div>
				<div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8 lg:flex md:justify-center w-4/5">
					<Link to="/" class="font-medium text-gray-500 hover:text-gray-900">Home</Link>

					<Link to="about" class="font-medium text-gray-500 hover:text-gray-900">About</Link>
				</div>
			</nav>
		</div>

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

<footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
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
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
		>© 2022 <a href="https://babeng.web.id" class="hover:underline">Babeng</a>. All Rights Reserved.
	</span>
</footer>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
