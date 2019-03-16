import Cd from '../model/Cd.js';
import View from '../view/View.js'
class ControllerCd {

    static index() {
        const cd = new Cd("cd1", "juan magan", "lorem", "http://images.coveralia.com/audio/s/Secreto_El_Famoso_Biberon-No_Me_Importa_Que_Hablen_(CD_Single)-Frontal.jpg", 22,1);
        console.log(cd);
        const view = new View();
        let template=view.create(cd);
        view.showElement(template);

    }
}
export default ControllerCd