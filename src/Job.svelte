<script>
    export let job 

    const cards = document.querySelectorAll('.card')

    const randomColor = () => Math.floor(Math.random()*360)

    cards.forEach(card => {
        card.style.backgroundColor = `hsl(${randomColor()}, 50%, 50%)`
    })

    function openLink(link){
        window.open(link, "_blank")
    }
    
</script>

<div on:click={() => openLink(job.link)} class="card">
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
        margin: 1rem;
        padding: 1rem;
		border-radius: 7px;
		width: 10rem;
        height: 11rem;
        box-shadow:  2px 2px 3px #555;
        overflow: hidden;
        font-size: .8em;
        font-weight: lighter;
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