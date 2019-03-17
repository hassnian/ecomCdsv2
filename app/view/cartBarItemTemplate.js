const cartBarItemTemplate = (e) => `
 <div class="cart-bar-item">
    <img src="${e.url}" alt="" class="cart-bar-img">
    <h2 class="cart-bar-title">${e.name}</h2>
    <span class="cart-bar-artist"> by ${e.artist}</span>
    <span class="cart-bar-price">${e.price}$</span>
    <a href="#" class="cart-bar-remove btn btn-outline-danger btn-sm">Remove</a>
</div>
    `;
    



export default cartBarItemTemplate