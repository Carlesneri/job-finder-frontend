<script>
    export let modal

    import modalContents from './modalContents'

    console.log(modalContents)
    
    const modalContent = modalContents[modal]

    // modal = false

        
</script>

<div class="modal">
    <div class="modal-content">
        <h2>
            {modalContent.title}
        </h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa mollitia corporis dolore voluptatibus quis error, ducimus, quod veritatis eligendi in doloremque cupiditate tenetur aliquam ab sapiente alias sunt quae exercitationem repellat harum sequi. Quaerat optio veritatis, ex enim natus dolor. Ex sunt voluptatum enim accusantium fuga ducimus similique quas vitae, distinctio modi dolore eum impedit totam perferendis placeat voluptates! Ipsum ipsam natus sapiente minus impedit reiciendis provident facere repudiandae debitis itaque quasi magni perspiciatis quae nesciunt magnam accusamus non veniam vel totam, quam fuga! Expedita nisi distinctio unde illo beatae rerum exercitationem temporibus ducimus maiores, sapiente modi, voluptatibus repudiandae id commodi reprehenderit dolorum omnis doloribus incidunt a esse recusandae tempore necessitatibus error quas. Sit odit nulla eaque placeat, cum quaerat quam rerum voluptate est deleniti officiis facere maxime quasi tempore optio suscipit fugiat corporis doloremque. Debitis consequatur sint labore earum eaque eos delectus minus facilis molestiae nemo quas commodi vel id alias, quaerat accusamus atque recusandae nulla deleniti libero incidunt aliquam. Eligendi neque accusamus rem expedita adipisci doloremque voluptate natus eaque, consectetur aspernatur et! Inventore quaerat fuga incidunt quis dicta dolorum nemo, cum aperiam sapiente reiciendis. Laborum, nihil perspiciatis. Harum, neque voluptatem animi quia, voluptatibus facere, dolorem iure cum quaerat exercitationem error enim. Deserunt, a? Officiis, unde mollitia maiores necessitatibus, iure delectus facilis nihil quibusdam possimus, rem fugiat! Delectus maxime laboriosam minima perspiciatis aliquid nesciunt porro ut voluptates magni necessitatibus! Harum in tenetur ab non mollitia quasi! Fuga nobis facere, aliquam veniam, neque expedita fugiat dolorem quidem a quis nesciunt!
    </div>
</div>

<style>
    .modal{
        position: fixed;
        max-width: 1000px;
        max-height: 90vh;
        bottom: 0rem;
        padding: 1rem;
    }
    .modal-content{
        padding: 2rem;    
        color: black;    
        background-color: rgba(255, 255, 255, 0.75);
        border-radius: 5px;
    }
</style>