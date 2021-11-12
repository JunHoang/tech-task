import React from "react";
import { SRC_URL } from "../shared/baseUrl";

type Props = {
    logo: string | string[]
}

function Navbar({ logo }: Props) {
    return (
        <div className="container">
            <img src={SRC_URL + logo} alt="hdrImage" />
        </div>
    );
}

export default Navbar;
