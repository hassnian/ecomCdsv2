import ControllerModal from './ControllerModal.js'
import ControllerCartBar from './ControllerCartBar.js'

class eventController{
    static clickOn(){
        document.addEventListener('click', (e) => {
            
            this.whatImClickingOn(e);
            // ControllerModal.showModal(e);
          
            // // UI.showCartBar(e);
            // UI.updateCart(e);

            // Store.removeCdBar(e);
            // Store.addToCart(e);
        
            //add btn !!
        });
        
    }
    static whatImClickingOn(e){
        const {classList,id}=e.target;
        if(classList.contains("cd-text")){
            ControllerModal.openModal(id);
            console.log("you clicked in a cd")
            return "cd";
        }
        else if (classList.contains("modal-x")){
            ControllerModal.closeModal(e);
            console.log("you clicked in a modal x ")
            return "modal-x-cd";
        }
        else if (classList.contains("carrito")||classList.contains("carrito-icon")){
            ControllerCartBar.createCartBar();
            console.log("click en carrito");
        }else if ( classList.contains('modal-btn')){
            ControllerModal.addToCart(e);
            // getLocalStorage
            //
            console.log("añadir al carrito bro");
        }
       
       
        
    }

    static changeBackground(){
        document.addEventListener("mouseover",(e)=>{
            if(e.target.classList.contains('cd-text')){
                   const fondo=document.querySelector('.fondo');
                   fondo.style.backgroundImage=e.target.parentElement.style.backgroundImage;
            }
        }) 
        
    }
}
export default eventController 