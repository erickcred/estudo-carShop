import createItem from './item.js';
// Quais ações meu carrinho pode fazer

// Casos de uso
// adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item)
}

// calgular o subtotal
async function calculateTotal(userCart) {
  console.log('\n\rShopp Cart Total Is:');
  console.log(`Total: R$ ${userCart.reduce((total, item) => total + item.subTotal(), 0).toFixed(2)}`);
}

// delettar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex(item => item.name === name);

  if (index !== -1)
    userCart.splice(index, 1);
}

// remove item do carrinho -> diminui um item
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex(i => i.name === item.name);

  if (indexFound == -1) {
    console.log('Item não encontrado');
    return;
  }

  item.quantity -= 1;
  const newItem = await createItem(item.name, item.price, item.quantity);
  if (userCart[indexFound].quantity > 1) {
    userCart.splice(indexFound, 1);

    userCart.push(newItem);
  } else {
    userCart.splice(indexFound, 1);
  }
}

async function displayCart(userCart) {
  console.log('\n\rShopp cart list:');
  userCart.forEach((item, index) => {
    console.log(`${index + 1}) ${item.name}, R$ ${item.price} | ${
      item.quantity
    }x subTotal: R$ ${item.subTotal()}`);
  });
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displayCart,
}
