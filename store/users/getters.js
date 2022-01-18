export default {
    getUsersData(state) {
        return state.usersData;
    },
    getAUser(state) {
        return (id) => {
            const user = state.usersData.find((u) => u.id === id);
            return user;
        };
    },
};
