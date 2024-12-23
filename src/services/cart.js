import criateItem from "./item.js";

async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index != -1) {
    userCart.splice(index, 1);
  }
}

//diminui um item
function removeItemByIndex(userCart, index) {
    console.log("\nRemovendo item:");
    
    const deleteIndex = index - 1;
  
    if (deleteIndex >= 0 && deleteIndex < userCart.length) {
      userCart.splice(deleteIndex, 1);
      console.log(`Item no índice ${index} removido com sucesso.\n`);
    } else {
      console.log("Índice inválido. Nenhum item foi removido.\n");
    }
  }

async function removeItem(userCart, item) {
    //descobrir o index do item no array de userCart
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    console.log(indexFound)

    //caso não encontre
    if(indexFound === -1){
        console.log("item não encontrado")
    }

    //item > 1 subtrair um item, item =1 deletar o item
    if(userCart[indexFound].quantity > 1){
        console.log("Itens encontrados, removendo um item")
        userCart[indexFound].quantity -= 1
        return
    }
    //caso so tiver um item - deletar o item
   if(userCart[indexFound].quantity === 1){
    console.log("Encontrado somente um item, ele está sendo deletado do carrinho")
    userCart.splice(indexFound, 1)
    return
   }
}

async function displayCart(userCart) {
  console.log("Shopee cart list: ");
  console.log("List:    Name Item      | Price | Qnt| Subtotal");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$${item.price} | ${
        item.quantity
      } | ${item.subtotal()} `
    );
  });
}

async function calculateTotal(userCart) {
  console.log("\nShopee Cart Total: ");
  const result = userCart.reduce((total, atual) => total + atual.subtotal(), 0);
  console.log(`Total 🛒: R$${result}`);
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart, removeItemByIndex };
