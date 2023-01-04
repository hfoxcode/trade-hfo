import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"

export default function BuyChallenge() {

    const [percentage1, setPercentage1] = useState(5);
    const [percentage2, setPercentage2] = useState(10);
    const [percentage3, setPercentage3] = useState(10);
    const [challengeType, setChallengeType] = useState(true);
    const [accountBalance, setAccountBalance] = useState(0);
    const [challengeProficiency, setChallengeProficiency] = useState(0);
    const [packagePrice, setPackagePrice] = useState(0);



      



    return (
        <section className="buy-challenge">
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
                    <Link to="../payment-area">Payment Area</Link>
                </div>

                <div className="option">
                    <Link to="../leaderboard">Leaderboard</Link>
                </div>
            </div>
            <div className="inside-column">
                <div className="title">
                    New Challenge
                </div>
                <div className="buy-challenge-container">
                    <div className="column">
                        <div className="selection-area">
                            <h2>Challenge Type</h2>
                            <div className="options">
                                <div className={challengeType === true ? "option bgColorYellow" : "option"} onClick={() => setChallengeType(true)}>Eğitimli</div>
                                <div className={challengeType === false ? "option bgColorYellow" : "option"} onClick={() => setChallengeType(false)}>Eğitimsiz</div>
                            </div>
                        </div>

                        <div className="selection-area">
                            <h2>Account Balance</h2>
                            <div className="options">
                                <div className={accountBalance === 0 ? "option bgColorYellow" : "option"} onClick={() => setAccountBalance(0)}>$5.000</div>
                                <div className={accountBalance === 1 ? "option bgColorYellow" : "option"} onClick={() => setAccountBalance(1)}>$10.000</div>
                                <div className={accountBalance === 2 ? "option bgColorYellow" : "option"} onClick={() => setAccountBalance(2)}>$25.000</div>
                            </div>
                        </div>


                        {/* <div className="customize-area">
                            <h3>Maximum Daily Loss</h3>
                            <div className="selection-bar">
                                <input type="range" onChange={(event) => setPercentage1(event.target.value)} value={percentage1} />
                                <div style={{ width: `${percentage1}%` }}>{percentage1}%</div>
                            </div>
                        </div>

                        <div className="customize-area">
                            <h3>Maximum Monthly Loss</h3>
                            <div className="selection-bar">
                                <input type="range" onChange={(event) => setPercentage2(event.target.value)} value={percentage2} />
                                <div style={{ width: `${percentage2}%` }}>{percentage2}%</div>
                            </div>
                        </div>

                        <div className="customize-area">
                            <h3>Profit Target</h3>
                            <div className="selection-bar">
                                <input type="range" onChange={(event) => setPercentage3(event.target.value)} value={percentage3} />
                                <div style={{ width: `${percentage3}%` }}>{percentage3}%</div>
                            </div>
                        </div> */}

                        <div className="selection-area">
                            <h2>Account Proficiency</h2>
                            <div className="options">
                                <div className={challengeProficiency === 2 ? "option bgColorYellow" : "option"} onClick={() => setChallengeProficiency(2)}>Starter</div>
                                <div className={challengeProficiency === 1 ? "option bgColorYellow" : "option"} onClick={() => setChallengeProficiency(1)}>Normal</div>
                                <div className={challengeProficiency === 0 ? "option bgColorYellow" : "option"} onClick={() => setChallengeProficiency(0)}>Pro</div>
                            </div>
                        </div>

                        <div className="package-features">
                            <div className="feature">
                                <h3>
                                    Max Daily Loss:
                                </h3>
                                <div className="feature-description">{challengeProficiency === 0 ? "5%" : challengeProficiency === 1 ? "8%" : "10%"}</div>
                            </div>
                            <div className="feature">
                                <h3>
                                    Max Monthly Loss:
                                </h3>
                                <div className="feature-description">{challengeProficiency === 0 ? "10%" : challengeProficiency === 1 ? "12%" : "15%"}</div>
                            </div>
                            <div className="feature">
                                <h3>
                                    Profit Target:
                                </h3>
                                <div className="feature-description">{challengeProficiency === 0 ? "10%" : challengeProficiency === 1 ? "8%" : "6%"}</div>
                            </div>
                        </div>

                        <div className="extra-features">
                            <h3>Time Restriction:</h3>
                            <p>30 Days</p>
                        </div>

                        <div className="extra-features">
                            <h3>Education:</h3>
                            <p>Yes!</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="benefits-area">
                            <div className="title">
                                Benefits of Package
                            </div>
                            <ul>
                                <li>Profesyonel trade ekibimiz tarafından hazırlanan eğitim videolarını izleyerek quizleri geç.</li>
                                <li>Bu sayede trade becerilerinizi geliştirin ve piyasada başarılı olmaya adım atın.</li>
                                <li>Eğitim Pakedinde de direkt olarak Challenge aşamasına başlayabilirsiniz.</li>
                            </ul>

                        </div>
                        <div className="line">
                            <div></div>
                        </div>
                        <div className="price-area">
                            <h3>Price</h3>
                            <h1>50</h1>
                            <Link to="../payment-area">
                                <div className="button">Pay</div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>



        </section>
    )
}