import cdTemplate from './cdTemplate.js'
import ModalTemplate from './ModalTemplate.js'

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
    }


    showElement(template, target) {
        const div = document.createElement('div');
        const tbody = document.querySelector(target);
        div.innerHTML = template;
        tbody.appendChild(div);
    }
}
export default View