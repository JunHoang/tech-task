import React from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 555 }}>
                    <CardContent>
                        <Typography variant="h5">
                            {title}
                        </Typography>
                        {/* <Button> Log in</Button> */}
                        <LoginForm />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default LoginCard
