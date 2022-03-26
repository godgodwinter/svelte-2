<script>
	// const {page} = stores();
	// import {page} from '$app/stores';
	// console.log($page.params);
	import imgPhoto from '../../assets/img/avatar/baemon-ava-1.jpg';
	import Api from '../../api';
	import tilt from '../../tilt.js';
	let reverse = false;
	let data;
	export const getData = async () => {
		try {
			const response = await Api.get('/landing/portofolio');
			data = response.data;
			return response.data;
		} catch (error) {
			console.error(error);
		}
	};
	getData();
</script>

<div class=" lg:flex w-full gap-4 flex-row-reverse">
	<div class="lg:w-3/12 px-10">
		<div class="py-10">
			<input type="text" placeholder="Cari . . . " class="border py-2 px-2 rounded-lg w-full" />
		</div>
		<div class="w-full  ">
			<h1 class="text-gray-600 text-sm font-bold">Label</h1>
		</div>
		<div>
			<div class=" hover:border-sky-500 pb-4 border-b-2 text-gray-700 py-6 hover:text-sky-600">
				<span class="font-bold  px-3 ">#</span> Label a
			</div>
		</div>
	</div>
	<div class="lg:w-9/12">
		<div class="px-4 py-2">
			<h1 class="text-6xl font-bold py-2">Portofolio</h1>
			<h4>A blog created with Svelte and Tailwind.css</h4>
		</div>

		<!-- Container -->
		<!-- <div class="container mt-4 mx-auto p-4 md:p-0 hover:shadow-2xl py-2">
			<div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
				<div
					class="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
					style="background-image:url('https://images7.alphacoders.com/347/347549.jpg')"
				>
					<div class="absolute text-xl">
						<i class="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer" />
					</div>
				</div>

				<div class="bg-white w-full md:w-2/3">
					<div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
						<div
							class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center"
						>
							<div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
								<h3>Saint Basil's Cathedral</h3>
								<p class="mb-0 mt-3 text-grey-dark text-sm italic">Moscow - Russia</p>
								<hr class="w-1/4 md:ml-0 mt-4  border lg:hidden" />
							</div>
							<div class="w-full lg:w-3/5 lg:px-3">
								<p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
									The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, Sobor
									Vasiliya Blazhennogo), commonly known as Saint Basil's Cathedral, is a church in
									Red Square in Moscow, Russia. The building, now a museum, is officially known as
									the Cathedral of the Intercession of the Most Holy Theotokos on the Moat (Russian:
									Собор Покрова Пресвятой Богородицы, что на Рву, Sobor Pokrova Presvyatoy
									Bogoroditsy, chto na Rvu) or Pokrovsky Cathedral (Russian: Покровский собор).[5]
									It was built from 1555–1561 on orders from Ivan the Terrible and commemorates the
									capture of Kazan and Astrakhan.
								</p>
							</div>
							<div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
								<button
									class="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2"
									>Visit now</button
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> -->
		<!-- ./Container -->
		<hr class="py-6" />

		<div
			class="gap-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-white justify-items-center"
		>
			{#if data}
				{#each data as item, i}
					<!--  <a rel="prefetch href="portofolio/{item.slug}"> " -->
					<a href="portofolio/{item.slug}">
						<div
							class="hover:scale-110 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl"
						>
							<img class="rounded-t-lg h-32 w-full object-cover" src={imgPhoto} alt="" />

							<div class="p-5">
								<p class="mb-1 font-normal text-gray-500 dark:text-gray-400">Maret 22, 2022</p>

								<h5
									class="mb-2 text-2xl py-2 font-bold tracking-tight text-gray-900 dark:text-white"
								>
									{item.title}
								</h5>

								<p
									class="mb-1 font-normal text-gray-700 dark:text-gray-400 max-h-44 overflow-hidden"
								>
									{@html item.desc}
								</p>
							</div>
						</div>
					</a>
				{/each}
			{/if}
		</div>
	</div>
</div>
