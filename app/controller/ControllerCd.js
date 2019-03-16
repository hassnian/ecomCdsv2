import Cd from '../model/Cd.js';
import View from '../view/View.js'
import Model from '../model/Model.js'

class ControllerCd {

    static index() {
       

    }
    static changeBackground(){
        document.addEventListener("mouseover",(e)=>{
            if(e.target.classList.contains('cd-text')){
                   const fondo=document.querySelector('.fondo');
                   fondo.style.backgroundImage=e.target.parentElement.style.backgroundImage;
        
                
            }
        }) 
        
    }
    static loadAllCds() {
        const data=Model.getData();
        data.forEach(cdInArray=>{
            const cd = new Cd();
            cd.populateCd(cdInArray)
            console.log(cdInArray);
            const view = new View(cd);
            view.fillTemplateOf(cd,"cd");
            view.showElement(view.html,'.cd-list');
        })
     

    }

}
export default ControllerCd