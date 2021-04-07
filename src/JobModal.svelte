<script>
  export let job

  console.log(job)

  const hoursAgo = Math.floor((Date.now() - job.createdAt) / (1000 * 60 * 60))
  const daysAgo = Math.floor(hoursAgo / 24)
</script>

<div class="card">
  <div class="card-title">
    <h2>
      <a class="dark-link" href={job.link} target="_blank" rel="noopener noreferer nofollow" title="ver en {job.source}">
        {job.title}
        <span> <small>&#10138;</small></span>
      </a>
    </h2>
    {#if job.company}
      <h3>
        Ofrecido por: {job.company}
      </h3>
    {/if}
    <h4>
      Ubicación: {job.location}
    </h4>
    <h5>
      {job.requirements}
    </h5>
    <h5>
      {job.contract}
    </h5>
    <h5>
      {job.workday}
    </h5>
    <h5>
      {job.salary}
    </h5>
  </div>
  <div class="card-body">
    {#if job.description}
      <p>
        {job.description}
      </p>
    {/if}
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
      {:else if daysAgo < 2}
        Desde ayer
      {:else}
        Desde hace {daysAgo} días
      {/if}
    </small>
    &bull;
    <small>
      fuente: {job.source}
    </small>
  </div>
</div>

<style>
  .card{
    text-align: center;
    font-size: 1.2em;
  }
  .card-body {
    text-align: left;
    margin: 1rem 0;
  }
  .card-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>