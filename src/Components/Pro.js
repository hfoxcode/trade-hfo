import React from "react"
import icon_discover from "../img/congrats_icon.png"


export default function Pro() {
    return (
        <>
            <section className="challenger">
                <div className="title">
                    Pro Roadmap
                </div>
                <div className="column-container">
                    <div className="columns">
                        <div className="row--1">
                            <img src={icon_discover} alt="discover icon"></img>
                            <h4>Direct Earn</h4>
                        </div>
                        <div className="row--2">
                            <div className="description">
                                <p>No Demo Challenge!</p>

                                <p>No Time Restriction</p>

                                <p>In direct earn mode, you can start to manage the real fund you purchased directly, and you can withdraw the amount you earn directly.</p>
                            </div>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="row--1">
                            <img src={icon_discover} alt="approve icon"></img>
                            <h4>Duplicate Your Funds</h4>
                        </div>
                        <div className="row--2">
                            <div className="description">
                                <p>
                                    Every 10% profit you make in risky mode moves you to the next milestone. For each mileton, the amount of funds you manage doubles by 2 and 1.5 times, respectively. Click to view Milestonels.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="row--1">
                            <img src={icon_discover} alt="jacfolder icon"></img>
                            <h4>Share 50% of your Profit</h4>
                        </div>
                        <div className="row--2">
                            <div className="description">
                                <p>Withdraw 50% of your profit in risky mode. For every 10%, your fund should be doubled or multiplied by 1.5.</p>

                                <p>Good luck!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="package-table">
                    <div className="package">
                        <div className="package-title">
                            Package-1
                        </div>
                        <div className="package-description">
                            <p>Balance: $350</p>
                            <p>Maximum Daily Loss: 5%</p>
                            <p>Profit Target for Next Milestone : $35</p>
                        </div>
                        <div className="package-price">
                            $20
                        </div>
                    </div>
                    <div className="package">
                        <div className="package-title">
                            Package-2
                        </div>
                        <div className="package-description">
                            <p>Balance: $900</p>
                            <p>Maximum Loss: 5%</p>
                            <p>Profit Target for Next Milestone : $90</p>
                        </div>
                        <div className="package-price">
                            $50
                        </div>
                    </div>
                    <div className="package">
                        <div className="package-title">
                            Package-3
                        </div>
                        <div className="package-description">
                            <p>Balance: $1850</p>
                            <p>Maximum Loss: 5%</p>
                            <p>Profit Target for Next Milestone : $185</p>
                        </div>
                        <div className="package-price">
                            $100
                        </div>
                    </div>
                    <div className="package">
                        <div className="package-title">
                            Package-4
                        </div>
                        <div className="package-description">
                            Balance: $4750
                            Maximum Loss: 5%
                            Profit Target for Next Milestone : $475
                        </div>
                        <div className="package-price">
                            $250
                        </div>
                    </div>
                </section >

            </section>
        </>
    )
}