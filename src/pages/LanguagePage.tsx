import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import useLang from '../custom-hooks/useLang'
import Chart from '../components/Chart';

const useStyles = makeStyles({
    Tab: {
        padding: 20,
        margin: 20,
        height: "50vh",
        weight: "50vw",
        overflowY: 'auto'
    }
})

function LanguagePage() {
    const classes = useStyles();

    const [lang, , numberTerm, isLoading, errorMessage] = useLang(null);
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
            <Grid container spacing={0}>
                <Grid item sm>
                    <Paper className={classes.Tab}>
                        <Typography variant='h5'>Choose Language</Typography>
                        {showLang}
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper className={classes.Tab}>
                        <Chart countTerm={numberTerm} />
                    </Paper>
                </Grid>
            </Grid>


        )
    }


}

export default LanguagePage
