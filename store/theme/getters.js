export default {
    getFilterColor(state) {
        return state.filterColor;
    },
    getBackgroundColor(state) {
        return state.backgroundColor;
    },
    getSizeState(state) {
        return state.sidebarIsMini;
    },
    getBackgroundImageState(state) {
        return state.sidebarUseImage;
    },
    getBackgroundImageURL(state) {
        return state.sidebarBackgroundImage;
    },
};
