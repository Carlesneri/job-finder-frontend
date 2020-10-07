<script>
    import AvisoLegal from './AvisoLegal.svelte'
    import Privacity from './Privacity.svelte'
    import Cookies from './Cookies.svelte'
    import { scale } from 'svelte/transition'
    
    export let modal, changeModal

        
</script>

<div class="modal" transition:scale>
    <div class="modal-content">
        {#if modal === 'legal'}
            <AvisoLegal {changeModal}/>
        {:else if  modal === 'privacity'}
            <Privacity />
        {:else if  modal === 'cookies'}
            <Cookies />
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
        min-width: 80%;
        min-height: 80%;
        bottom: 0;
        top: 0;
        border-radius: 5px;
        margin: 2rem;
        overflow: auto;
    }
    .modal-content{
        min-width: 70%;
        min-height: 70%;
        padding: 2rem;    
        color: black;    
        background-color: rgba(255, 255, 255, 0.9);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .modal-content button{
        min-width:  5rem;
        margin-top: 1rem;
        margin-left: 50%;
        transform: translateX(-50%);
        border: none;
        background-color: #297aa3;
        padding: 1rem;
        border-radius: 5px;
        color: white;
        font-family: inherit;
        font-size: inherit;
    }
</style>