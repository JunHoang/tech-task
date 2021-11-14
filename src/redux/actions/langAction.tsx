import axios from "axios";

import { INIT_LANG, LOAD_LANG, FAIL_LANG, LangActionTypes } from "../types/langActionTypes";
import { Lang } from "../types/langTypes";
import { BASE_URL } from "../../shared/baseUrl";
import { AppThunk } from "../store";

export const initLang = (lang: Lang[]): LangActionTypes => {
    return {
        type: INIT_LANG,
        payload: lang,
    };
};

export const loadLang = (isLoading: boolean): LangActionTypes => {
    return {
        type: LOAD_LANG,
        loading: isLoading,
    };
};

export const failLang = (errorMessage: string): LangActionTypes => {
    return {
        type: FAIL_LANG,
        errorMessage: errorMessage,
    };
};
export const fetchLang = (): AppThunk => async (dispatch) => {
    const res = await axios.get(BASE_URL + `/lang/list-locale`);
    try {

        if (res.data.statusCode !== 200) {
            throw new Error("Something went wrong")
        }

        const responseData = res.data.body
        dispatch(initLang(responseData))

    } catch (err) {
        dispatch(failLang((err as any).errorMessage))
    }

};

