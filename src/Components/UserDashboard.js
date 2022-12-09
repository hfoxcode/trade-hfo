import React, { useState } from "react"
import DefaultAvatar from "../img/default_avatar.svg";
import PnlChart from "../img/pnl_chart.png";
import PnlChartTwo from "../img/Pnl_day_chart_2.png"
import { Link } from "react-router-dom";

export default function UserDashboard() {
    const [activePage, setActivePage] = useState("Dashboard");
    return (
        <section className="user-dashboard">
            <div className="column first-column">
                <div className="option">Profile</div>
                <div className="option">Trading Area</div>
                <div className="option">
                    <Link to="../education">
                        Education
                    </Link>
                </div>

                <div className="option"><Link to="../education/quizzes">
                    Quizzes
                </Link></div>
                <div className="option">Challenges</div>
                <div className="option">Settings</div>
            </div>
            <div className="column">
                <div className="user-info">
                    <div className="user-avatar">
                        <img src={DefaultAvatar} alt="default ribu avatar" />
                    </div>
                    <div className="user-infos">
                        <div className="row">
                            <div className="username">Berkayhfo</div>
                        </div>
                        <div className="row">
                            <div className="tagges">
                                <div className="tag">User Id</div>
                                <div className="answer">213123</div>
                            </div>

                            <div className="tagges">
                                <div className="tag">User Status</div>
                                <div className="answer">In First Challenge</div>
                            </div>

                            <div className="tagges">
                                <div className="tag">Balance</div>
                                <div className="answer">$10.000</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="user-area-container">
                    <div className="column">
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
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="cards-area">
                            <div className="xxx">
                                <div className="user-card">
                                    <div className="title-area">
                                        <div className="card-title">Approve</div>
                                        <div className="card-description">İkinci Challenge Aşamasındasın!</div>
                                    </div>

                                    <div className="user-challenge-rules">
                                        <div className="rule">Max Günlük Kayıp: 5%</div>
                                        <div className="rule">Max Aylık Kayıp: 5%</div>
                                        <div className="rule">Kar Hedefi: 5%</div>
                                        <div className="rule">Kalan Gün: 30</div>
                                    </div>

                                    <div className="roadmap-area">
                                        <div className="challenge-finish-bar-area">
                                            <div>
                                                Challenge'ın tamamlanmasına %2 Profit kaldı!
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
                                                <div className="line2" id="bgyellow">

                                                </div>
                                                <div className="dot" id="bgyellow">

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

                                </div>
                            </div>
                        </div>
                    </div>


                </div>



            </div>
        </section >
    )
}