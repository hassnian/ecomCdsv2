import Cd from '../model/Cd.js';
import View from '../view/View.js'
import Model from '../model/Model.js'

class ControllerCd {

    static index() {
       

    }
   
    static loadAllCds() {
        const data=Model.getData();
        data.forEach(cdInArray=>{
            const cd = new Cd();
            cd.populateCd(cdInArray)
            console.log(cdInArray);
            const view = new View(cd);
            view.fillTemplateOf(cd);
            view.showElement(view.html,'.cd-list');
        })
     

    }

}
export default ControllerCd