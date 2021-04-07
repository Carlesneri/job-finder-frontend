<script>  
  import Header from './partials/Header.svelte'
  import Footer from './Footer.svelte'
  import Modal from './Modal.svelte'

  let modal = false

  let modalJob = null

  function changeModal(_modal, job){
    modal = _modal
    modalJob = job
  }
</script>

<div class="layout">
  <Header />
    
  <slot class="main" {changeModal}></slot> 

  <Footer {changeModal}/>

  {#if modal}
    <Modal {modal} {changeModal} {modalJob} />
  {/if}

</div>

<style>
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .main {
    flex-grow: 1;
  }
</style>