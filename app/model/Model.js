
import data from '../data/data.js'
class Model{
    
    static getData(){
        const cds = data;
        return cds
    }
    
    static getLocalStorage(){
        console.log("asd");
        const cartArr = JSON.parse(window.localStorage.getItem('cartArr'));
        return cartArr;
    }
    //static findById
}

export default Model