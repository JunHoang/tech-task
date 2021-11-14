import { INIT_LANG, LOAD_LANG, FAIL_LANG, LangActionTypes, TRANSLATING } from "../types/langActionTypes";
import { LangState } from "../types/langTypes";

const initialState: LangState = {
    lang: [],
    translating: null,
    isLoading: false,
    errorMessage: "",
};

export default function langReducer(state = initialState, action: LangActionTypes) {
    switch (action.type) {
        case INIT_LANG:
            return {
                ...state,
                lang: action.payload,
                isLoading: false,
            };

        case TRANSLATING:
            return {
                ...state,
                translating: action.payload,
                isLoading: false,
            }

        case LOAD_LANG:
            return {
                ...state,
                isLoading: true,
            };

        case FAIL_LANG:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isLoading: false,
            };

        default:
            return state;
    }
}
