import createItem from './services/item.js';
import * as cartService from './services/cart.js';
import readline from 'readline-sync';


const myCart = [];
const myWishList = [];

// console.log('Welcome to the your Shopp Cart!');

async function addItemToCart() {
  console.log('Product Registration:');
  const productName = readline.question('product name: ');
  const productPrice = readline.questionFloat('product price: ');
  const productQuantity = readline.questionInt('product quantity: ');
  
  const item = await createItem(productName, productPrice, productQuantity);
  await cartService.addItem(myCart, item);
}

async function deleteItemFromCart() {
  await cartService.displayCart(myCart);
  const productIndex = readline.question('\r\nproduct index: ');
  await cartService.deleteItemByIndex(myCart, productIndex);
}

async function displayViewCart() {
  await cartService.displayCart(myCart);
  await cartService.calculateTotal(myCart);
}

// const item1 = await createItem('Coca-Cola', 20.99, 1);
// const item2 = await createItem('Fanta Uva', 39.99, 3);

// await cartService.addItem(myCart, item1);
// await cartService.addItem(myCart, item2);

// await cartService.deleteItem(myCart, 'Fanta Uva');
// await cartService.deleteItem(myCart, 'Coca-Cola');
// await cartService.removeItem(myCart, item2);
// await cartService.removeItem(myCart, item2);

// await cartService.displayCart(myCart);
// await cartService.calculateTotal(myCart);

async function menu() {
  console.clear();
  console.log('Welcome to the your Shopp Cart!');
  console.log('+---------------- Menu ----------------+');
  console.log('|    1 - Add item to cart              |');
  console.log('|    2 - Delete item to cart           |');
  console.log('|    3 - Show cart                     |');
  console.log('|    0 - Finalizar compra              |');
  console.log('+--------------------------------------+');
  const option = readline.questionInt('Choose an option: ');
  return option;
}

let option = await menu();

while (true)
{
  switch (option) {
    case 1: 
      console.clear();
      await addItemToCart();
      option = await menu();
      break;
    case 2:
      console.clear();
      await deleteItemFromCart(myCart, 1);
      option = await menu();
      break;
    case 3:
      console.clear();
      await displayViewCart();
      readline.question('Press Enter to continue...');
      option = await menu();
      break;
    case 0:
      console.clear();
      process.exit();
      break;
  }
}
