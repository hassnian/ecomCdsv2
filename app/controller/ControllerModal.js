import ModalTemplate from '../view/ModalTemplate.js'
import Cd from '../model/Cd.js';
import View from '../view/View.js'
import Model from '../model/Model.js'
import Modal from '../model/Modal.js'
import Toast from '../model/Toast.js'
import LocalStorage from './LocalStorage.js'

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
        if (LocalStorage.checkIfItsAlreadyStored(e)) {
            this.toastNotification('already');
            return
        }
        this.toastNotification('add');
        LocalStorage.storeInLocal(e);
        this.deleteModal(e);
        this.clearToast();
    }
    static toastNotification(type){
        let text;

        //TODO: i have refactor this 
        if(type=="add"){
            text="Item added to the cart"
        }
        else if(type=="del"){
            text="Item removed"
        }else if(type=="already"){
            text="Already in cart!"

        }
        const toast=new Toast(text);
        const view =new View(toast);
        view.fillTemplateOf(toast);
        view.showElement(view.html,'.tost-container')

    }
    static clearToast(){
        const toastContainer=document.querySelector('.tost-container');
        setTimeout(function(){ toastContainer.removeChild(toastContainer.firstChild) }, 2000);
    }

   
}

export default ControllerModal