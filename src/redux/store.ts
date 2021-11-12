import { compose, applyMiddleware, combineReducers, createStore, Action } from "redux";
import thunk, { ThunkAction } from "redux-thunk";

import dataReducer from "./baseDataReducer";

const rootReducer = combineReducers({ dataReducer });

export type Store = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    Store,
    unknown,
    Action<string>
>

const storeInitialState: Store = {
    dataReducer: {
        data: null,
        isLoading: false,
        errorMessage: "",
    },
};

const makeStore = () => {
    const middlewares = [thunk];
    let composeEnhancers = compose;

    if (process.env.NODE_ENV === "development") {
        if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
            composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                trace: true,
            });
        }
    }
    const store = createStore(
        rootReducer,
        storeInitialState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    return store;
};

export default makeStore;
