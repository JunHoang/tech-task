import { CountTerm, Lang, Translating } from "./langTypes";

export const INIT_LANG = "INIT_LANG";
export const TRANSLATING = "TRANSLATING";
export const COUNT_TERM = "COUNT_TERM";
export const LOAD_LANG = "LOAD_LANG";
export const FAIL_LANG = "FAIL_LANG";

interface InitLangAction {
    type: typeof INIT_LANG,
    payload: Lang[],
}

interface TranslatingAction {
    type: typeof TRANSLATING,
    payload: Translating,
}
interface CountTermAction {
    type: typeof COUNT_TERM,
    payload: CountTerm,
}

interface LoadLangAction {
    type: typeof LOAD_LANG,
    loading: boolean,
}

interface FailLangAction {
    type: typeof FAIL_LANG,
    errorMessage: string,
}

export type LangActionTypes =
    InitLangAction
    | TranslatingAction
    | CountTermAction
    | LoadLangAction
    | FailLangAction