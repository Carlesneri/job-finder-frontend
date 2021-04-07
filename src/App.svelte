<script>
	import { Router, Route } from 'svelte-routing';
	import Home from './routes/Home.svelte';
	import LastJobs from './routes/LastJobs.svelte';
	import AvisoLegal from './routes/AvisoLegal.svelte';
	import Privacity from './routes/Privacity.svelte'
	import Cookies from './routes/Cookies.svelte'
	import NoPage from './routes/NoPage.svelte';
</script>

<Router>
	<Route path="/" component={Home} />
	<Route path="/ultimos" component={LastJobs} />
	<Route path="/ultimos/:search" component={LastJobs} let:params />
	<Route path="/aviso-legal" component={AvisoLegal} />
	<Route path="/politica-de-privacidad" component={Privacity} />
	<Route path="/uso-de-cookies" component={Cookies} />
	<Route path="/*" component={NoPage} />
</Router>