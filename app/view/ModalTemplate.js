const ModalTemplate = (cd) =>`
<div class="modal-g " >
    <div class="modal-c">
        <span class="modal-x" >X</span>
            <img src="${cd.url}" alt="" class="modal-i">
            <h2 class="modal-t">${cd.name}</h2>
            <h3 class="">by ${cd.artist}</h3>
            <p class="modal-d">${cd.desc}</p>
        <span>Price:${cd.price}</span>
        <button href="#"  class="btn btn-outline-primary modal-btn" data-id="${cd.id}"\>Add to cart</button>
    </div>
</div>`


export default ModalTemplate