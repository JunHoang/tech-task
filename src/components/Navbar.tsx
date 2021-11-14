import React from "react";
import { SRC_URL } from "../shared/baseUrl";
import Grid from '@mui/material/Grid';

type Props = {
    logo: string | string[]
}

function Navbar({ logo }: Props) {

    return (
        <Grid container spacing={0} paddingTop={{ xs: 2, md: 1 }}>
            <Grid pl={{ xs: 2, sm: 7, md: 20, xl: 50 }}>
                <div className="container">
                    <img className="logo" src={SRC_URL + logo} alt="hdrImage" />
                </div>
            </Grid>
        </Grid >
    );
}

export default Navbar;
