import { combineReducers } from 'redux';

import dataReducer from "../reducers/baseDataReducer";
import langReducer from './langReducer';

const rootReducer = combineReducers({ dataReducer, langReducer });

export type Store = ReturnType<typeof rootReducer>


export default rootReducer
