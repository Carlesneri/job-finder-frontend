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
		user-select: none;
	}
	header h1 {
		font-size: 1.8em;
	}
	header .dot{
		font-size: 1.9em;
		color: var(--green);
	}
	header .org{
		color: var(--red);
	}
	header img{
		/* background-color: #fff; */
		/* border-radius: 50%; */
		/* padding: .2rem; */
		width: 3rem;
		/* margin: 0 .5rem; */
	}

</style>
