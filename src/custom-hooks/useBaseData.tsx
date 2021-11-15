import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../redux/actions/baseDataAction';
import { Store } from '../redux/reducers'

function useBaseData() {
    const dispatch = useDispatch();

    const { data, isLoading, errorMessage } = useSelector(
        (state: Store) => state.dataReducer
    );


    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return [data, isLoading, errorMessage] as const
}

export default useBaseData
