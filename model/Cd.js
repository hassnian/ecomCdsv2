 class Cd {
    constructor(name,artist,description,url,price,id){
        this.name = name;
        this.artist = artist;
        this.desc = description;
        this.url = url;
        this.price = price;
        this.id = id;

    }
    static saveCd(){

    }

    static loadCds(cd) {

        
            const tbody = document.querySelector('.cd-list');
            const div = document.createElement('div');
            div.classList.add('cd');
            div.classList.add('mr-2');
            div.classList.add('mb-2');

            div.innerHTML = `
            <div style='background-image:url("${cd.url}")' class='caratula-img' id='${cd.id}'>
            <span class="cd-text">MORE INFO</span></div>`;
            tbody.appendChild(div);

        

    }

}
export default Cd