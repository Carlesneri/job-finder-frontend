<script>
    export let modal, changeModal

    import AvisoLegal from './AvisoLegal.svelte'
    // import modalContents from './modalContents'

    // console.log(modalContents)
    
    // const modalContent = modalContents[modal]

    // modal = false

        
</script>

<div class="modal" >
    <div class="modal-content">
        {#if modal === 'legal'}
            <AvisoLegal />
        <!-- {:else if  otherCondition} -->
        <!-- {:else} -->

        {/if}
        <button class="link" on:click={() => changeModal(false)}>
            Cerrar
        </button>
    </div>
</div>

<style>
    .modal{
        position: fixed;
        max-width: 1000px;
        max-height: 100vh;
        bottom: 0rem;
        top: 0;
        padding: 1rem;
        overflow: auto;
        /* z-index: 100; */
    }
    .modal-content{
        max-height: 100%;
        padding: 2rem 2rem 2rem 2rem;    
        color: black;    
        background-color: rgba(255, 255, 255, 0.85);
        border-radius: 5px;
        overflow: auto;
    }
    .modal-content button{
        min-width: 10em;
        margin-top: 1rem;
        margin-left: 50%;
        transform: translateX(-50%);
        border: none;
        background-color: #297aa3;
        /* cursor: pointer; */
        padding: 1rem;
        border-radius: 5px;
        color: white;
        font-family: inherit;
        font-size: inherit;
        /* font-weight: bold; */
    }
</style>