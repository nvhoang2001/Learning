export  default {
    setFilter(state, color) {
        state.filterColor = color;
    },
    setBackgroundColor(state, color) {
        state.backgroundColor = color;
    },
    setBackgroundImage(state, imgURL) {
        state.sidebarBackgroundImage = imgURL;
    },
    setSizeState(state, isMini) {
        state.sidebarIsMini = isMini;
    },
    setImageState(state, useImage) {
        state.sidebarUseImage = useImage;
    },
}