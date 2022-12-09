import React, { useEffect, useState } from "react"
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";
import axios from "axios";



// const themeLight = createTheme({
//     palette: {
//         background: {
//             default: "#e4f0e2"
//         }

//     }
// });

// const themeDark = createTheme({
//     palette: {
//         background: {
//             default: "#222222"
//         },
//         text: {
//             primary: "#ffffff"
//         }
//     }
// });

// const themeSidebar = createTheme({
//     paper: {
//         background:"#151515",
//     }
// })

// const useStyles = makeStyles({
//     paper: {
//         background: '#151515',
//         color:'white',

//     },
//     root: {
//         background: 'red',
//     },
// });





export default function Header() {

    const [light, setLight] = React.useState(true);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
                            <Link to="/how-it-works">
                                <li>How It Works</li>
                            </Link>

                            <li >FAQ</li>

                            <Link to="pricing">
                                <li>Pricing</li>
                            </Link>

                            <Link to="user-dashboard">
                                <li>User Dashboard</li>
                            </Link>



                            <Link to="about-us">
                                <li>About Us</li>
                            </Link>

                            <Link to="register-try-page">
                                <li>Register</li>
                            </Link>

                            <Link to="roadmap">
                                <li>Roadmap</li>
                            </Link>

                            <Link to="intro-roadmap">
                                <li>Intro Roadmap</li>
                            </Link>

                            <Link to="payment-area">
                                <li>Payment Area</li>
                            </Link>

                            <li>
                                {/* <ThemeProvider theme={light ? themeLight : themeDark}>
                                    <CssBaseline />
                                    <Button onClick={() => setLight((prev) => !prev)}>Light</Button>
                                </ThemeProvider> */}
                            </li>




                        </ul>
                    </li>

                    <li>
                        <ul className="button-area">
                            <Link to="login">
                                <li id="signInBtn">Log In</li>
                            </Link>

                            <li id="getStartedBtn">Get Started</li>


                        </ul>
                    </li>



                </ul>
            </header>


        </>

    )
}