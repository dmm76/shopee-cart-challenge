import * as cartService from './services/cart.js'
import criateItem from './services/item.js'


const myCart = []; // array de itens
const myWhishList = []; //lista de desejos

console.log("Welcome to the Shopee Cart!\n");

//criando itens
const item1 = await criateItem("hotwhells ferrari", 20.99, 1)
const item2 = await criateItem("hotwhells lamborguini", 39.99, 3)

//add itens ao carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

// await cartService.displayCart(myCart)
// await cartService.calculateTotal(myCart);
// await cartService.removeItemByIndex(myCart, 1)

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)
await cartService.calculateTotal(myCart);

//await cartService.deleteItem(myCart, item1.name)


