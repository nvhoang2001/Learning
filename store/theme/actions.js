export default {
    changeFilterColor(context, color) {
        context.commit("setFilter", color);
    },
    changeBackgroundColor(context, color) {
        context.commit("setBackgroundColor", color);
    },
    changeSizeState(context, isMini) {
        context.commit("setSizeState", isMini);
    },
    changeBgImageState(context, useImage) {
        context.commit("setImageState", useImage);
    },
    changeBgImageURL(context, url) {
        context.commit("setBackgroundImage", url);
    },
};
