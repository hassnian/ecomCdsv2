import Model from './Model.js'
class cartBar extends Model {
    constructor() {
        super();
        this.type = "cartbar";
        this.items = [];
        this.total = 0
    }
 

}


export default cartBar