const cartBarItemTemplate = (item) => `
 <div class="cart-bar-item" data.id="${item.id} " >
    <img src="${item.url}" alt="" class="cart-bar-img">
    <h2 class="cart-bar-title">${item.name}</h2>
    <span class="cart-bar-artist"> by ${item.artist}</span>
    <span class="cart-bar-price">${item.price}$</span>
    <button  class="cart-bar-remove btn btn-outline-danger btn-sm remove" data-cartid="${item.id}" >Remove</button>
</div>
    `;
    



export default cartBarItemTemplate