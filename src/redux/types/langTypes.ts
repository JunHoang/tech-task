export type Lang = {
    languageId: number;
    flagFile: string;
    languageNameEng: string;
    languageNameOrig: string;
    locale: string;
}

export type LangState = {
    lang: Lang[],
    isLoading: boolean,
    errorMessage: string
}