import axios from "axios";
import { findKey } from "lodash";

import { INIT_LANG, LOAD_LANG, FAIL_LANG, LangActionTypes, TRANSLATING } from "../types/langActionTypes";
import { Lang, Translating } from "../types/langTypes";
import { BASE_URL } from "../../shared/baseUrl";
import { AppThunk } from "../store";

export const initLang = (lang: Lang[]): LangActionTypes => {
    return {
        type: INIT_LANG,
        payload: lang,
    };
};

export const translating = (translating: Translating): LangActionTypes => {
    return {
        type: TRANSLATING,
        payload: translating
    }
}

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
    if (res.data.statusCode !== 200) {
        throw new Error("Something went wrong")
    }

    try {
        const responseData = res.data.body
        dispatch(initLang(responseData))

    } catch (err) {
        dispatch(failLang((err as any).errorMessage))
    }

};

export const fetchTranslating = (locale: any): AppThunk => async (dispatch) => {
    const res = await axios.get(BASE_URL + `/lang/list-language-data-UI`)

    if (res.data.statusCode !== 200) {
        throw new Error("Something went wrong")
    }

    try {
        const responseData = res.data.body
        let data: any = {}
        for (const key in responseData) {
            if (key === locale) {
                data = responseData[key];
                console.log('element', data);
                // data = Object.keys(data)
            }
        }
        dispatch(translating(data))
        console.log('KeyGroup', data);
    } catch (err) {
        dispatch(failLang((err as any).errorMessage))
    }
}

