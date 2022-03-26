<script>
	import {count} from '../stores.js';
	let countValue;
	count.subscribe(value => {
		countValue = value;
	});

	function increment() {
		count.set(countValue + 1);
	}
</script>

<button class="py-2 px-2 rounded-md bg-red-400" on:click={increment}> increment </button>
<h1>This Is {countValue}</h1>
<h1>About</h1>
