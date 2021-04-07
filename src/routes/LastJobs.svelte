<script>
  import Layout from '../Layout.svelte'
  import Job from '../Job.svelte'
  // import '../firebase'
  import jobsDB from '../firebase'

  const RESULTS_PER_PAGE = 18

  let jobs = []

  let filteredJobs = jobs

  let pages = 1

  let jobsToShow

  let errorMessage

  export let search = ''

  jobsDB
    .collection('jobs')
    .limit(333)
    .get()
    .then((querysnapshot) => {
      // error && console.error(error)
      // console.log(`${querysnapshot.docs.length} jobs obtained`)

      let newJobs = []
      querysnapshot.forEach((doc) => {
        newJobs.push(doc.data())
      })
      jobs = newJobs
      jobs.sort((a, b) => b.createdAt - a.createdAt)

      filteredJobs = jobs

      // if(search.trim() === '')
      filtrarResultados(search.trim())

      jobsToShow = filteredJobs.slice(0, RESULTS_PER_PAGE * pages)
    })
    .catch((err) => {
      errorMessage = 'No podemos mostrar las ofertas en este momento'
      console.error(`Encountered error: ${err}`)
    })

  
    function filtrarResultados(searchItem) {
    searchItem = searchItem.trim()
    // console.log('search', search)

    filteredJobs = jobs
    pages = 1

    if (searchItem !== '') {
      const titleFilteredJobs = filteredJobs.filter((job) =>
        job.title.toLowerCase().includes(searchItem)
      )
      // console.log('titleFilteredJobs.length', titleFilteredJobs.length);

      const companyFilteredJobs = filteredJobs.filter((job) =>
        job.company.toLowerCase().includes(searchItem)
      )
      // console.log('companyFilteredJobs.length', companyFilteredJobs.length);

      const locationFilteredJobs = filteredJobs.filter((job) =>
        job.location.toLowerCase().includes(searchItem)
      )
      // console.log('locationFilteredJobs.length', locationFilteredJobs.length);

      if (titleFilteredJobs.length >= companyFilteredJobs.length) {
        if (titleFilteredJobs.length >= locationFilteredJobs.length) {
          filteredJobs = titleFilteredJobs
        } else {
          filteredJobs = locationFilteredJobs
        }
      } else if (companyFilteredJobs.length >= locationFilteredJobs.length) {
        filteredJobs = companyFilteredJobs
      } else {
        filteredJobs = locationFilteredJobs
      }
    }

    // console.log('filteredJobs.length', filteredJobs.length);

    filteredJobs.sort((a, b) => b.createdAt - a.createdAt)

    jobsToShow = filteredJobs.slice(0, RESULTS_PER_PAGE * pages)
  }

  function handleClickMoreJobs() {
    pages++

    jobsToShow = filteredJobs.slice(0, RESULTS_PER_PAGE * pages)
  }
</script>

<Layout let:changeModal >
  <main>
    <div class="search">
      <h1>Portal dedicado a mostrar ofertas de trabajo en España.</h1>
      <h2>
        Localiza las ofertas que más te interesan filtrando por puesto, compañía o
        localidad.
      </h2>
      <input
        type="text"
        placeholder='Filtrar resultados. Ej: "sevilla", "jardinero", "amazon", ...'
        bind:value={search}
        on:input={filtrarResultados(search)}
      />
      <div class="num-results">
        {#if search.trim() !== '' && filteredJobs.length > 1}
          {filteredJobs.length} ofertas encontradas
        {:else if filteredJobs.length === 1}
          1 oferta encontrada
        {/if}
      </div>
    </div>

    <div class="jobs">
      {#if jobsToShow}
        {#if jobsToShow.length}
          {#each jobsToShow as job}
            <Job {job} {changeModal}/>
          {/each}
        {:else}
          <h4 class="loading">No existen ofertas con estas características.</h4>
        {/if}
      {:else if errorMessage}
        <h4 class="loading">{errorMessage}</h4>
      {:else}
        <h4 class="loading">Cargando ofertas de trabajo...</h4>
      {/if}
    </div>

    {#if jobsToShow && jobsToShow.length && jobsToShow.length % RESULTS_PER_PAGE === 0}
      <div class="more-jobs link" on:click={handleClickMoreJobs}>
        mostrar más<span>&#8595</span>
      </div>
    {/if}
  </main>
</Layout>

<style>
  .search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    max-width: 500px;
  }
  .search h1 {
    font-size: 1.5em;
  }
  .search h2 {
    font-size: 1.2em;
  }
  .search input {
    padding: 0.7rem;
    margin-bottom: 1rem;
    border: none;
    outline: none;
    font-size: 1.1em;
  }
  .loading {
    margin: 2rem;
  }
  .num-results {
    margin-bottom: 1rem;
  }
  main {
    max-width: 1000px;
    padding: 0 1rem;
    min-height: calc(100vh - 11rem);
    margin: 0 auto;
  }
  main .jobs {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-wrap: wrap;
  }
  .more-jobs {
    cursor: pointer;
    border: 2px solid white;
    border-radius: 5px;
    width: fit-content;
    display: flex;
    justify-content: center;
    padding: 1rem;
    margin: 0.5rem auto;
  }
  .more-jobs span {
    margin-left: 0.5rem;
  }
  .more-jobs:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
</style>
