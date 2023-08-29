const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Update

const productsV3 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndexV2 = productsV3.findIndex(item => item.id === update.id);
productsV3[productIndexV2] = {
    ...productsV3[productIndexV2],
    ...update.changes,
};
console.log(productsV3);

// Eliminar sin modificar el original
const productsV3 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const newProducts = productsV3.filter(product => product.id !== "🍕");
console.log(productsV3);
console.log(newProducts);

// Update sin modificar el array original
const productsV4 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const newProducts2 = productsV4.map(product => {
    if (product.id === "🍕") {
        product = {
            ...product,
            ...{
                changes: 'Other changes'
            }
        }
    }
    return product;
});
console.log(productsV4);
console.log(newProducts2);