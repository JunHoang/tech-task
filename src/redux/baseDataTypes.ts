export type Data = {
    [key: string]: string | string[]
}

export type BaseDataState = {
    data: Data | null,
    isLoading: boolean,
    errorMessage: string
}