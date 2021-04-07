<script>
    import { link } from 'svelte-routing'
    
    export let title = '';
    export let search = '';
    export let isPrincipal = false

    

</script>
<div class="card {isPrincipal ? 'principal': null}" >
    <a href="/ultimos/{search}" use:link >
        <div class="card-title">
            <h4>
                {title}
            </h4>
        </div>
        <!-- <div class="card-body">
            <h5>
            </h5>
            <p>
            </p>
        </div> -->
    </a>
</div>

<style>
	.card{
        /* cursor: pointer; */
        color: rgb(44, 44, 44);
        background-image: linear-gradient(to bottom right, hsl(300, 50%, 70%), hsl(100, 40%, 60%));
        margin: .6rem;
        padding: 2em;
		border-radius: 7px;
        width: fit-content;
        max-width: 130px; 
        /* min-width: 130px; */
        /* height: fit-content; */
		/* width: 15rem;
        height: 10rem; */
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        transition: all .3s ease;
    }
    .card.principal {
        font-size: 1.2em;
        max-width: fit-content;
    }
    .card:hover{
        color: rgb(255, 255, 150);
        box-shadow:  0px 0px 25px -10px rgb(255, 255, 150);
    }
    h4{
        transition: all .3s ease;
    }
    .card:hover h4{
        color: rgb(255, 255, 150);
    }
    .card-title{
        font-size: 1.3em;
        overflow: hidden;
        margin: 0 .3em;
    }
    .card-title h4{
        margin-top: 0;
    }
    /* .card:hover .card-title{
        height: auto
    } */
    /* .card-body h5{
        height: 1.5rem;
        overflow: hidden;
        margin: 0 .3em;
    } */
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