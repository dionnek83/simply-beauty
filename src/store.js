// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./slices/products";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";
// import { ProductApi } from "./services/productApi";
// import { setupListeners } from '@reduxjs/toolkit/query'

// // const customizedMiddleware = getDefaultMiddleware({
// //   serializableCheck: false,
// // });

// // const reducer = {
// //   // products: productReducer,
// //   [ProductApi.reducerPath]: ProductApi.reducer,
// // };
// export const store = configureStore({
//   // reducer: reducer,
//   reducer = {
//     // products: productReducer,
//     [ProductApi.reducerPath]: ProductApi.reducer,
//   },
//   // devTools: true,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(ProductApi.middleware),
// })
// // export default store;

// setupListeners(store.dispatch);

import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { ProductApi } from "./services/productApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
