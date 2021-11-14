import React from 'react'
import { useParams } from 'react-router-dom';
import useLang from '../custom-hooks/useLang';

function KeyGroupPage() {

    const locale = useParams();
    console.log('locale', locale);

    const [, translating, isLoading, errorMessage] = useLang(locale.locale);

    console.log('translating', translating);

    if (translating !== null) {
        const KeyGroup = Object.keys(translating)

        const showKeyGroup = KeyGroup.map(key => {
            return <div>{key}</div>
        })

        return (
            <div>
                <h1>Key Group Page</h1>
                {showKeyGroup}
            </div>
        )
    } else {
        return <div></div>
    }


}

export default KeyGroupPage
