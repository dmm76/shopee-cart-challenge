async function criateItem(name, price, quantity) {
    return {
        name,
        price, 
        quantity,
        subtotal: () => price * quantity,
    }
}

export default criateItem;