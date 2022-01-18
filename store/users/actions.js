export default {
    checkID(context, id) {
        const isExisted = !!context.state.usersData.find((u) => u.id === id);
        return isExisted;
    },
    deleteUser(context, id) {
        context.commit("deleteUser", id);
    },
    addUser(context, usrData) {
        context.commit("addUser", usrData);
    },
    updateUser(context, updatedUsr) {
        context.commit("updateUser", updatedUsr);
    },
};
