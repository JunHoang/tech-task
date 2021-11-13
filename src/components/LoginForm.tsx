import React from 'react';
import { Grid, TextField, Button, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    Email: yup.string().required('Email is required!').email('Email is unvalid!'),
    Password: yup.string().required('Password is required!').min(8, "Password must be at least 8 characters"),
});


function LoginForm() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

    const onSubmitHandler = (data: any) => {
        console.log({ data });
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <Grid container spacing={0} direction="column" sx={{ mt: 8 }} >
                <Grid item sx={{ m: 1 }}>
                    {(errors.Email) ?
                        <TextField
                            {...register("Email")}
                            variant="standard"
                            label="Email"
                            name="Email"
                            sx={{ width: '50ch' }}
                            error
                            helperText={errors.Email.message}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <EmailIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                        :
                        <TextField
                            {...register("Email")}
                            variant="standard"
                            label="Email"
                            name="Email"
                            sx={{ width: '50ch' }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <EmailIcon />
                                    </InputAdornment>
                                )
                            }}
                        />}
                </Grid>
                <Grid item sx={{ m: 1 }}>
                    {(errors.Password) ?
                        <TextField
                            {...register("Password")}
                            variant="standard"
                            label="Password"
                            name="Password"
                            sx={{ width: '50ch' }}
                            error
                            helperText={errors.Password.message}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <LockIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                        :
                        <TextField
                            {...register("Password")}
                            variant="standard"
                            label="Password"
                            name="Password"
                            sx={{ width: '50ch' }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <LockIcon />
                                    </InputAdornment>
                                )
                            }}
                        />}
                    <Grid item sx={{ mt: 5 }}>
                        <Button type="submit" variant="contained" size="small">Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form >
    )
}

export default LoginForm
