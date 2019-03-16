import viewCd from './viewCd.js'
class View{
    constructor(){
        // this.cdList=document.querySelector('.cd-list');
    }
    create(element){
        if(element.type=="cd"){
         let cdTemplate=viewCd(element);
         console.log(cdTemplate);
         return cdTemplate;
        }
    }
    showElement(template) {
    const div = document.createElement('div');
    const tbody = document.querySelector('.cd-list');
    div.innerHTML = template;
    tbody.appendChild(div);
}
}
export default View