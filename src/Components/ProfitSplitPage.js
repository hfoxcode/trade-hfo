import React from "react"
import { Link } from "react-router-dom"

export default function ProfitSplitPage() {
    return (
        <section className="profit-split-page">
            <div className="column first-column">
                <div className="option">Profile</div>
                <div className="option">Trading Area</div>
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
                    <Link to="../payout">
                        Payout
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

                <div className="option">Settings</div>
            </div>
            <div className="profit-split-page-container">
                <div className="title-area">
                    <div className="title">Withdrawals</div>

                    <div className="description">
                        This is where the configuration of all your future profit split requests begins and you can easily keep track of your current and past withdrawals. Once you generate profits and trade for the relevant period, you can continue with your withdrawal request on this page.
                    </div>
                </div>
                <div className="table-area">
                    <div className="table">
                        <div className="title">
                            Upcoming Profit Splits
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Account</td>
                                    <td>Account Size</td>
                                    <td>Account Balance</td>
                                    <td>Profit</td>
                                    <td>Payout Date</td>
                                    <td>Payout Account</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>00123123</td>
                                    <td>$10.000,00</td>
                                    <td>$10.801,00</td>
                                    <td>$801,00</td>
                                    <td>22.12.2022</td>
                                    <td>xxx</td>
                                </tr>
                                <tr>
                                    <td>00123123</td>
                                    <td>$10.000,00</td>
                                    <td>$10.801,00</td>
                                    <td>$801,00</td>
                                    <td>22.12.2022</td>
                                    <td>xxx</td>
                                </tr>
                                <tr>
                                    <td>00123123</td>
                                    <td>$10.000,00</td>
                                    <td>$10.801,00</td>
                                    <td>$801,00</td>
                                    <td>22.12.2022</td>
                                    <td>xxx</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table">
                        <div className="title">
                            Withdrawal History
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Account</td>
                                    <td>Account Size</td>
                                    <td>Account Balance</td>
                                    <td>Profit</td>
                                    <td>Payout Date</td>
                                    <td>Payout Account</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>00123123</td>
                                    <td>$10.000,00</td>
                                    <td>$10.801,00</td>
                                    <td>$801,00</td>
                                    <td>22.12.2022</td>
                                    <td>xxx</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}