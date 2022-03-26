<script>
	import imgLogo from '../../assets/svelte.png';

	import {Router, Link, Route} from 'svelte-navigator';
	//declare variable
	let isMenuOpen = false;

	//declare function
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<Router>
	<aside
		class="w-64  fixed z-50 overflow-scroll h-screen block md:hidden {isMenuOpen ? '' : 'hidden'}"
		aria-label="Sidebar"
	>
		<div class="overflow-y-auto h-screen py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
			<ul class="space-y-2">
				<li>
					<Link
						to="/"
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
						<span class="ml-3">Home</span>
					</Link>
				</li>
				<li>
					<Link
						to="about"
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
						<span class="flex-1 ml-3 whitespace-nowrap">About</span>
						<span
							class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
							>New</span
						>
					</Link>
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
					<Link to="/" class="flex py-2 text-gray-600 gap-4 ">
						<span class="sr-only">Workflow</span>
						<img class="h-8 w-auto sm:h-10" alt="Logo babeng" src={imgLogo} />
						<p class="pt-2 font-semibold">Babeng.web.id</p>
					</Link>
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
</Router>
