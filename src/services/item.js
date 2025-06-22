// Quais ações meu item pode fazer

// Casos de uso dos itens
// Criar item com sub total certo já calculado
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subTotal: () => (price * quantity)
  }
}

export default createItem;