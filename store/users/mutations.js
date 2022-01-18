export default {
    deleteUser(state, id) {
        const index = state.usersData.findIndex((u) => u.id === id);
        state.usersData.splice(index, 1);
    },
    updateUser(state, updatedUser) {
        const usr = state.usersData.find((u) => u.id === updatedUser.id);
        for (const key in usr) {
            usr[key] = updatedUser[key];
        }
    },
    addUser(state, newUser) {
        state.usersData.unshift(newUser);
    },
};
