import React from 'react'
import { TextField } from '@mui/material';

type Props = {
    label: string,
    name: string,
    error: string | null
}

function Input({ label, name, error }: Props) {
    return (
        <TextField
            variant="standard"
            sx={{ width: '50ch' }}
            label={label}
            name={name}
            {...(error && { error: true, helperText: error })}
        />
    )
}

export default Input
