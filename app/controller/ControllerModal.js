import ModalTemplate from '../view/ModalTemplate.js'
import Cd from '../model/Cd.js';
import View from '../view/View.js'
import Model from '../model/Model.js'
import Modal from '../model/Modal.js'
import Toast from '../model/Toast.js'


class ControllerModal {
    static openModal(id) {
        const data = Modal.getData()[id - 1];
        const cd = new Cd();
        cd.populateCd(data);
        const modal = new Modal(cd);
        const view = new View(modal);

        view.fillTemplateOf(modal);
        view.showElement(view.html, '.cd-list');

    }
    static deleteModal(e) {
        e.target.parentElement.parentElement.remove()
    }
    static closeModal(e) {
        if (e.target.classList.contains('modal-x')) {
            this.deleteModal(e);
        }

    }
    static addToCart(e) {
        this.toastNotification('del');
        this.storeInLocal(e);
        this.deleteModal(e);

    }
    
    static toastNotification(type){
        let text;
        if(type=="add"){
            text="Item added to the cart"
        }
        else if(type=="del"){
            text="Item removed"
        }

        const toast=new Toast(text);
        const view =new View(toast);
        view.fillTemplateOf(toast);
        view.showElement(view.html,'.tost-container')
        
        
    }
    static clearToast(){
        const toastContainer=document.querySelector()
    }

    static storeInLocal(e){
        const id=e.target.dataset.id;
        const cds=Model.getData();
        let cartArr=JSON.parse(window.localStorage.getItem('cartArr'));
        
            cds.forEach((e, index) => {
                if (e.id == id) {
                    let currentCd = cds[index];
                    if(cartArr==null){
                        cartArr=[];
                    }
                    cartArr.push(currentCd);
                    window.localStorage.setItem('cartArr', JSON.stringify(cartArr));
                }
            })
    }
}

export default ControllerModal