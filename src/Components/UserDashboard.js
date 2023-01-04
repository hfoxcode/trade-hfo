import React, { useEffect, useState } from "react"
import DefaultAvatar from "../img/default_avatar.svg";
import PnlChart from "../img/pnl_chart.png";
import PnlChartTwo from "../img/Pnl_day_chart_2.png"
import { Link } from "react-router-dom";
import settingsIcon from "../img/settings.png"
import JesseLivermore from "../img/jesse_livermore.png";
import arrow from "../img/arrow.png";
import axios from "axios";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";
import { set } from "react-hook-form";

export default function UserDashboard() {
    const [activeChallenge, setActiveChallenge] = useState(0);
    const [activePage, setActivePage] = useState("Dashboard");
    const [activeProfilePage, setActiveProfilePage] = useState(0);
    const [activeSettingsPage, setActiveSettingsPage] = useState(0);
    const [userId, setUserId] = useState();
    const [username, setUsername] = useState();
    const [balance, setBalance] = useState();
    const [challengeStatus, setChallengeStatus] = useState();
    const [referralCode, setReferralCode] = useState();
    const [monthlyPnl, setMonthlyPnl] = useState();

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
                    console.log(response.data);
                    setChallengeStatus(response.data.challenge)
                    setUsername(response.data.username);
                    setBalance(response.data.unRealBalance);
                    setReferralCode(response.data.referralCode);
                    setMonthlyPnl(response.data.monthlyPnL);
                    { response.data.challenge === 1 ? setActiveChallenge(1) : setActiveChallenge(0) }
                })
                .catch(error => {
                    // handle the error
                    console.error(error);
                });
        }
    }, []);

    console.log(challengeStatus);

    console.log(activeChallenge);

    return (

        <section className="user-dashboard">

            <div className="column first-column">
                <div className="option">
                    <Link to="/user-dashboard">
                        Profile
                    </Link>
                </div>
                <div className="option">
                    <Link to="../roadmap">
                        Roadmap
                    </Link>
                </div>


                <div className="option">
                    <Link to="../intro-roadmap">
                        How To Start
                    </Link>
                </div>

                <div className="option">
                    <Link to="../certificates">
                        Certificates
                    </Link>
                </div>

                <div className="option">
                    <Link to="../statistics">Statistics</Link>
                </div>

                <div className="option">
                    <Link to="../leaderboard">Leaderboard</Link>
                </div>
            </div>
            <div className="column">
                <div className="user-info">
                    <div className="user-avatar">
                        <img src={DefaultAvatar} alt="default ribu avatar" />
                    </div>
                    <div className="user-infos">
                        <div className="row">
                            <div className="username">{username}</div>
                        </div>
                        <div className="row">
                            <div className="tagges">
                                <div className="tag">User Id</div>
                                <div className="answer">{userId}</div>
                            </div>

                            <div className="tagges">
                                <div className="tag">User Status</div>
                                <div className="answer">{challengeStatus === 1 ? "Challenge Yok" : challengeStatus === 2 ? "1.Challenge" : "Approve"}</div>
                            </div>

                            <div className="tagges">
                                <div className="tag">Balance</div>
                                <div className="answer">{Number(balance).toFixed(2)}</div>
                            </div>

                            <div className="tagges">
                                <div className="tag">Refferal Code</div>
                                <div className="answer">{referralCode}</div>
                            </div>
                        </div>

                    </div>
                    <div className="settings-button-area">
                        {activeProfilePage === 1 ?

                            <div className="button" onClick={() => setActiveProfilePage(0)} >
                                <div>
                                    <img src={arrow} alt="back arrow" />
                                </div>
                            </div>



                            : null
                        }

                        <div className="button" onClick={() => setActiveProfilePage(1)}>
                            <div>
                                <img src={settingsIcon} alt="settings icon" />
                            </div>
                            <div>
                                Settings
                            </div>
                        </div>


                    </div>
                </div>

                <div className="user-area-container">
                    {activeChallenge === 0 ?

                        <div className="active-challenge">
                            <div>
                                <div className="icon-area">

                                </div>
                                <div className="title-area">
                                    Challenge: Approve
                                </div>
                                <div className="description">
                                    Your account 1037400 is ready, you can start trading now!
                                </div>
                            </div>
                            <div className="second-button-area">
                                <div className="button">
                                    <Link to="/exchange">
                                        Trade'e Başla!                                    </Link>

                                </div>
                                <div className="button">
                                    <Link to="/statistics">
                                        Account Stats
                                    </Link>

                                </div>
                                <div onClick={() => setActiveChallenge(3)}>
                                    X
                                </div>
                            </div>
                        </div>

                        : activeChallenge === 1 ?

                            <div className="active-challenge">
                                <div>
                                    <div className="icon-area">

                                    </div>
                                    <div className="title-area">
                                        Create a Challenge
                                    </div>
                                    <div className="description">
                                        Henüz bir challenge'a başlamadın. Challenge'a başlamak için bir paket satın al.
                                    </div>
                                </div>
                                <div className="second-button-area">

                                    <div className="button">
                                        <Link to="/buy-challenge">
                                            Create a New Challenge
                                        </Link>
                                    </div>


                                    <div onClick={() => setActiveChallenge(3)}>
                                        X
                                    </div>
                                </div>
                            </div>

                            :
                            <div></div>

                    }

                    {activeProfilePage === 0 ?


                        <div className="user-area-main">
                            <div className="inside-column">
                                <div className="welcome-back-area">
                                    <div className="wb-title">Welcome Back, {username}!</div>
                                </div>
                                <div className="balance-area">



                                    <div className="pnl-chart-area">
                                        <div className="row">
                                            <div className="title">
                                                PNL Analysis
                                            </div>
                                            <div className="description">
                                                İşte son 7/30 gündeki performansın. Performansını iyileştirmek için eğitim kısmımıza göz atabilirsin.
                                            </div>
                                        </div>

                                        <div className="row button-area">
                                            <div className="button">
                                                7 Days
                                            </div>
                                            <div className="button">
                                                30 Days
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="balance-chart">

                                                <img src={PnlChart} alt="pnl balance chart" />



                                            </div>
                                        </div>
                                        <div className="row">
                                            <Link to="../statistics">
                                                <div className="button">
                                                    Detailed Statistics
                                                </div>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inside-column">
                                <div className="cards-area">
                                    <div className="xxx">
                                        <div className="user-card">
                                            <div className="title-area">
                                                <div className="card-title">{challengeStatus === 1 ? "Challenge Yok" : challengeStatus === 2 ? "1.Challenge" : "Approve"}</div>
                                                <div className="card-description">{challengeStatus === 1 ? "Bir Challenge Sahibi Değilsin" : challengeStatus === 2 ? "1.Challenge Aşamasındasın" : "2. Challenge Aşamasındasın!"}</div>
                                            </div>

                                            <div className="user-challenge-rules">
                                                <div className="rule">Max Günlük Kayıp: 5%</div>
                                                <div className="rule">Max Aylık Kayıp: 5%</div>
                                                <div className="rule">Kar Hedefi: 5%</div>
                                                <div className="rule">Kalan Gün: 30</div>
                                            </div>

                                            <div className="roadmap-area">
                                                <div className="challenge-finish-bar-area">
                                                    <div className="width120px">
                                                        Challenge'ın tamamlanmasına 10% Profit kaldı!
                                                    </div>
                                                    <div className="line-area">
                                                        <div className="line" id="line1"></div>
                                                        <div className="line" id="line2"></div>
                                                    </div>
                                                </div>

                                                <div className="card-roadmap">
                                                    <div className="line-area">
                                                        <div className="dot" id="bgyellow">

                                                        </div>
                                                        <div className="line2">

                                                        </div>
                                                        <div className="dot">

                                                        </div>
                                                        <div className="line2">

                                                        </div>
                                                        <div className="dot">

                                                        </div>
                                                        <div className="line2">

                                                        </div>
                                                    </div>
                                                    <div className="step-area">
                                                        <div className="step">
                                                            Discover
                                                        </div>
                                                        <div className="step">
                                                            Approve
                                                        </div>
                                                        <div className="step">
                                                            Ribu Trader!
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="new-challenge-area">
                                                <Link to="../buy-challenge">
                                                    <div className="button">
                                                        New Challenge
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        : activeProfilePage === 1 ?
                            <div className="user-dashboard-settings">
                                <div className="column">
                                    <div className="row">
                                        <div className="top-bar">
                                            <div>Trader</div>
                                            <div>Profile</div>
                                            <div>Personal Information</div>
                                        </div>
                                        <div className="bottom-bar">
                                            <div onClick={() => setActiveSettingsPage(0)}>Personal Information</div>
                                            <div onClick={() => setActiveSettingsPage(1)}>Account Information</div>
                                            <div onClick={() => setActiveSettingsPage(2)}>Security</div>
                                        </div>
                                    </div>
                                    <div className="row">

                                        {activeSettingsPage === 0 ?

                                            <>
                                                <div className="form-area">
                                                    <form >
                                                        <div className="user-dashboard-title">Client</div>

                                                        <div className="input-area">
                                                            <label>
                                                                <input type="text" name="firstname" placeholder="First Name" />
                                                                <input type="text" name="lastname" placeholder="Last Name" />
                                                            </label>

                                                        </div>

                                                    </form>
                                                </div>
                                                <div className="row">
                                                    <div className="user-dashboard-title">Contact Info</div>
                                                    <div className="form-area">
                                                        <form >


                                                            <div className="input-area">
                                                                <label>
                                                                    <input type="text" name="contactphone" placeholder="Contact Phone" />
                                                                    <input type="text" name="email" placeholder="Email Address" />
                                                                </label>
                                                                <label>
                                                                    <input type="text" name="country" placeholder="Country" />
                                                                </label>
                                                                <label>
                                                                    <input type="text" name="city" placeholder="City" />
                                                                    <input type="text" name="street" placeholder="Street" />
                                                                </label>
                                                                <label>
                                                                    <input type="text" name="postalcode" placeholder="Postal Code" />
                                                                </label>

                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="button">Save</div>
                                                </div>
                                            </>



                                            : activeSettingsPage === 1 ?


                                                <>
                                                    <div className="form-area">
                                                        <form >
                                                            <div className="user-dashboard-title">Trading Settings</div>

                                                            <div className="input-area">

                                                                <label>
                                                                    <div>
                                                                        Hedge Mode:
                                                                    </div>
                                                                    <div className="button-area">
                                                                        <div className="button">Active</div>
                                                                        <div className="button">Deactive</div>
                                                                    </div>
                                                                </label>

                                                                <label>
                                                                    <div>
                                                                        Challenge Status:
                                                                    </div>
                                                                    <div className="challenge-status-area">
                                                                        <div>Discover</div>
                                                                        <div>Approve</div>
                                                                        <div>Certified Ribu Trader!</div>
                                                                    </div>
                                                                </label>

                                                                <label>
                                                                    <div>
                                                                        Account Leverage:
                                                                    </div>
                                                                    <div>

                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </form>
                                                    </div>

                                                    <div className="row">
                                                        <div className="button">Apply</div>
                                                    </div>
                                                </>

                                                : activeSettingsPage === 2 ?

                                                    <>
                                                        <div className="form-area">
                                                            <form >
                                                                <div className="user-dashboard-title">Password Security</div>

                                                                <div className="input-area">
                                                                    <label>
                                                                        <input type="text" name="current-password" placeholder="Current Password" />

                                                                    </label>
                                                                    <label>
                                                                        <input type="text" name="new-password" placeholder="New Password" />
                                                                        <input type="text" name="verify-password" placeholder="Verify Password" />
                                                                    </label>

                                                                </div>

                                                            </form>
                                                        </div>
                                                        <div className="row">
                                                            <div className="button">Change</div>
                                                        </div>
                                                    </>


                                                    : null
                                        }


                                    </div>
                                </div>
                                <div className="column">
                                    <div className="info-card-area">
                                        <div className="info-card">
                                            <div className="card-top">RIBU TRADING QUOTES</div>
                                            <div className="quote-mark">❝</div>
                                            <div className="quote-area">
                                                <div className="quote">
                                                    “The game taught me the game. And it didn’t spare me the rod while teaching.”
                                                </div>
                                            </div>
                                            <div className="quote-owner-image-area">
                                                <img src={JesseLivermore} alt="quote owner image" />
                                            </div>
                                            <div className="card-bottom">
                                                JESSE LIVERMORE
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>




                            : null
                    }



                </div>



            </div>


        </section >
    )
}