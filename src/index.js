import createItem from './services/item.js';
import * as cartService from './services/cart.js';


const myCart = [];
const myWishList = []

console.log('Welcome to the your Shopp Cart!');

const item1 = await createItem('Coca-Cola', 20.99, 1);
const item2 = await createItem('Fanta Uva', 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// await cartService.deleteItem(myCart, 'Fanta Uva');
// await cartService.deleteItem(myCart, 'Coca-Cola');
await cartService.removeItem(myCart, item2);
// await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);

