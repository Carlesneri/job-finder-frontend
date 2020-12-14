<script>
	import { Navigate } from 'svelte-router-spa';
</script>

<header>
    <img src="logo.png" alt="">
    <h1>
        <Navigate to="/">
            buscadorempleo<span class="dot">.</span><span class="org">org</span>
        </Navigate>
    </h1>
</header>

<style>
    header{
		display: flex;
		height: 6rem;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 0 1rem;
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
