import React from 'react'
import { isEmpty } from 'lodash';
import useLang from '../custom-hooks/useLang'

function LanguagePage() {
    const [lang, isLoading, errorMessage] = useLang();
    console.log("lang in LangPage", lang);


    if (isEmpty(lang)) {
        return <div></div>
    } else {
        const showLang = lang.map(lang => {
            return (
                <div key={lang.languageId}>{lang.languageNameOrig}</div>
            )
        })

        return (

            <div>
                <h1>Choose Language</h1>
                {showLang}
            </div>
        )
    }


}

export default LanguagePage
