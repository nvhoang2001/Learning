export default {
    checkID(context, id) {
        const isExisted = !!context.state.usersData.find((u) => u.id === id);
        return isExisted;
    },
    deleteProduct(context, id) {
        context.commit("deleteProduct", id);
    },
    addProduct(context, usrData) {
        context.commit("addProduct", usrData);
    },
    updateProduct(context, updatedUsr) {
        context.commit("updateProduct", updatedUsr);
    },
};
