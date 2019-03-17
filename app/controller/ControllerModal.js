import ModalTemplate from '../view/ModalTemplate.js'
import Cd from '../model/Cd.js';
import View from '../view/View.js'
import Model from '../model/Model.js'
import Modal from '../model/Modal.js'

class ControllerModal{
    static openModal(id){
        
        const data=Modal.getData()[id-1];
        
        const cd = new Cd();
        cd.populateCd(data);
        const modal = new Modal(cd);
        const view = new View(modal);
        
        view.fillTemplateOf(modal);
        view.showElement(view.html,'.cd-list');
        
    }

    static closeModal(e){
        if (e.target.classList.contains('modal-x')) {
            e.target.parentElement.parentElement.remove();
        }

    }
}

export default ControllerModal