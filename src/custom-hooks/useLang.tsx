import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchLang } from '../redux/actions/langAction';
import { Store } from '../redux/reducers'

function useLang() {
    const dispatch = useDispatch();

    const { lang, isLoading, errorMessage } = useSelector(
        (state: Store) => state.langReducer
    );

    console.log("lang in Lang", lang);

    useEffect(() => {
        dispatch(fetchLang());
    }, [dispatch]);

    return [lang, isLoading, errorMessage] as const
}

export default useLang
