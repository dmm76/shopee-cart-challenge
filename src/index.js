import * as cartService from './services/cart.js'
import criateItem from './services/item.js'


const myCart = []; // array de itens
const myWhishList = []; //lista de desejos

console.log("Welcome to the Shopee Cart!");

const item1 = await criateItem("hotwhells ferrari", 20.99, 3)
const item2 = await criateItem("hotwhells lamborguini", 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myWhishList, item2)

await cartService.deleteItem(myCart, item1.name)

console.log("Shopee Cart: ");
await cartService.calculateTotal(myCart);