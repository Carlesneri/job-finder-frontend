<script>
    export let job

    function openLink(link){
        window.open(link, "_blank")
    }

    let randomColor = () => Math.floor(Math.random()*360)

    let bgColor = randomColor()

    const daysAgo = Math.floor((Date.now() - job.createdAt) / (1000 * 60 * 60 * 24))

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
                Desde hoy 
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
        /* position: relative; */
        cursor: pointer;
        color: #222;
        background-color: hsl(var(--bg-color), 40%, 60%);
        margin: .4rem;
        padding: 1rem;
		border-radius: 7px;
		width: 15rem;
        height: 10rem;
        box-shadow:  1px 1px 3px rgba(170, 170, 170, 0.5);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all .2s ease;
        -moz-transition: all .2s ease;
        -webkit-transition: all .2s ease;
        -o-transition: all .2s ease;
    }
    .card:hover{
        background-color: hsl(var(--bg-color), 50%, 75%);
        min-height: 10rem;
        height: 13rem;
    }
    .card-title{
        min-height: 3em;
        max-height: 30%;
        overflow: hidden;
        margin: 0 .3em;
    }
    .card-body{
        max-height: 55%;
    }
    .card-body h5{
        max-height: 50%;
        min-height: 1em;
        overflow: hidden;
        margin: 0 .3em;
    }
    .card-body p{
        min-height: 1em;
        max-height: 50%;
        overflow: hidden;
        margin: .3em;
    }
    .card-footer{
        min-height: 1em;
        max-height: 15%;
        margin: .3em;
    }
</style>