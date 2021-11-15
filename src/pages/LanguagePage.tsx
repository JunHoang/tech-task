import React from 'react'
import { Grid, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import useLang from '../custom-hooks/useLang'
import Chart from '../components/Chart';

function LanguagePage() {
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

            <Grid container >
                <Grid container spacing={2}>
                    <Grid item sm>
                        <Paper>
                            <Typography variant='h5'>Choose Language</Typography>
                            {showLang}
                        </Paper>
                    </Grid>
                    <Grid item sm>
                        <Paper>
                            <Chart countTerm={numberTerm} />
                        </Paper>
                    </Grid>
                </Grid>

            </Grid>


        )
    }


}

export default LanguagePage
