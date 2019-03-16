import ModalTemplate from '../view/ModalTemplate.js'
import Cd from '../model/Cd.js';
import View from '../view/View.js'
import Model from '../model/Model.js'
import Modal from '../model/Modal.js'

class ControllerModal{
    static openModal(){
        const data=Modal.getData()[2];
        
        const cd = new Cd();
        cd.populateCd(data);
        const modal = new Modal(cd);
        const view = new View(modal);
        
        view.fillTemplateOf(modal,"modal");
        view.showElement(view.html,'.cd-list');
        console.log(view );
    }
}

export default ControllerModal