import criateItem from "./item.js"

async function addItem(userCart, item) {
    userCart.push(item)
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index!= -1){
        userCart.splice(index, 1);
    }
}

//diminui um item
async function removeItem(userCart, index) {
    
}

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, atual) =>
        total + atual.subtotal(), 0);
    console.log(result);
}

export {addItem, calculateTotal, deleteItem, removeItem};