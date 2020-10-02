<script>
    export let job, i

    function openLink(link){
        window.open(link, "_blank")
    }

    function getRandomBackground(){
        const card = document.querySelector(`.card-${i}`)
    
        const randomColor = () => Math.floor(Math.random()*360)
        card.style.backgroundColor = `hsl(${randomColor()}, 40%, 60%)`
    }
    
</script>

<div on:click={openLink(job.link)} class="card card-{i}" on:load={getRandomBackground()}>
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
</div>

<style>
	.card{
        cursor: pointer;
        color: #222;
        margin: .35rem;
        padding: 1rem;
		border-radius: 7px;
		width: 15rem;
        height: 10rem;
        box-shadow:  2px 2px 5px rgba(170, 170, 170, 0.5);
        overflow: hidden;
        /* font-size: .8em; */
        /* font-weight: lighter; */
        display: flex;
        flex-direction: column;
	}
    .card-title{
        max-height: 4em;
        min-height: 2em;
        overflow: hidden;
        margin: .33em;
    }
    .card-body h5{
        max-height: 3.5em;
        min-height: 2em;
        overflow: hidden;
        margin: .33em;
    }
    .card-body p{
        min-height: 1em;
        overflow: hidden;
        margin: .33em;
    }
</style>