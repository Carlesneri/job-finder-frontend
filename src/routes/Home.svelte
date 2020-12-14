<script>
	import Header from '../partials/Header.svelte'
	import Card from '../partials/Card.svelte'
	import Footer from '../Footer.svelte'
</script>

<Header />

<main>
	
	<div class="home">
		<h1>
			Portal dedicado a mostrar ofertas de trabajo en España. 
		</h1>
		<h2>
			Recopilamos para tí gran cantidad de ofertas laborales para que encuentre lo que buscas sin perder tiempo en miles de webs.
		</h2>
	</div>
	<div class="cards">
		<Card title={"Últimas ofertas de empleo"} />	
		<Card title={"Empleo en Madrid"} search={"madrid"}/>	
		<Card title={"Empleo en Barcelona"} search={"barcelona"}/>	
	</div>
</main>

<Footer />

<style>
	main{
		max-width: 1000px;
		padding: 0 1rem;
		min-height: calc(100vh - 11rem);
		margin: 0 auto;
	}
	.home{
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
		max-width: 500px;
	}
	.home h1{
		font-size: 1.5em;
	}
	.home h2{
		font-size: 1.2em;
	}
	.cards {
		max-width: 700px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 1rem auto;
	}
</style>