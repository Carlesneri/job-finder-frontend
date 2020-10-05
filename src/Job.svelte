<script>
    export let job

    function openLink(link){
        window.open(link, "_blank")
    }

    let randomColor = () => Math.floor(Math.random()*360)

    let bgColor = randomColor()


    const hoursAgo = Math.floor((Date.now() - job.createdAt) / (1000 * 60 * 60))
    const daysAgo = Math.floor(hoursAgo / 24)

</script>

<div on:click={openLink(job.link)} class="card" style="--bg-color: {bgColor}">
    <div class="card-title">
        <h3>
            {job.title}
        </h3>
    </div>
    <div class="card-body">
        <h5>
            {job.company}
        </h5>
        <p>
            {job.location}
        </p>
    </div>
    <div class="card-footer">
        {#if daysAgo < 1}
            <small>
                Desde hace {hoursAgo} horas
                <!-- Desde hoy  -->
            </small>
        {:else if  daysAgo < 2}
            <small>
                Desde ayer 
            </small>
        {:else}
            <small>
                Desde hace {daysAgo} días
            </small>
        {/if}
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
        box-shadow:  0px 5px 15px -10px white;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: all .2s ease;
        -moz-transition: all .2s ease;
        -webkit-transition: all .2s ease;
        -o-transition: all .2s ease;
    }
    .card:hover{
        background-color: hsl(var(--bg-color), 50%, 75%);
        min-height: 10rem;
        height: 15rem;
        justify-content: flex-start;
    }
    .card-title{
        height: 4rem;
        overflow: hidden;
        margin: 0 .3em;
    }
    .card:hover .card-title{
        height: auto
    }
    .card-body h5{
        height: 1.5rem;
        overflow: hidden;
        margin: 0 .3em;
    }
    .card:hover .card-body h5{
        height: auto
    }
    .card-body p{
        height: 1.5rem;
        overflow: hidden;
        margin: .3em;
    }
    .card:hover .card-body p{
        height: auto
    }
    .card-footer{
        font-weight: bold;
        height: 1.5rem;
        overflow: hidden;
        margin: 0 .3em;
        flex-shrink: 1;
    }
    .card:hover .card-footer{
        height: auto;
        margin-top: auto;
    }
</style>