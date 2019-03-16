 import viewCd from '../view/viewCd.js'
 import Model from './Model.js'

 class Cd extends Model{
    constructor(name,artist,description,url,price,id){
        super();
        this.type="cd";
        this.name = name;
        this.artist = artist;
        this.desc = description;
        this.url = url;
        this.price = price;
        this.id = id;
        this.inCart=false;
        

    }
    inCart(value){
        this.inCart=value;
    }

    
    static saveCd(){

    }

    static loadCds(cd) {

     

    }

}
export default Cd