export default {
    getProducts(state) {
        return state.products;
    },
    getAProduct(state) {
        return (id) => {
            return state.products.find((prod) => prod.id === id);
        };
    },
};
