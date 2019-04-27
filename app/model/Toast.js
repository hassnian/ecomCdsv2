
import Model from './Model.js'
class Toast extends Model {
    constructor(content) {
        super();
        this.type = "toast";
        this.content=content;
        
    }
    //Use all the  this to create a toast with info of tyhe deleted or added cd 
    /**
     *      this.name = element.name;
            this.artist = element.artist;
            this.desc = element.desc;
            this.url = element.url;
            this.price = element.price;
            this.id = element.id;
     * 
     */
    

}
export default Toast