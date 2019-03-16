import cdTemplate from './cdTemplate.js'
import ModalTemplate from './ModalTemplate.js'

class View{
    constructor(element){
        this.type=element;
        // this.cdList=document.querySelector('.cd-list');
    }


    fillTemplateOf(element,type){
        if(type=="cd"){
         let cdTemplateWithCd=cdTemplate(element);
         this.html= cdTemplateWithCd;
        }
        else if (type=="modal"){
         let ModalTemplateWithCd=ModalTemplate(element);
         this.html= ModalTemplateWithCd;
        }
    }


    showElement(template , target) {
    const div = document.createElement('div');
    const tbody = document.querySelector(target);
    div.innerHTML = template;
    tbody.appendChild(div);
}
}
export default View