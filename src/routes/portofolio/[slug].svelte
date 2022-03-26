<script>
	import {useParams} from 'svelte-navigator';
	const params = useParams();
	$: console.log($params);
	import Api from '../../api';
	import {baseUrl} from '../../stores';
	import {baseUrlFE} from '../../stores';

	let baseUrlValue, baseUrlFEValue;
	baseUrl.subscribe(value => {
		baseUrlValue = value;
	});

	baseUrlFE.subscribe(value => {
		baseUrlFEValue = value;
	});
	import imgPhoto from '../../assets/img/avatar/baemon-ava-1.jpg';
	let data;
	export const getData = async () => {
		try {
			const response = await Api.get(`/landing/portofolio/${$params.slug}`);
			data = response.data;
			console.log(data);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	};
	getData();
</script>

{#if data}
	<div class=" lg:flex flex-col w-full gap-4 justify-center ">
		<div class="justify-center gap-10 flex py-10">
			<div>
				<img
					src={imgPhoto}
					class="w-20 h-20 object-cover rounded-full border-2 border-fuchsia-700"
					alt=""
				/>
			</div>
			<div>
				<div
					class="font-light text-xl bg-clip-text bg-gradient-to-r text-transparent from-fuchsia-600 to-pink-500 py-1 "
				>
					Kukuh Setya Nugraha
				</div>
				<div class="text-gray-500 font-light py-1">Mei 22, 2022</div>
			</div>
		</div>
		<div class="flex w-full justify-center py-0  flex-col">
			<div class="text-4xl font-bold text-gray-700 text-center w-full ">
				{data.title}
			</div>
			<div class="flex justify-center flex-wrap gap-1 pt-4">
				{#each data.label as label}
					<span class="text-gray-50 bg-red-400 px-1 py-1 rounded-lg text-xs">#{label.name}</span>
				{/each}
			</div>

			<div class="flex justify-center py-10">
				{#if data.image.length > 0}
					<img
						src={baseUrlValue + data.image[0].photo}
						class="w-full lg:w-8/12 object-cover h-72"
					/>
				{:else}
					<img src={imgPhoto} alt="" class="w-full lg:w-8/12 object-cover h-96" />
				{/if}
			</div>
			<div class="text-xl font-light text-gray-500 pt-20 mx-32">
				{@html data.desc}

				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum laudantium doloribus porro
				provident adipisci vero aliquam unde omnis voluptates ea doloremque, debitis, possimus sit
				non voluptas corrupti! Quo, dolorum illum?
			</div>

			<div class="px-10 py-20">
				<div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
					<div class="carousel-inner relative w-full overflow-hidden">
						{#each data.image as image}
							<div class="carousel-item active relative float-left w-full">
								<div
									class="relative overflow-hidden bg-no-repeat bg-cover"
									style="background-position: 50%;"
								>
									<img
										src={baseUrlValue + image.photo}
										class="block w-full max-h-screen object-cover"
									/>
									<div
										class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"
									/>
								</div>
								<div class="carousel-caption hidden md:block absolute text-center">
									<h5 class="text-xl">First slide label</h5>
									<p>Some representative placeholder content for the first slide.</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<main class="py-32 w-full flex flex-col justify-center items-center bg-white">
		<h1 class="text-9xl font-extrabold text-gray-500 tracking-widest">404</h1>
		<div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">Page Not Found</div>
		<button class="mt-5">
			<a
				class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
			>
				<span
					class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
				/>

				<span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
					<router-link to="/">Go Home</router-link>
				</span>
			</a>
		</button>
	</main>
{/if}
