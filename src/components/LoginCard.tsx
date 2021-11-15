import React from 'react'
import { Card, Grid, CardContent, Typography } from '@mui/material';

import LoginForm from './LoginForm';

type Props = {
    title: string | string[]
}

function LoginCard({ title }: Props) {
    return (
        <Grid
            container
            direction="column"
            spacing={0}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            style={{ minHeight: "80vh" }}
        >
            <Grid item xs={12}>
                <Card sx={{ maxWidth: 555 }}>
                    <CardContent>
                        <Typography variant="h5">
                            {title}
                        </Typography>
                        <LoginForm />
                        <Grid
                            container
                            direction="row"
                            spacing={2}
                            alignItems="center"
                            justifyContent="center"
                            paddingTop={2}
                        >
                            <Grid item>
                                <Typography>
                                    Forgot your password?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    Reset password
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default LoginCard
