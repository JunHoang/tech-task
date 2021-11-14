export type Lang = {
    languageId: number;
    flagFile: string;
    languageNameEng: string;
    languageNameOrig: string;
    locale: string;
}

export type Translating = {
    [key: string]: any
}

export type LangState = {
    lang: Lang[],
    translating: Translating | null,
    isLoading: boolean,
    errorMessage: string
}