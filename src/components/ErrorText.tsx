import React from 'react'

type Props = {
    errorMessage: string
}

export default function ErrorText({ errorMessage }: Props) {
    return (
        <div>
            <h4>{errorMessage}</h4>
        </div>
    )
}
