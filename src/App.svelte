<script>
	import Job from './Job.svelte'
	import Footer from './Footer.svelte'
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

		// console.log(search)
		const titleFilteredJobs = jobs.filter(job => job.title.toLowerCase().includes(search))
		const companyFilteredJobs = jobs.filter(job => job.company.toLowerCase().includes(search))
		const locationFilteredJobs = jobs.filter(job => job.location.toLowerCase().includes(search))
		
		// filteredJobs = [...locationFilteredJobs]
		filteredJobs = [...titleFilteredJobs, ...companyFilteredJobs, ...locationFilteredJobs] 
	}

</script>

<header>
	<img src="helmet.png" alt="">
	<h1>
		buscadorempleo<span class="dot">.</span><span class="org">org</span>
	</h1>
</header>

<div class="search">
	<input type="text" placeholder="Filtrar resultados" bind:value={search} on:input={filtrarResultados}>
</div>

<main>

	{#if (search) === ''}
		{#each jobs as job}
			<Job {job} />
		{:else}
			<h4 class="loading">
				Cargando ofertas de trabajo...
			</h4>
		{/each}

	{:else}
		{#each filteredJobs as job, i}
			<Job {job} />
		{:else}
			<h4 class="loading">
				No existen ofertas con estas características.
			</h4>
		{/each}
	{/if}

</main>

<Footer />

<style>
	/* main{
		position: relative;
	} */
	header{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin: 2em 1em 1em 1em;
	}
	header .dot{
		color: #00dd00;
	}
	header .org{
		color: red;
	}
	header img{
		width: 3.5em;
		margin: 0 1em;
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
		font-size: 1.1em;
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