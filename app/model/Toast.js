
import Model from './Model.js'
class Toast extends Model {
    constructor(element) {
        super();
        this.name = element.name;
        this.artist = element.artist;
        this.desc = element.desc;
        this.url = element.url;
        this.price = element.price;
        this.id = element.id;
        this.type = "toastNotificarion";
        

    }
    

}
export default Toast