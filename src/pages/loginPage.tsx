import React from 'react';

import useBaseData from '../custom-hooks/useBaseData';
import Navbar from '../components/Navbar';
import { SRC_URL } from "../shared/baseUrl";
import LoginCard from '../components/LoginCard';
import Loading from '../components/Loading';
import ErrorText from '../components/ErrorText';

function LoginPage() {
    const [data, isLoading, errorMessage] = useBaseData();

    if (isLoading) {
        return (<Loading />)
    }
    if (errorMessage) {
        return (<ErrorText errorMessage={errorMessage} />)
    }
    if (data !== null) {

        const bgImage = data["bg-image"]
        const randomBackground = bgImage[Math.floor(Math.random() * bgImage.length)];


        return (
            <div className="Login" style={{ backgroundImage: `url(${SRC_URL}${randomBackground})` }}>
                <div className="card-overlay">
                    <Navbar logo={data["hdr-image"]} />
                    <LoginCard title={data["login-form-text"]} />
                </div>
            </div>
        );
    } else {
        return <div></div>
    }

}

export default LoginPage;
