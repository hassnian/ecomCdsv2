import Model from "./Model.js"

class Modal extends Model{
    constructor(element){
        super();
        this.type="modal";
        this.name = element.name;
        this.artist = element.artist;
        this.desc = element.desc;
        this.url = element.url;
        this.price = element.price;
        this.id = element.id;        
    }

  
}


export default Modal