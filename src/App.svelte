<script>
	import { Router, Route } from 'svelte-routing';
	import Home from './routes/Home.svelte';
	import LastJobs from './routes/LastJobs.svelte';
</script>

<Router>
	<div>
		<Route path="/" component={Home} />
		<Route path="/ultimos" component={LastJobs} />
		<Route path="/ultimos/:search" component={LastJobs} let:params />
	</div>
</Router>