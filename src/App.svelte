<script>
	import Job from './Job.svelte'
	import Footer from './Footer.svelte'
	import firebase from 'firebase/app'
	import 'firebase/firebase-firestore'
	import { firebaseConfig } from '../firebaseConfig.js'

	const RESULTS_PER_PAGE = 18

	firebase.initializeApp(firebaseConfig)

	const jobsDB = firebase.firestore()

	let jobs = []

	let filteredJobs = jobs

	let pages = 1

	let jobsToShow = []
	
	let search = ''

	jobsDB.collection('jobs').onSnapshot(querysnapshot => {
		let newJobs = []
		querysnapshot.forEach( doc => {
			newJobs.push(doc.data())
		})
		jobs = newJobs
		jobs.sort((a, b) => b.createdAt - a.createdAt)

		filteredJobs = jobs
		
		if(search.trim() === '') filtrarResultados(search.trim())

		jobsToShow = filteredJobs.slice(0, RESULTS_PER_PAGE * pages)

	})


	function filtrarResultados(searchItem){
		// console.log(search)
		if(searchItem !== ''){
			filteredJobs = jobs
			pages = 1

			const titleFilteredJobs = filteredJobs.filter(job => job.title.toLowerCase().includes(searchItem))
			// console.log(titleFilteredJobs.length);
			
			const companyFilteredJobs = filteredJobs.filter(job => job.company.toLowerCase().includes(searchItem))
			// console.log(companyFilteredJobs.length);
			
			const locationFilteredJobs = filteredJobs.filter(job => job.location.toLowerCase().includes(searchItem))
			// console.log(locationFilteredJobs.length);

			if(titleFilteredJobs.length >= companyFilteredJobs.length){
				if(titleFilteredJobs.length >= locationFilteredJobs.length){
					filteredJobs = titleFilteredJobs
				}else{
					if(companyFilteredJobs.length >= locationFilteredJobs.length){
						filteredJobs = companyFilteredJobs
					}else{
						filteredJobs = locationFilteredJobs
					}
				}
			}
			
			filteredJobs.sort((a, b) => b.createdAt - a.createdAt)

			jobsToShow = filteredJobs.slice(0, RESULTS_PER_PAGE * pages)

		}

	}

	function handleClickMoreJobs(){
		pages ++
		
		jobsToShow = filteredJobs.slice(0, RESULTS_PER_PAGE * pages)

		// jobsToShow = (search === '') ?  jobs.slice(0, RESULTS_PER_PAGE * pages) : 
		// filteredJobs.slice(0, RESULTS_PER_PAGE * pages)
		
	}

</script>

<header>
	<img src="logo.png" alt="">
	<h1>
		buscadorempleo<span class="dot">.</span><span class="org">org</span>
	</h1>
</header>


<main>

	<div class="search">
		<input type="text" placeholder="Filtrar resultados" bind:value={search} on:input={filtrarResultados(search.trim())}>
		<div class="num-results">
			{#if (search.trim() === '')}
				{jobs.length} ofertas de trabajo
				{:else}
				{#if filteredJobs.length > 1}
					{filteredJobs.length} ofertas encontradas
				{:else if filteredJobs.length === 1}
					1 oferta encontrada
				{/if}
			{/if}
		</div>
	</div>
	
	<div class="jobs">
		{#if (search.trim()) === ''}
			{#each jobsToShow as job}
				<Job {job} />
			{:else}
				<h4 class="loading">
					Cargando ofertas de trabajo...
				</h4>
			{/each}
	
		{:else}
			{#each jobsToShow as job}
				<Job {job} />
			{:else}
				<h4 class="loading">
					No existen ofertas con estas características.
				</h4>
			{/each}
		{/if}
	</div>

	{#if jobsToShow.length % RESULTS_PER_PAGE === 0}
		<div class="more-jobs link" on:click={handleClickMoreJobs}>
			mostrar más<span>&#8595</span>
		</div>
	{/if}


</main>

<Footer />

<style>
	/* main{
		position: relative;
	} */
	header{
		display: flex;
		height: 5rem;
		justify-content: center;
		align-items: center;
		text-align: center;
		/* margin: 2em 1em 1em 1em; */
	}
	header .dot{
		font-size: 1.2em;
		color: #00dd00;
	}
	header .org{
		color: #ff0000;
	}
	header img{
		/* border: 2px solid white; */
		background-color: #fff;
		/* box-shadow: 2px 0px 0px 0px white; */
		border-radius: 50%;
		padding: .2rem;
		width: 3.5em;
		margin: 0 1em;
	}
	.search{
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
		max-width: 500px;
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
	.num-results{
		margin-bottom:1rem;
	}
	main{
		min-height: calc(100vh - 10rem);
	}
	main .jobs{
		max-width: 1000px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-self: center;
		flex-wrap: wrap;
	}
	.more-jobs{
		cursor: pointer;
		border: 2px solid white;
		border-radius: 5px;
		width: fit-content;
		display: flex;
		justify-content: center;
		padding: 1rem;
		margin: .5rem auto;
	}
	.more-jobs span{
		margin-left: .5rem;
	}
	.more-jobs:hover{
		background-color: rgba(255, 255, 255, 0.1);
		border: 2px solid rgba(255, 255, 255, 0.5);
	}
</style>