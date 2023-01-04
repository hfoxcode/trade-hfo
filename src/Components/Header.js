import React, { useEffect, useState } from "react"
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie';
import jwtDecode from "jwt-decode";
import userAvatar from "../img/user.png";
import { Tooltip } from "react-tooltip";




export default function Header() {

    const [light, setLight] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userId, setUserId] = useState();
    const [username, setUsername] = useState();
    const [showTooltip, setShowTooltip] = useState();

    const client = axios.create({
        baseURL: "https://ribu-backend.civitaseterna.com"
    });

    useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get('token');


        if (token) {
            const user = jwtDecode(token);
            console.log(user.name);
            setUserId(user.name);
            // Make the Axios request inside the setUserId callback
            axios.get(`https://ribu-backend.civitaseterna.com/User/${user.name}`)
                .then(response => {
                    // handle the response data
                    setUsername(response.data.username);
                })
                .catch(error => {
                    // handle the error
                    console.error(error);
                });
        }
    }, []);






    const handleLogout = () => {
        // Token'ı sıfırlayın
        let cookiesx = new Cookies();
        cookiesx.remove('token');

        window.location.reload();

    }





    return (
        <>

            <header>
                <ul className="header-container">
                    <li className="logo-container">
                        <Link to="/">
                            <div className="logo-area">
                                <img src={Logo} alt="Logo" />

                            </div>
                        </Link>
                    </li>
                    <li className="navbar-container">
                        <ul className="navbar-area">

                            <Link to="how-it-works-detailed">
                                <li>How It Works</li>
                            </Link>

                            <Link to="why-ribu">
                                <li>Why Ribu?</li>
                            </Link>

                            {username ?

                                <>
                                    <Link to="markets">
                                        <li>Markets</li>
                                    </Link>

                                    <Link to="exchange">
                                        <li>Exchange</li>
                                    </Link>
                                </>
                                : null

                            }


                            <Link to="blog">
                                <li>Blog</li>
                            </Link>

                            <Link to="faq">
                                <li>FAQ</li>
                            </Link>

                            <Link to="pricing">
                                <li>Pricing</li>
                            </Link>

                            <Link to="about-us">
                                <li>About Us</li>
                            </Link>

                            <li>
                                {/* <ThemeProvider theme={light ? themeLight : themeDark}>
                                    <CssBaseline />
                                    <Button onClick={() => setLight((prev) => !prev)}>Light</Button>
                                </ThemeProvider> */}
                            </li>






                        </ul>
                    </li>

                    <li className="button-area">



                        {username ? (
                            <>
                                <Link to="user-dashboard">
                                    <li>
                                        <div className="tooltip-container-div" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
                                            <img src={userAvatar} alt="user avatar" />
                                            {showTooltip && (
                                                <Tooltip content="This is a tooltip">
                                                    <div>Logout</div>
                                                </Tooltip>
                                            )}
                                        </div>

                                    </li>

                                </Link>
                            </>


                        ) :
                            <>
                                <Link to="login">
                                    <li id="signInBtn">Log In</li>
                                </Link>

                                <Link to="register-try-page">
                                    <li>Register</li>
                                </Link>

                            </>

                        }





                        <Link to="pricing">
                            <li id="getStartedBtn">Get Started</li>
                        </Link>



                    </li >



                </ul >
            </header >


        </>

    )
}