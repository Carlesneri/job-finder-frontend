<script>
	import { Navigate } from 'svelte-router-spa'
</script>
<div class="card">
    <Navigate to="last-jobs">
        <div class="card-title">
            <h3>
                Últimas ofertas
            </h3>
        </div>
        <div class="card-body">
            <h5>
            </h5>
            <p>
            </p>
        </div>
    </Navigate>
</div>

<style>
	.card{
        /* cursor: pointer; */
        color: #222;
        background-image: linear-gradient(to bottom right, hsl(100, 50%, 70%), hsl(100, 40%, 60%));
        margin: .6rem;
        padding: 2em;
		border-radius: 7px;
        width: fit-content;
		/* width: 15rem;
        height: 10rem; */
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all .3s ease;
    }
    .card:hover{
        color: rgb(255, 255, 150);
        box-shadow:  0px 0px 25px -10px rgb(255, 255, 150);
    }
    .card-title{
        font-size: 1.3em;
        /* height: 4rem; */
        overflow: hidden;
        margin: 0 .3em;
    }
    .card-title h3{
        margin-top: 0;
    }
    /* .card:hover .card-title{
        height: auto
    } */
    .card-body h5{
        height: 1.5rem;
        overflow: hidden;
        margin: 0 .3em;
    }
    /* .card:hover .card-body h5{
        height: auto
    } */
    /* .card-body p{
        height: 1.5rem;
        overflow: hidden;
        margin: .3em;
    }
    .card:hover .card-body p{
        height: auto
    } */

    /* @media (max-width: 500px){
        .card, .card-title, .card-body h5, .card-body p {
            height: auto;
        }
    } */
</style>