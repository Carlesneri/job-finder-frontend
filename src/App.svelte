<script>
	import Job from './Job.svelte'
	import firebase from 'firebase/app'
	import 'firebase/firebase-firestore'
	import { firebaseConfig } from '../firebaseConfig.js'

	firebase.initializeApp(firebaseConfig)

	const jobsDB = firebase.firestore()

	let jobs = []

	let filteredJobs = []

	jobsDB.collection('jobs').onSnapshot(querysnapshot => {
		let newJobs = []
		querysnapshot.forEach( doc => {
			newJobs.push(doc.data())
		})
		jobs = newJobs
	})

	let search = ''

	function filtrarResultados(){
		 filteredJobs = jobs.filter(job => job.location.toLowerCase().includes(search))
	}

</script>

<header>
	<h1>
		buscadorempleo.org
	</h1>
</header>

<div class="search">
	<input type="text" placeholder="Filtrar resultados" bind:value={search} on:input={filtrarResultados}>
</div>

<main>

	{#if (search) === ''}
		{#each jobs as job, i}
			<Job {job} {i}/>
		{:else}
			<h4 class="loading">
				Cargando ofertas de trabajo...
			</h4>
		{/each}

	{:else}
		{#each filteredJobs as job, i}
			<Job {job} {i}/>
		{:else}
			<h4 class="loading">
				Cargando ofertas de trabajo...
			</h4>
		{/each}
	{/if}

</main>

<style>
	header{
		text-align: center;
		margin: 1em;
	}
	.search{
		display: flex;
		justify-content: center;
	}
	.search input{
		padding: .7rem;
		min-width: 30em;
		margin-bottom: 1rem;
		border: none;
		outline: none;
	}	
	.loading{
		margin: 2rem;
	}
	main{
		max-width: 1000px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-self: center;
		flex-wrap: wrap;
	}
</style>