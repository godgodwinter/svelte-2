<script>
	import {useParams} from 'svelte-navigator';
	const params = useParams();
	$: console.log($params);
</script>

{$params.slug}
