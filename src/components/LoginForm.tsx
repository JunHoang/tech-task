import React from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from './Input';

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
            <Grid container spacing={0} direction="column" >
                <Grid item >
                    {(errors.Email) ?
                        <TextField
                            {...register("Email")}
                            variant="standard"
                            label="Email"
                            name="Email"
                            sx={{ width: '50ch' }}
                            error
                            helperText={errors.Email.message}
                        />
                        :
                        <TextField
                            {...register("Email")}
                            variant="standard"
                            label="Email"
                            name="Email"
                            sx={{ width: '50ch' }}
                        />}
                </Grid>
                <Grid item>
                    {(errors.Password) ?
                        <TextField
                            {...register("Password")}
                            variant="standard"
                            label="Password"
                            name="Password"
                            sx={{ width: '50ch' }}
                            error
                            helperText={errors.Password.message}
                        />
                        :
                        <TextField
                            {...register("Password")}
                            variant="standard"
                            label="Password"
                            name="Password"
                            sx={{ width: '50ch' }}
                        />}
                    <Grid item>
                        <Button type="submit">Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default LoginForm
