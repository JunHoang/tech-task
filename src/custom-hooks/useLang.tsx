import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchLang, fetchTranslating } from '../redux/actions/langAction';
import { Store } from '../redux/reducers'

function useLang(locale: any | null) {
    const dispatch = useDispatch();

    const { lang, translating, isLoading, errorMessage } = useSelector(
        (state: Store) => state.langReducer
    );

    console.log("lang in Lang", lang);

    useEffect(() => {
        if (locale) {
            dispatch(fetchTranslating(locale))
        } else {
            dispatch(fetchLang());
        }
    }, [dispatch, locale]);

    return [lang, translating, isLoading, errorMessage] as const
}

export default useLang
