import ControllerModal from './ControllerModal.js'
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
            console.log("you clicked in a cd")
            ControllerModal.openModal(id);
            return "cd";
        }
        else if (classList.contains("modal-x")){
            console.log("you clicked in a modal x ")
            ControllerModal.closeModal(e);
            return "modal-x-cd";
        }
        else if (classList.contains("carrito")||classList.contains("carrito-icon")){
            console.log("click en carrito");
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