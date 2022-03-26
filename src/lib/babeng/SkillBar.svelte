<script>
	// export let skills;
	export let score = 0;
	export let name = 'Svelte';
	let scoreValue = 0;

	for (let i = 0; i < score; i++) {
		setTimeout(() => {
			scoreValue = scoreValue + 1;
		}, i * 10);
	}
</script>

<dl>
	<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">{name}</dt>
	<dd class="flex items-center mb-3">
		<div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
			<div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: {scoreValue}%" />
		</div>
		<span class="text-sm font-medium text-gray-500 dark:text-gray-400">{scoreValue}</span>
	</dd>
</dl>
