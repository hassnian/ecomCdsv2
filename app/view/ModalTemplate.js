const ModalTemplate = (cd) =>`
<div class="modal-g ">
    <div class="modal-c">
        <span class="modal-x ">X</span>
            <img src="${cd.url}" alt="" class="modal-i">
            <h2 class="modal-t">${cd.name}</h2>
            <h3 class="">by ${cd.artist}</h3>
            <p class="modal-d">${cd.desc}</p>
        <span>Price:${cd.price}</span>
        <a href="#" class="btn btn-outline-primary modal-btn">Add to cart</a>
    </div>
</div>`


export default ModalTemplate