export default (context) => {
    if (!context.store.getters["auth/isAuth"]) {
        context.redirect("/auth");
    }
};
