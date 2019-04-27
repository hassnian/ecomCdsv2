import cdTemplate from './cdTemplate.js'
import ModalTemplate from './ModalTemplate.js'
import cartBarTemplate from './cartBarTemplate.js'
import cartBarItemTemplate from './cartBarItemTemplate.js'
import ToastTemplate from './toastNotificarion.js'

class View {
    constructor(element) {
        this.type = element.type;
        //this.target=
           
        
        
        // this.cdList=document.querySelector('.cd-list');
    }


    fillTemplateOf(element) {
        
        if (element.type == "cd") {
            //let cdTemplateWithCd = cdTemplate(element);
            this.html = cdTemplate(element);           
        } else if (element.type == "modal") {
            //let ModalTemplateWithCd = ModalTemplate(element);
            this.html = ModalTemplate(element);
        }
        else if(element.type == "cartbar"){
            this.html = cartBarTemplate(element);
        }
        else if(element.type == "cartbaritem"){
            this.html = cartBarItemTemplate(element);
        }else if(element.type == "toast"){
            this.html = ToastTemplate(element);
        }

        
    }


    showElement(template, target) {
        const div = document.createElement('div');
        const tbody = document.querySelector(target);
        div.innerHTML = template;
        console.log(div);
        tbody.appendChild(div);
    }
}
export default View