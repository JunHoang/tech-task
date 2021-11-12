import { Data } from "./baseDataTypes";

export const INIT_DATA = "INIT_DATA";
export const LOAD_DATA = "LOAD_DATA";
export const FAIL_DATA = "FAIL_DATA";

interface InitDataAction {
    type: typeof INIT_DATA,
    payload: Data,
}

interface LoadDataAction {
    type: typeof LOAD_DATA,
    loading: boolean,
}

interface FailDataAction {
    type: typeof FAIL_DATA,
    errorMessage: string,
}

export type BaseDataActionTypes =
    InitDataAction
    | LoadDataAction
    | FailDataAction