import React from "react"
import { Link } from "react-router-dom"
import trophy from "../img/trophy.png"
import turkey from "../img/turkey.png";

export default function Leaderboard() {
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
                <div className="title">LEADERBOARD</div>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Profit</td>
                            <td>Equity</td>
                            <td>Account Size</td>
                            <td>Gain %</td>
                            <td>Country</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={trophy} alt="trophy" /></td>
                            <td>Berkay H.</td>
                            <td>$170,909.57</td>
                            <td>$370,909.57</td>
                            <td>$200,000.00</td>
                            <td>85%</td>
                            <td>
                                <div><img src={turkey} alt="turkey flag icon" /> Turkey </div>

                            </td>

                        </tr>
                        <tr>
                            <td><img src={trophy} alt="trophy" /></td>
                            <td>Berkay H.</td>
                            <td>$170,909.57</td>
                            <td>$370,909.57</td>
                            <td>$200,000.00</td>
                            <td>85%</td>
                            <td>
                                <div><img src={turkey} alt="turkey flag icon" /> Turkey </div>

                            </td>

                        </tr>
                        <tr>
                            <td><img src={trophy} alt="trophy" /></td>
                            <td>Berkay H.</td>
                            <td>$170,909.57</td>
                            <td>$370,909.57</td>
                            <td>$200,000.00</td>
                            <td>85%</td>
                            <td>
                                <div><img src={turkey} alt="turkey flag icon" /> Turkey </div>

                            </td>

                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Berkay H.</td>
                            <td>$170,909.57</td>
                            <td>$370,909.57</td>
                            <td>$200,000.00</td>
                            <td>85%</td>
                            <td>
                                <div><img src={turkey} alt="turkey flag icon" /> Turkey </div>

                            </td>

                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Berkay H.</td>
                            <td>$170,909.57</td>
                            <td>$370,909.57</td>
                            <td>$200,000.00</td>
                            <td>85%</td>
                            <td>
                                <div><img src={turkey} alt="turkey flag icon" /> Turkey </div>

                            </td>

                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Berkay H.</td>
                            <td>$170,909.57</td>
                            <td>$370,909.57</td>
                            <td>$200,000.00</td>
                            <td>85%</td>
                            <td>
                                <div><img src={turkey} alt="turkey flag icon" /> Turkey </div>

                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Berkay H.</td>
                            <td>$170,909.57</td>
                            <td>$370,909.57</td>
                            <td>$200,000.00</td>
                            <td>85%</td>
                            <td>
                                <div><img src={turkey} alt="turkey flag icon" /> Turkey </div>

                            </td>

                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Berkay H.</td>
                            <td>$170,909.57</td>
                            <td>$370,909.57</td>
                            <td>$200,000.00</td>
                            <td>85%</td>
                            <td>
                                <div><img src={turkey} alt="turkey flag icon" /> Turkey </div>

                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>

        </section>
    )
}