import React from "react"
import icon_discover from "../img/congrats_icon.png"

export default function Challenger() {
    return (

        <>
            <section className="challenger">
                <div className="title">
                    Challenger Roadmap
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

            </section>
            <section className="challenge-table">
                <div className="table-container">
                    <div className="row1-container">
                        <div className="row-1">
                            <div className="area-1">
                                <h4>5.000$</h4>
                                <h4>10.000$</h4>
                                <h4>25.000$</h4>
                                <h4>100.000$</h4>
                            </div>
                            <div className="area-2">
                                <h4>Normal</h4>
                                <h4>Aggressive</h4>
                            </div>
                        </div>
                    </div>


                    <div className="row-2">
                        <table>
                            <tbody>
                                <tr>
                                    <div className="titlex">Trading Period</div>
                                    <div className="content-area">
                                        <td>30 Days</td>
                                        <td>60 Days</td>
                                        <td>indefinite</td>
                                    </div>
                                </tr>
                                <tr>
                                    <div className="titlex">Minimum Trading Days</div>
                                    <div className="content-area">
                                        <td>10 Days</td>
                                        <td>10 Days</td>
                                        <td>X</td>
                                    </div>
                                </tr>
                                <tr>
                                    <div className="titlex">Maximum Daily Loss</div>
                                    <div className="content-area">
                                        <td>$500</td>
                                        <td>$500</td>
                                        <td>$500</td>
                                    </div>
                                </tr>
                                <tr>
                                    <div className="titlex">Maximum Loss</div>
                                    <div className="content-area">
                                        <td>$1000</td>
                                        <td>$1000</td>
                                        <td>$1000</td>
                                    </div>
                                </tr>
                                <tr>
                                    <div className="titlex">Profit Target</div>
                                    <div className="content-area">
                                        <td>$1000</td>
                                        <td>$1000</td>
                                        <td>X</td>
                                    </div>
                                </tr>
                                <tr>
                                    <div className="titlex">Refundable Fee</div>
                                    <div className="content-area">
                                        <td>$100</td>
                                        <td>Free</td>
                                        <td>refund</td>
                                    </div>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="button-area">
                        <div className="button">
                            BUY
                        </div>
                    </div>

                </div>
            </section >

        </>

    )
}