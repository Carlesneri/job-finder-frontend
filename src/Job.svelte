<script>
    import { scale } from 'svelte/transition'

    export let job

    export let changeModal

    // export let modalJob = null

    // function openLink(link){
    //     window.open(link, "_blank")
    // }

    let randomColor = () => Math.floor(Math.random()*360)

    let bgColor = randomColor()


    const hoursAgo = Math.floor((Date.now() - job.createdAt) / (1000 * 60 * 60))
    const daysAgo = Math.floor(hoursAgo / 24)

</script>

<!-- <div on:click={openLink(job.link)} class="card" style="--bg-color: {bgColor}" transition:scale > -->
<div on:click={() => changeModal('job', job)} class="card" style="--bg-color: {bgColor}" transition:scale >
    <div class="card-title">
        <h3>
            {job.title}
        </h3>
        <h5>
            {job.company}
        </h5>
        <h6>
            {job.location}
        </h6>
    </div>
    <div class="card-footer">
        <small>
        {#if daysAgo < 1}
            {#if hoursAgo < 1}
                Añadido ahora
            {:else if hoursAgo === 1}
                Desde hace 1 hora
            {:else}
                Desde hace {hoursAgo} horas
            {/if}
        {:else if  daysAgo < 2}
                Desde ayer 
        {:else}
                Desde hace {daysAgo} días
        {/if}
        </small>
    </div>
</div>

<style>
	.card{
        cursor: pointer;
        color: #222;
        background-image: linear-gradient(to bottom right, hsl(var(--bg-color), 50%, 70%), hsl(var(--bg-color), 40%, 60%));
        margin: .6rem;
        padding: 1rem;
		border-radius: 7px;
		width: 15rem;
        height: 10rem;
        box-shadow:  5px 5px 15px -10px white;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: all .3s ease;
        -moz-transition: all .3s ease;
        -webkit-transition: all .3s ease;
        -o-transition: all .3s ease;
    }
    .card-title{
        height: 8rem;
        overflow: hidden;
        margin: 0 .3em;
    }
    .card-title h3{
        margin-top: 0;
        font-size: 1.2rem;
    }
    .card-title h5{
        height: 1.5rem;
        overflow: hidden;
    }
    .card-title h6{
        height: 1.5rem;
        font-size: .8rem;
        overflow: hidden;
    }
    .card-footer{
        font-weight: bold;
        height: 1.5rem;
        overflow: hidden;
        margin: 0 .3em;
        flex-shrink: 1;
    }

    @media (max-width: 500px){
        .card, .card-title, .card-title h5, .card-title h6, .card-footer{
            height: auto;
        }
    }
</style>