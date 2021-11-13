import React from "react";
import { SRC_URL } from "../shared/baseUrl";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

type Props = {
    logo: string | string[]
}

function Navbar({ logo }: Props) {
    return (
        <Box sx={{ p: 2 }} >
            <Toolbar className="navbar-brand" sx={{ pl: 5 }} >
                <div className="container">
                    <img className="logo" src={SRC_URL + logo} alt="hdrImage" />
                </div>
            </Toolbar>
        </Box >
    );
}

export default Navbar;
