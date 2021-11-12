import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../redux/baseDataAction';
import { Store } from '../redux/store'

function useBaseData() {
    const dispatch = useDispatch();

    const { data, isLoading, errorMessage } = useSelector(
        (state: Store) => state.dataReducer
    );

    console.log("data in useData", data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return [data, isLoading, errorMessage] as const
}

export default useBaseData
