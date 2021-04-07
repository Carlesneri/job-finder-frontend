<script>
	import Layout from './../Layout.svelte'
	import Form from '../partials/Form.svelte'
	import Card from '../partials/Card.svelte'
</script>

<Layout>
	<main>
		<div class="home">
			<h1>
				Portal dedicado a mostrar ofertas de trabajo en España. 
			</h1>
			<h2>
				Recopilamos para tí gran cantidad de ofertas laborales para que encuentres lo que buscas sin perder tiempo en miles de webs.
			</h2>
		</div>
		<section>
			<div class="principal-card">
				<Card title={"Últimas ofertas de empleo"} isPrincipal={true}/>	
			</div>
			<div class="cards">
				<Card title={"Empleo en Madrid"} search={"madrid"}/>	
				<Card title={"Empleo en Barcelona"} search={"barcelona"}/>
				<Card title={"Empleo de vendedor"} search={"vendedor"}/>
				<Card title={"Empleo de comercial"} search={"comercial"}/>	
			</div>
		</section>
		<div class="form">
			<Form />
		</div>
	</main>
</Layout>

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
	section {
		margin: 1rem auto;
	}
	.principal-card {
		display:flex;
		justify-content: center;
	}
	.cards {
		max-width: 700px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 1rem auto;
	}
</style>