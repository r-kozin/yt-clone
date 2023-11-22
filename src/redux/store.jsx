import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feedSlice";
import sidebarReducer from "./sidebarSlice";


const store = configureStore({
    reducer: {
        feed: feedReducer,
        sidebar: sidebarReducer,
        // navbar: navbarReducer,
    }
})

export default store;