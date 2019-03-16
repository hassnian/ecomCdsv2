 import Model from './Model.js'

 class Cd extends Model{
    constructor(name,artist,desc,url,price,id){
        super();
        this.type="cd";
        this.name = name;
        this.artist = artist;
        this.desc = desc;
        this.url = url;
        this.price = price;
        this.id = id;
        this.inCart=false;
        

    }
    inCart(value){
        this.inCart=value;
    }
    populateCd(cd){
        this.name = cd.name;
        this.artist = cd.artist;
        this.desc = cd.desc;
        this.url = cd.url;
        this.price = cd.price;
        this.id = cd.id;        
    }
    
    static saveCd(){
        
    }

   
}
export default Cd