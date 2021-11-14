import React from 'react'
import { combineReducers } from 'redux';


import dataReducer from "../reducers/baseDataReducer";

const rootReducer = combineReducers({ dataReducer });

export type Store = ReturnType<typeof rootReducer>


export default rootReducer
