import cartBarItemTemplate from "../view/cartBarItemTemplate.js";
import Model from './Model.js'
class cartBarItem extends Model {
    constructor(element) {
        super();
        this.name = element.name;
        this.artist = element.artist;
        this.desc = element.desc;
        this.url = element.url;
        this.price = element.price;
        this.id = element.id;
        this.inCart=true;
        this.type = "cartbaritem";
 
    }
    

}
export default cartBarItem