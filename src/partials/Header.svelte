<script>
	import { link } from 'svelte-routing'
</script>

<header>
    <img src="/logo.png" alt="">
    <h1>
		<a href="/" use:link >
            buscadorempleo<span class="dot">.</span><span class="org">org</span>
		</a>
    </h1>
</header>

<style>
    header{
		display: flex;
		height: 6rem;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin-top: 1rem;
		padding: 1rem;
	}
	header .dot{
		font-size: 1.2em;
		color: #00dd00;
	}
	header .org{
		color: #ff0000;
	}
	header img{
		background-color: #fff;
		border-radius: 50%;
		padding: .2rem;
		width: 3.5em;
		margin: 0 1em;
	}

</style>
