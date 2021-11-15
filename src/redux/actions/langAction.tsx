import axios from "axios";

import { INIT_LANG, LOAD_LANG, FAIL_LANG, LangActionTypes, TRANSLATING, COUNT_TERM } from "../types/langActionTypes";
import { CountTerm, Lang, Translating } from "../types/langTypes";
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

export const countTerm = (countTerm: CountTerm): LangActionTypes => {
    return {
        type: COUNT_TERM,
        payload: countTerm
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
        dispatch(count())

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
            }
        }
        dispatch(translating(data))
    } catch (err) {
        dispatch(failLang((err as any).errorMessage))
    }
}

export const count = (): AppThunk => async (dispatch) => {

    const res = await axios.get(BASE_URL + `/lang/list-language-data-UI`)

    if (res.data.statusCode !== 200) {
        throw new Error("Something went wrong")
    }

    try {
        const responseData = res.data.body
        let data: any = {}, count = 0
        for (const locale in responseData) {
            const localeData = responseData[locale]
            for (const keyGroup in localeData) {
                const keyGroupData = localeData[keyGroup]
                for (const word in keyGroupData) {
                    if (word !== keyGroupData[word]) {
                        count++
                    }
                }
            }
            data[locale] = count;
            count = 0
        }
        dispatch(countTerm(data))
    } catch (err) {
        dispatch(failLang((err as any).errorMessage))
    }


}
