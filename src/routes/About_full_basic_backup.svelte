<script>
	import tilt from '../tilt.js';
	let reverse = false;
	import imgPhotoProfile from '../assets/img/photo/babenggray.jpg';
	import imgPorto1 from '../assets/img/avatar/baemon-ava-1.jpg';
	let barSkill = 90;
	let barValue = 0;
	for (let i = 0; i < 90; i++) {
		setTimeout(() => {
			barValue = barValue + 1;
		}, i * 10);
	}
</script>

<div class="md:flex w-full gap-4">
	<div class="lg:w-3/12">
		<div class="bg-white p-3 border-t-2 border-gray-400">
			<div class=" border-4 border-gray-600">
				<div class="image overflow-hidden" use:tilt={{scale: 1.1, reverse}}>
					<img
						class="h-96 md:h-72 xl:h-96 hover:rounded-lg w-full object-cover mx-auto"
						src={imgPhotoProfile}
						alt=""
					/>
				</div>
			</div>
			<h1 class="text-gray-900 font-bold text-xl leading-8 my-1 text-center underline">
				Kukuh Setya Nugraha
			</h1>
			<h3 class="text-gray-600 font-lg text-semibold leading-6 text-center  border-b-2">
				Full stack web developer.
			</h3>
			<p class="text-sm text-gray-500 hover:text-gray-600 leading-6 text-center py-4">
				Second child of 3 siblings . 27 years old. love to learn new things. Now im Interest about
				latest Javascript Framework like Svelte / Vue / Vite / TS / Etc. Most often use Php &
				Javascript.
			</p>

			<div class="py-4">
				<h3 class="text-gray-600 font-xl py-2 text-bold underline leading-6 text-center">
					Education
				</h3>
				<p class="text-gray-600 font-lg text-light leading-6 text-center">
					Bachelor of Information Systems (S.Kom) / faculty of informatics technology / 2018 /
					Universitas Kanjuruhan Malang.
				</p>
			</div>

			<div class="py-4">
				<h3 class="text-gray-600 font-xl py-2 text-bold underline leading-6 text-center">
					Contact
				</h3>
				<p class="text-gray-600 font-lg text-light leading-6 text-center">
					085736862399 - setyanugraha.kukuh@gmail.com
				</p>
			</div>

			<div class="py-4">
				<h3 class="text-gray-600 font-xl py-2 text-bold underline leading-6 text-center">Hobby</h3>
				<p class="text-gray-600 font-lg text-light leading-6 text-center">Dota / Sleep .</p>
			</div>

			<div class="py-4">
				<h3 class="text-gray-600 font-xl py-2 text-bold underline leading-6 text-center">
					Language
				</h3>
				<p class="text-gray-600 font-lg text-light leading-6 text-center">
					Indonesia (Active/Pasiv) : 80/100.
				</p>
			</div>

			<div class="flex items-center mb-5 pt-6">
				<p
					class="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800"
				>
					#
				</p>
				<p class="ml-2 font-medium text-gray-900 dark:text-white">Coding Activity</p>
			</div>
			<ul
				class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
			>
				<li class="flex items-center py-3">
					<span>Status</span>
					<span class="ml-auto"
						><span class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span
					>
				</li>
				<li class="flex items-center py-3">
					<span>Since</span>
					<span class="ml-auto">Juni , 2019 - Now</span>
				</li>
			</ul>
		</div>

		<!-- <div class="border-t-4 border-gray-400 ">
			<div class="flex flex-col items-center py-3">
				<img class="mb-3 w-32 h-3w-32 rounded-full shadow-lg" src={imgPhotoProfile} />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Kukuh Setya Nugraha</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Full stack Web Developer</span>
			</div>
		</div> -->
	</div>
	<div class="lg:w-9/12">
		<div>
			<!-- About Section -->
			<div class="bg-gray-50 p-3 shadow-sm rounded-sm">
				<div class="text-gray-700">
					<div class="flex items-center mb-5">
						<p
							class="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800"
						>
							#
						</p>
						<p class="ml-2 font-medium text-gray-900 dark:text-white">Skills</p>
						<span class="mx-2 w-1 h-1 bg-gray-900 rounded-full dark:bg-gray-500" />
						<p class="text-sm font-medium text-gray-500 dark:text-gray-400">3 Skills</p>
						<a
							href="#"
							class="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
							>Read all reviews</a
						>
					</div>
					<div class="gap-8 sm:grid sm:grid-cols-2">
						<div>
							<dl>
								<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Vue</dt>
								<dd class="flex items-center mb-3">
									<div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
										<div
											class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
											style="width: {barValue}%"
										/>
									</div>
									<span class="text-sm font-medium text-gray-500 dark:text-gray-400"
										>{barValue}</span
									>
								</dd>
							</dl>
							<dl>
								<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Comfort</dt>
								<dd class="flex items-center mb-3">
									<div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
										<div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 89%" />
									</div>
									<span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
								</dd>
							</dl>
							<dl>
								<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Free WiFi</dt>
								<dd class="flex items-center mb-3">
									<div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
										<div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 88%" />
									</div>
									<span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
								</dd>
							</dl>
							<dl>
								<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Facilities</dt>
								<dd class="flex items-center">
									<div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
										<div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 54%" />
									</div>
									<span class="text-sm font-medium text-gray-500 dark:text-gray-400">5.4</span>
								</dd>
							</dl>
						</div>
						<div>
							<dl>
								<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
									Value for money
								</dt>
								<dd class="flex items-center mb-3">
									<div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
										<div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 89%" />
									</div>
									<span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
								</dd>
							</dl>
							<dl>
								<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Cleanliness</dt>
								<dd class="flex items-center mb-3">
									<div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
										<div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 70%" />
									</div>
									<span class="text-sm font-medium text-gray-500 dark:text-gray-400">7.0</span>
								</dd>
							</dl>
							<dl>
								<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Location</dt>
								<dd class="flex items-center">
									<div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
										<div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 89%" />
									</div>
									<span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
								</dd>
							</dl>
						</div>
					</div>
				</div>
				<button
					class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
					>Show Full Information</button
				>
			</div>
			<!-- End of about section -->
		</div>

		<!-- Portofolio Section -->
		<div>
			<div class="bg-gray-50 p-3 shadow-sm rounded-sm">
				<div class="text-gray-700">
					<div class="flex items-center mb-5">
						<p
							class="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800"
						>
							#
						</p>
						<p class="ml-2 font-medium text-gray-900 dark:text-white">Portofolio</p>
						<span class="mx-2 w-1 h-1 bg-gray-900 rounded-full dark:bg-gray-500" />
						<p class="text-sm font-medium text-gray-500 dark:text-gray-400">50 Projects</p>
						<a
							href="#"
							class="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
							>View More</a
						>
					</div>
					<div class="gap-8 sm:grid sm:grid-cols-1">
						<div class="w-full ">
							<dl class="flex  justify-between px-4 border-b-2 hover:shadow-xl">
								<div class="flex gap-10 w-10/12">
									<img
										class="rounded w-36 h-36 object-cover"
										src={imgPorto1}
										alt="Extra large avatar"
									/>
									<div class="overflow-hidden h-24">
										<h1 class="text-gray-600 font-semibold text-xl py-2">Porto 1</h1>
										<p class="text-gray-500 font-light">
											Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo illo voluptatem
											minima voluptate in est, accusamus ducimus, molestias rem minus accusantium
											harum odio sapiente! Id accusantium et nihil veritatis. Aspernatur. Lorem
											ipsum dolor sit amet consectetur adipisicing elit. Accusantium magni sunt
											dicta iure voluptates, quod, soluta ut reprehenderit sed eius nemo libero
											provident explicabo earum. Odio rem tempora magni totam!
										</p>
									</div>
								</div>
								<div class="grid grid-cols-1 w-2/12 content-center">
									<button
										class="py-1 mx-auto px-6 hover:bg-green-700 bg-green-500 rounded-lg text-gray-200 font-light mt-2"
									>
										Demo
									</button>
									<button
										class="py-1 mx-auto px-6 hover:bg-gray-800 bg-gray-600 rounded-lg text-gray-200 font-light mt-2"
									>
										Repo
									</button>
									<button
										class="py-1 mx-auto px-6 hover:bg-blue-800 bg-blue-600 rounded-lg text-gray-200 font-light mt-2"
									>
										Detail
									</button>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- End of Portofolio section -->
		<!-- Achievement  Section -->
		<div>
			<div class="bg-gray-50 p-3 shadow-sm rounded-sm">
				<div class="text-gray-700">
					<div class="flex items-center mb-5">
						<p
							class="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800"
						>
							#
						</p>
						<p class="ml-2 font-medium text-gray-900 dark:text-white">Achievement</p>
						<span class="mx-2 w-1 h-1 bg-gray-900 rounded-full dark:bg-gray-500" />
						<p class="text-sm font-medium text-gray-500 dark:text-gray-400">50 Projects</p>
					</div>
					<div class="gap-8 sm:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
						<div
							class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl"
						>
							<a href="#">
								<img class="rounded-t-lg h-32 w-full object-cover" src={imgPorto1} alt="" />
							</a>
							<div class="p-5">
								<a href="#">
									<h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
										Noteworthy technology acquisitions 2021
									</h5>
								</a>
								<p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Udemy - Course</p>

								<div class="w-full text-right">
									<a
										href="#"
										class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										Check
										<svg
											class="ml-2 -mr-1 w-4 h-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
											><path
												fill-rule="evenodd"
												d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
												clip-rule="evenodd"
											/></svg
										>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- End of Achievement section -->

		<!-- Experience  Section -->
		<div>
			<div class="bg-gray-50 p-3 shadow-sm rounded-sm">
				<div class="text-gray-700">
					<div class="flex items-center mb-5">
						<p
							class="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800"
						>
							#
						</p>
						<p class="ml-2 font-medium text-gray-900 dark:text-white">Experience</p>
						<span class="mx-2 w-1 h-1 bg-gray-900 rounded-full dark:bg-gray-500" />
						<p class="text-sm font-medium text-gray-500 dark:text-gray-400">3 years Experience</p>
					</div>
					<div class="gap-8 sm:grid sm:grid-cols-1">
						<ol class="relative border-l border-gray-200 dark:border-gray-700">
							<li class="mb-10 ml-4">
								<div
									class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
								/>
								<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
									>August 2021 - Frebruary 2022</time
								>
								<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
									Freelance on PT ABC
								</h3>
								<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
									Help to make 2nd app to make user app.
								</p>
								<a
									href="#"
									class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
									>Learn more <svg
										class="ml-2 w-3 h-3"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										><path
											fill-rule="evenodd"
											d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/></svg
									></a
								>
							</li>

							<li class="mb-10 ml-4">
								<div
									class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
								/>
								<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
									>August 2021 - Frebruary 2022</time
								>
								<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
									Freelance on PT ABC
								</h3>
								<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
									Help to make 2nd app to make user app.
								</p>
								<a
									href="#"
									class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
									>Learn more <svg
										class="ml-2 w-3 h-3"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										><path
											fill-rule="evenodd"
											d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/></svg
									></a
								>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
		<!-- End of Experience section -->
	</div>
</div>
