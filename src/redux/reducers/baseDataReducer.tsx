import { INIT_DATA, LOAD_DATA, FAIL_DATA, BaseDataActionTypes } from "../types/baseDataActionTypes";
import { BaseDataState } from "../types/baseDataTypes";

const initialState = {
    data: null,
    isLoading: false,
    errorMessage: "",
};

export default function dataReducer(state: BaseDataState = initialState, action: BaseDataActionTypes) {
    switch (action.type) {
        case INIT_DATA:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };

        case LOAD_DATA:
            return {
                ...state,
                isLoading: true,
            };

        case FAIL_DATA:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isLoading: false,
            };

        default:
            return state;
    }
}
