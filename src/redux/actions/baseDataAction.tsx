import axios from "axios";

import { INIT_DATA, LOAD_DATA, FAIL_DATA, BaseDataActionTypes } from "../types/baseDataActionTypes";
import { Data } from "../types/baseDataTypes";
import { BASE_URL } from "../../shared/baseUrl";
import { AppThunk } from "../store";

export const initData = (data: Data): BaseDataActionTypes => {
  return {
    type: INIT_DATA,
    payload: data,
  };
};

export const loadData = (isLoading: boolean): BaseDataActionTypes => {
  return {
    type: LOAD_DATA,
    loading: isLoading,
  };
};

export const failData = (errorMessage: string): BaseDataActionTypes => {
  return {
    type: FAIL_DATA,
    errorMessage: errorMessage,
  };
};

export const fetchData = (): AppThunk => async (dispatch) => {
  dispatch(loadData(true))
  const res = await axios.get(BASE_URL + `/base/get-loginpage-settings`);
  try {
    //Create Data
    const responseData = res.data;
    if (responseData.length > 1) {
      throw new Error("Data is not expected");
    }
    let temp = responseData[0];
    const data: Data = {};
    for (let index = 0; index < temp.length; index++) {
      const element = temp[index];
      const key = element.setting_name;
      if (element?.data_json === null) {
        data[key] = element.data;
      } else {
        data[key] = element.data_json;
      }
    }
    dispatch(initData(data));
  } catch (err) {
    dispatch(failData((err as any).errorMessage))
  }
};


