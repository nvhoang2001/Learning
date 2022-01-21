export default {
    checkID(context, id) {
        const isExisted = !!context.state.products.find((p) => p.id === id);
        return isExisted;
    },
    deleteProduct(context, id) {
        context.commit("deleteProduct", id);
    },
    addProduct(context, prodData) {
        context.commit("addProduct", prodData);
    },
    updateProduct(context, updatedProd) {
        context.commit("updateProduct", updatedProd);
    },
};
