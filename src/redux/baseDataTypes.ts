export type Data = {
    [key: string]: string | string[]
}

export type BaseDataState = {
    data: Data,
    isLoading: boolean,
    errorMessage: string
}