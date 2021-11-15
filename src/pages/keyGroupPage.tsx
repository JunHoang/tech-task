import { Grid, List, ListItem, ListItemText, Paper, Typography, Breadcrumbs, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import ErrorText from '../components/ErrorText';
import Loading from '../components/Loading';

import useLang from '../custom-hooks/useLang';


const useStyles = makeStyles({
    BreadCrumbs: {
        padding: 30,
        margin: 20,
    },
    Tab: {
        padding: 20,
        margin: 20,
        height: "50vh",
        overflowY: 'auto'
    },
    Link: {
        textDecoration: "none",
        fontWeight: 600
    }
})

function KeyGroupPage() {

    const classes = useStyles();

    const locale = useParams();

    const [, translating, , isLoading, errorMessage] = useLang(locale.locale);
    const [word, setWord] = useState("")


    if (isLoading) {
        return (<Loading />)
    }
    if (errorMessage) {
        return (<ErrorText errorMessage={errorMessage} />)
    }
    if (translating !== null) {

        const KeyGroup = Object.keys(translating)
        const KeyTerm = Object.keys(word)


        const showKeyGroup = KeyGroup.map(key => {
            return (
                <List component="ul" key={key}>
                    <ListItem key={key} button onClick={() => setWord(translating[key])}>
                        <ListItemText style={{ textTransform: 'capitalize' }} primary={key} />
                    </ListItem>
                </List>
            )
        })

        const showWords = KeyTerm.map((term: any) => (
            <Typography style={{ textTransform: 'capitalize' }} align='left' key={term}>
                {term}: {word[term]}
            </Typography>
        ))

        return (
            <Box >
                <Breadcrumbs aria-label="breadcrumb" className={classes.BreadCrumbs}>
                    <Link to="/languages" className={classes.Link}>
                        Languages
                    </Link>
                    <Typography color="text.primary">{locale.locale}</Typography>
                </Breadcrumbs>
                <Grid container spacing={0} >
                    <Grid item xs={12} md={6}>
                        <Paper className={classes.Tab}>
                            {showKeyGroup}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper className={classes.Tab} >
                            {showWords}
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        )
    } else {
        return <div></div>
    }


}

export default KeyGroupPage

