import ModalTemplate from '../view/ModalTemplate.js'
import Cd from '../model/Cd.js';
import View from '../view/View.js'
import Model from '../model/Model.js'


class LocalStorage {

    static storeInLocal(e) {
      
            const id = e.target.dataset.id;
            const cds = Model.getData();
            let cartArr = JSON.parse(window.localStorage.getItem('cartArr'));

            cds.forEach((e, index) => {
                if (e.id == id) {
                    let currentCd = cds[index];
                    if (cartArr == null) {
                        cartArr = [];
                    }
                    cartArr.push(currentCd);
                    window.localStorage.setItem('cartArr', JSON.stringify(cartArr));
                }
            })
        

    }

    static deleteFromLocalStorage(e) {
        const cdId = e.target.dataset.cartid;
        const locStorCdArr = JSON.parse(window.localStorage.getItem('cartArr'));
        locStorCdArr.forEach((e, index) => {
            if (cdId == e.id) {
                locStorCdArr.splice(index, 1);
                window.localStorage.setItem('cartArr', JSON.stringify(locStorCdArr));
            }
        })
    }

    static checkIfItsAlreadyStored(e) {
        const CdId = e.target.dataset.id;
        const locStorCdArr = JSON.parse(window.localStorage.getItem('cartArr'));
        if(locStorCdArr!==null){
            for (let i = 0; i < locStorCdArr.length; i++) {
                if (CdId == locStorCdArr[i].id) {
                    return true
                }
            }
            return false
        }



    }

}

export default LocalStorage