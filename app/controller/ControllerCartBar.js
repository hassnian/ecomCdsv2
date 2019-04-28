import ModalTemplate from '../view/ModalTemplate.js'
import Cd from '../model/Cd.js';
import View from '../view/View.js'
import Model from '../model/Model.js'
import Modal from '../model/Modal.js'
import cartBar from '../model/cartBar.js'
import cartBarItem from "../model/cartBarItem.js"
import LocalStorage from './LocalStorage.js'
import ControllerModal from './ControllerModal.js';

class ControllerCartBar {

    static createCartBar(){

        const cartbar = new cartBar();
        const view = new View(cartBar);
        
        view.fillTemplateOf(cartbar);
  
        view.showElement(view.html,'.cd-list');
        this.createCartBarItems();
    }
    static createCartBarItems(){
        const data=Modal.getLocalStorage();
        data.forEach((currenCd,index) => {
            console.log(currenCd);
            const cd = new Cd();
            cd.populateCd(currenCd);
            const cartbaritem = new cartBarItem(cd);
            const view = new View(cartbaritem);
            view.fillTemplateOf(cartbaritem);
            view.showElement(view.html,'.cart-bar-body');
        });
       
    }

    static removeCartBarItem(e){
        LocalStorage.deleteFromLocalStorage(e);
        ControllerModal.toastNotification('del');
        e.target.parentElement.remove();
        console.log(e.target.dataset.cartid);

    }
}
export default ControllerCartBar