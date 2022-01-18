export default {
    deleteProduct(state, id) {
        const index = state.products.findIndex((prod) => prod.id === id);
        state.products.splice(index, 1);
    },
    updateProduct(state, updatedProduct) {
        const prod = state.products.find((p) => p.id === updatedProduct.id);
        for (const key in prod) {
            prod[key] = updatedProduct[key];
        }
    },
    addProduct(state, newProduct) {
        state.products.unshift(newProduct);
    },
};
