import { Grid, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { Fragment, useState } from 'react'
import { useParams } from 'react-router-dom';
import useLang from '../custom-hooks/useLang';


const useStyles = makeStyles({
    Tab: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: "90vh",
        overflowY: 'auto'
    }
})

function KeyGroupPage() {

    const classes = useStyles();

    const locale = useParams();
    console.log('locale', locale);

    const [, translating, , isLoading, errorMessage] = useLang(locale.locale);
    const [word, setWord] = useState("")

    console.log('translating', translating);

    if (translating !== null) {

        const KeyGroup = Object.keys(translating)
        const KeyTerm = Object.keys(word)

        console.log('KeyTerm', KeyTerm);

        const showKeyGroup = KeyGroup.map(key => {
            return (
                <List component="ul">
                    <ListItem key={key} button onClick={() => setWord(translating[key])}>
                        <ListItemText style={{ textTransform: 'capitalize' }} primary={key} />
                    </ListItem>
                </List>
            )
        })

        const showWords = KeyTerm.map((term: any) => (
            <Typography style={{ textTransform: 'capitalize' }}>
                {term}: {word[term]}
            </Typography>
        ))

        return (
            <Grid container spacing={2}>
                <Grid item sm>
                    <Paper className={classes.Tab}>
                        <Fragment>
                            {showKeyGroup}
                        </Fragment>
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper className={classes.Tab}>
                        {showWords}
                    </Paper>
                </Grid>
            </Grid>
        )
    } else {
        return <div></div>
    }


}

export default KeyGroupPage

