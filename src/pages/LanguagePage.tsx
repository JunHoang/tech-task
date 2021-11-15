import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import useLang from '../custom-hooks/useLang'
import Chart from '../components/Chart';
import Loading from '../components/Loading';
import ErrorText from '../components/ErrorText';

const useStyles = makeStyles({
    Tab: {
        padding: 20,
        margin: 20,
        height: "55vh",
        overflowY: 'auto',
        align: "center"
    }
})

function LanguagePage() {
    const classes = useStyles();

    const [lang, , numberTerm, isLoading, errorMessage] = useLang(null);


    if (isLoading) {
        return (<Loading />)
    }
    if (errorMessage) {
        return (<ErrorText errorMessage={errorMessage} />)
    }
    if (isEmpty(lang)) {
        return <div></div>
    } else {
        const showLang = lang.map(lang => {
            return (
                <Link to={`/languages/${lang.locale}`} key={lang.locale}>
                    <div key={lang.locale}>{lang.languageNameOrig}</div>
                </Link>
            )
        })

        return (
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.Tab}>
                        <Typography variant='h5' style={{ textTransform: 'uppercase' }}>Choose Language</Typography>
                        {showLang}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.Tab}>
                        <Typography variant='h5' style={{ textTransform: 'uppercase' }}>
                            Statistic of the Language Terms
                        </Typography>
                        <Chart countTerm={numberTerm} />
                    </Paper>
                </Grid>
            </Grid>


        )
    }


}

export default LanguagePage
