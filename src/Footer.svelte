<script>

    export let changeModal

</script>

<footer>
    <p>
        <a href="mailto:buscadorempleoweb@gmail.com">contacto</a>
    </p>
    <p class="link" on:click={() => changeModal('legal')}>aviso legal</p>
    <p class="link" on:click={() => changeModal('privacity')}>política de privacidad</p>
    <p class="link" on:click={() => changeModal('cookies')}>uso de cookies</p>

    <!-- {#if isModal}
        <Modal modal={isModal} {changeModal} />
    {/if} -->
</footer>

<style>
    footer{
        position: relative;
        /* margin-top: 1rem; */
        background-color: hsla(0, 0%, 100%, 0.15);
        border-top: 2px solid #ccc;
        height: 5rem; 
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }
    footer p:not(:nth-of-type(1))::before{
        content: '|';
        margin: 0 1rem;
    }

    @media (max-width: 500px){
        footer{
            height: auto;
            flex-direction: column;
        }
        footer p:not(:nth-of-type(1))::before{
            content: '';
            margin: 0;
            padding: 0;
        }
    }
</style>