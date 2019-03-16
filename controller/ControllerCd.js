import Cd from '../model/Cd.js';
class ControllerCd {
    constructor(){
        
    }
    static index() {
        const cd = new Cd("cd1", "juan magan", "lorem", "http://images.coveralia.com/audio/s/Secreto_El_Famoso_Biberon-No_Me_Importa_Que_Hablen_(CD_Single)-Frontal.jpg", 22,1);
        Cd.loadCds(cd);
        console.log(cd);
    }
}
export default ControllerCd