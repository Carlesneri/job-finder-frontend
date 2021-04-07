<script>
    // import '../firebase'
    import jobsDB from '../firebase.js'


    let provincia = ''
    let email = ''
    let message = ''

    const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    function sendForm(event) {
        event.preventDefault()
        
        if(provincia && email) {
            if(emailRegExp.test(email)) {
                // console.log({provincia, email})
                jobsDB.collection('newsletter')
                .add({provincia, email})
                .then(res => {
                    // console.log(res)
                    message = `Gracias por inscribirte, ${email}`
                    provincia = ''
                    email = ''
                })
                .catch(err => {
                    console.error(err)
                    message = 'Error al enviar'
                })
            }else {
                message = 'Email no válido'
            }
        } else {
            message = 'Debes rellenar todos los campos'
        }
    }

</script>

<div class="form">
    <h4>
        Recibe nuestras ofertas todos los dias
    </h4>
    <p>
        Si quieres que te enviemos un email con las últimas ofertas de tu ciudad rellena y envía el formulario
    </p>
    <select name="provincia" size="1" bind:value={provincia}>
        <option value=''>Selecciona la provincia</option>
        <option value='A Coruña' >A Coruña</option>
        <option value='Álava'>Álava</option>
        <option value='Albacete' >Albacete</option>
        <option value='Alicante'>Alicante</option>
        <option value='Almería' >Almería</option>
        <option value='Asturias' >Asturias</option>
        <option value='Ávila' >Ávila</option>
        <option value='Badajoz' >Badajoz</option>
        <option value='Barcelona'>Barcelona</option>
        <option value='Burgos' >Burgos</option>
        <option value='Cáceres' >Cáceres</option>
        <option value='Cádiz' >Cádiz</option>
        <option value='Cantabria' >Cantabria</option>
        <option value='Castellón' >Castellón</option>
        <option value='Ceuta' >Ceuta</option>
        <option value='Ciudad Real' >Ciudad Real</option>
        <option value='Córdoba' >Córdoba</option>
        <option value='Cuenca' >Cuenca</option>
        <option value='Gerona' >Gerona</option>
        <option value='Girona' >Girona</option>
        <option value='Las Palmas' >Las Palmas</option>
        <option value='Granada' >Granada</option>
        <option value='Guadalajara' >Guadalajara</option>
        <option value='Guipúzcoa' >Guipúzcoa</option>
        <option value='Huelva' >Huelva</option>
        <option value='Huesca' >Huesca</option>
        <option value='Jaén' >Jaén</option>
        <option value='La Rioja' >La Rioja</option>
        <option value='León' >León</option>
        <option value='Lleida' >Lleida</option>
        <option value='Lugo' >Lugo</option>
        <option value='Madrid' >Madrid</option>
        <option value='Malaga' >Málaga</option>
        <option value='Mallorca' >Mallorca</option>
        <option value='Melilla' >Melilla</option>
        <option value='Murcia' >Murcia</option>
        <option value='Navarra' >Navarra</option>
        <option value='Orense' >Orense</option>
        <option value='Palencia' >Palencia</option>
        <option value='Pontevedra'>Pontevedra</option>
        <option value='Salamanca'>Salamanca</option>
        <option value='Segovia' >Segovia</option>
        <option value='Sevilla' >Sevilla</option>
        <option value='Soria' >Soria</option>
        <option value='Tarragona' >Tarragona</option>
        <option value='Tenerife' >Tenerife</option>
        <option value='Teruel' >Teruel</option>
        <option value='Toledo' >Toledo</option>
        <option value='Valencia' >Valencia</option>
        <option value='Valladolid' >Valladolid</option>
        <option value='Vizcaya' >Vizcaya</option>
        <option value='Zamora' >Zamora</option>
        <option value='Zaragoza'>Zaragoza</option>
      </select>
      <input type="email" bind:value={email} placeholder="Email" >
      <button on:click="{sendForm}">
          Enviar
      </button>
      <div class="message">
          {message}
      </div>
</div>

<style>
    .form{
        align-items: center;
        display: flex;
        flex-direction: column;
        max-width: 500px;
        margin: 2rem auto;
    }
    .form h4{
        font-size: 1.5rem;
        font-weight: lighter;
        margin: .5rem 0;
    }
    .form p{
        text-align: center;
        margin-bottom: 1rem;
    }
    select{
        width: 300px;
    }
    input{
        width: 300px;
    }
    button{
        align-self: center;
        margin: 1rem;
        padding: 1rem;
        cursor: pointer;
        /* color: var(--red); */
        font-size: 1.2rem;
        transition: all .3s ease;
        /* box-shadow: 0 0 3px 0px var(--red); */
        width: 250px;
    }
    button:hover{
        box-shadow: 0 0 10px var(--green);
        color: var(--green);
    }
    .message {
        text-align: center;
    }
</style>