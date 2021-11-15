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

export type CountTerm = {
    [key: string]: number
}

export type LangState = {
    lang: Lang[],
    translating: Translating | null,
    numberTerm: CountTerm | null,
    isLoading: boolean,
    errorMessage: string
}