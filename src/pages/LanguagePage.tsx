import React from 'react'
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import useLang from '../custom-hooks/useLang'

function LanguagePage() {
    const [lang, , , isLoading, errorMessage] = useLang(null);
    console.log("lang in LangPage", lang);


    if (isEmpty(lang)) {
        return <div></div>
    } else {
        const showLang = lang.map(lang => {
            return (
                <Link to={`/languages/${lang.locale}`}>
                    <div key={lang.languageId}>{lang.languageNameOrig}</div>
                </Link>
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
