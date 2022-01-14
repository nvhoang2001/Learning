export default (context) => {
    let req = null;
    if (process.server) {
        req = context.req;
    }
    context.store.dispatch("auth/initAuth", req);
};
