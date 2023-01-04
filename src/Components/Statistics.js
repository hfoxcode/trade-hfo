import React from "react"
import { Link } from "react-router-dom";
import pnlchart from "../img/pnl_chart.png";
import statImage from "../img/stat-image.png";
import bitcoin from "../img/bitcoin-user-dashboard.png";
import tffBalanceChart from "../img/tff-balance-chart.png"
import tffDailyReturnsChart from "../img/tff-daily-returns-chart.png";
import winsLossesChart from "../img/tff-wins-n-losses-charts.png"
import profitsByHoldingTimeCharts from "../img/tff-profits-by-holding-times-charts.png";
import profitIcon from "../img/profit.png";
import tffBuySellCharts from "../img/tff-buy-sell-charts.png";
import tffDirectionAllocationCharts from "../img/tff-direction-allocation-charts.png";
import tffSymbolsCharts from "../img/tff-symbols-charts.png";
import tffSymbolsAllocationsCharts from "../img/tff-symbols-allocations-charts.png";

export default function Statistics() {
    return (
        <section className="statistics">
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
            <div className="statistics-container">
                <div className="statistics-header">
                    <div className="account-area">
                        <div>
                            <img src={bitcoin} alt="bitcoin logo" />
                        </div>
                        <div className="account-id">
                            Account 1030412
                        </div>
                        <div className="active-or-inactive">
                            Inactive
                        </div>
                    </div>
                    <div className="detail-area">
                        <div className="buttons-container">
                            <div>Share</div>
                        </div>
                        <div className="create-date">
                            <div className="colorGray">
                                Created:
                            </div>
                            <div>
                                Nov 29, 2022
                            </div>
                        </div>


                    </div>
                </div>
                <div className="statistics-1">
                    <div className="row">
                        <div className="balance-area">
                            <div className="title-area">
                                <h2>Balance Chart</h2>
                            </div>
                            <div className="data-area">
                                <img src={tffBalanceChart} alt="Tff balance chart" />
                            </div>
                        </div>
                        <div className="account-info-area">
                            <div className="title-area">
                                <h2>Phase 1 Account</h2>
                                <div className="passed-not-passed-btn">
                                    Passed
                                </div>
                            </div>
                            <div className="data-area">
                                <div className="data-area-box">
                                    <table>
                                        <tr>
                                            <td>Deposit:</td>
                                            <td>$10.000</td>
                                        </tr>
                                        <tr>
                                            <td>Start Date:</td>
                                            <td>Nov 29, 2022, 4:54:24 AM</td>
                                        </tr>
                                        <tr>
                                            <td>End date</td>
                                            <td>Dec 17, 2022, 12:39:47 AM</td>
                                        </tr>
                                        <tr>
                                            <td>Challenge Status:</td>
                                            <td>2. Aşama!</td>
                                        </tr>
                                        <tr>
                                            <td>Balance:</td>
                                            <td>$10,801.18</td>
                                        </tr>
                                        <tr>
                                            <td>Equity:</td>
                                            <td>$10,801.18</td>
                                        </tr>
                                        <tr>
                                            <td>Last update:</td>
                                            <td>Dec 17, 2022, 12:39:47 AM</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="small-boxes">
                            <div className="title-area">
                                <div className="title">
                                    Balance
                                </div>
                                <div className="inside-value">
                                    +$801.18
                                </div>
                            </div>
                            <div className="outside-value">
                                $10,801.18
                            </div>
                        </div>
                        <div className="small-boxes">
                            <div className="title-area">
                                <div className="title">
                                    Equity
                                </div>
                                <div className="inside-value">
                                    +$801.18
                                </div>
                            </div>
                            <div className="outside-value">
                                $10,801.18
                            </div>
                        </div>
                        <div className="small-boxes">
                            <div className="title-area">
                                <div className="title">
                                    Today's Permitted Loss
                                </div>
                                <div className="inside-value">
                                </div>
                            </div>
                            <div className="outside-value">
                                $1300
                            </div>
                        </div>
                        <div className="small-boxes">
                            <div className="title-area">
                                <div className="title">
                                    Max. Permitted Loss
                                </div>
                                <div className="inside-value">
                                </div>
                            </div>
                            <div className="outside-value">
                                +$1,801.18
                            </div>
                        </div>
                        <div className="small-boxes">
                            <div className="title-area">
                                <div className="title">
                                    Today's Profit
                                </div>
                                <div className="inside-value">
                                </div>
                            </div>
                            <div className="outside-value">
                                +$801.18
                            </div>
                        </div>
                    </div>
                </div>
                <div className="statistics-2">
                    <div className="row">
                        <div className="title-area">
                            <div className="title">
                                Trading Objectives
                            </div>
                        </div>
                        <div className="boxes-area">
                            <div className="wider-boxes">
                                <div className="wider-boxes-header">
                                    <div className="passed-not-passed-btn">Passed</div>
                                    <div className="title">Max Daily Loss</div>
                                    <div className="objective">$500.00</div>
                                </div>
                                <div className="wider-boxes-description">
                                    <div className="colorGray">Result:</div>
                                    <div>-$490.03</div>
                                </div>
                            </div>
                            <div className="wider-boxes">
                                <div className="wider-boxes-header">
                                    <div className="passed-not-passed-btn">Passed</div>
                                    <div className="title">Max Loss</div>
                                    <div className="objective">$1000.00</div>
                                </div>
                                <div className="wider-boxes-description">
                                    <div className="colorGray">Result:</div>
                                    <div>-$825.56</div>
                                </div>
                            </div>
                            <div className="wider-boxes">
                                <div className="wider-boxes-header">
                                    <div className="passed-not-passed-btn">Passed</div>
                                    <div className="title">Profit Target</div>
                                    <div className="objective">$800.00</div>
                                </div>
                                <div className="wider-boxes-description">
                                    <div className="colorGray">Result:</div>
                                    <div>$801.18</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="statistics-3">
                    <div className="daily-summary">
                        <div className="title">
                            Daily Summary
                        </div>
                        <div className="daily-summary-box">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Time</td>
                                        <td>Trades</td>
                                        <td>Volume</td>
                                        <td>Result</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Dec 14, 2022</td>
                                        <td>35</td>
                                        <td>$414.000</td>
                                        <td>+$1,049.75</td>
                                    </tr>
                                    <tr>
                                        <td>Dec 14, 2022</td>
                                        <td>35</td>
                                        <td>$414.000</td>
                                        <td>+$1,049.75</td>
                                    </tr>
                                    <tr>
                                        <td>Dec 14, 2022</td>
                                        <td>35</td>
                                        <td>$414.000</td>
                                        <td>+$1,049.75</td>
                                    </tr>
                                    <tr>
                                        <td>Dec 14, 2022</td>
                                        <td>35</td>
                                        <td>$414.000</td>
                                        <td>+$1,049.75</td>
                                    </tr>
                                    <tr>
                                        <td>Dec 14, 2022</td>
                                        <td>35</td>
                                        <td>$414.000</td>
                                        <td>+$1,049.75</td>
                                    </tr>
                                    <tr>
                                        <td>Dec 14, 2022</td>
                                        <td>35</td>
                                        <td>$414.000</td>
                                        <td>+$1,049.75</td>
                                    </tr>
                                    <tr>
                                        <td>Dec 14, 2022</td>
                                        <td>35</td>
                                        <td>$414.000</td>
                                        <td>+$1,049.75</td>
                                    </tr>
                                    <tr>
                                        <td>Dec 14, 2022</td>
                                        <td>35</td>
                                        <td>$414.000</td>
                                        <td>+$1,049.75</td>
                                    </tr>
                                    <tr>
                                        <td>Dec 14, 2022</td>
                                        <td>35</td>
                                        <td>$414.000</td>
                                        <td>+$1,049.75</td>
                                    </tr>
                                    <tr>
                                        <td>Dec 14, 2022</td>
                                        <td>35</td>
                                        <td>$414.000</td>
                                        <td>+$1,049.75</td>
                                    </tr>
                                    <tr>
                                        <td>Dec 14, 2022</td>
                                        <td>35</td>
                                        <td>$414.000</td>
                                        <td>+$1,049.75</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="daily-returns">
                        <img src={tffDailyReturnsChart} alt="daily returns chart" />
                    </div>
                </div>
                <div className="statistics-4">
                    <div className="win-losses">
                        <div className="title">
                            Wins & Losses
                        </div>
                        <div className="image-container">
                            <img src={winsLossesChart} alt="wins & losses charts" />
                        </div>
                    </div>
                    <div className="profits-by-holding-time">
                        <div className="title">
                            Profit by Holding time
                        </div>
                        <div className="image-container">
                            <img src={profitsByHoldingTimeCharts} alt="profits by holding time charts" />
                        </div>
                    </div>
                </div>
                <div className="statistics-5">
                    <div className="title">
                        Statistics
                    </div>
                    <div className="row">
                        <div className="statistics-boxes">
                            <div className="info-area">
                                <div className="info-area-title">
                                    Best trade
                                </div>
                                <div className="info-area-value">
                                    $232.00
                                </div>
                            </div>
                            <div className="icon-area">
                                <img src={profitIcon} alt="profit icon" />
                            </div>
                        </div>
                        <div className="statistics-boxes">
                            <div className="info-area">
                                <div className="info-area-title">
                                    Worst trade
                                </div>
                                <div className="info-area-value">
                                    -$78.00
                                </div>
                            </div>
                            <div className="icon-area">
                                <img src={profitIcon} alt="profit icon" />
                            </div>
                        </div>
                        <div className="statistics-boxes">
                            <div className="info-area">
                                <div className="info-area-title">
                                    No. of Trades
                                </div>
                                <div className="info-area-value">
                                    94
                                </div>
                            </div>
                            <div className="icon-area">
                                <img src={profitIcon} alt="profit icon" />
                            </div>
                        </div>
                        <div className="statistics-boxes">
                            <div className="info-area">
                                <div className="info-area-title">
                                    Total Volume of Trades
                                </div>
                                <div className="info-area-value">
                                    $100.000
                                </div>
                            </div>
                            <div className="icon-area">
                                <img src={profitIcon} alt="profit icon" />
                            </div>
                        </div>
                        <div className="statistics-boxes">
                            <div className="info-area">
                                <div className="info-area-title">
                                    Win Rate
                                </div>
                                <div className="info-area-value">
                                    41%
                                </div>
                            </div>
                            <div className="icon-area">
                                <img src={profitIcon} alt="profit icon" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="statistics-boxes">
                            <div className="info-area">
                                <div className="info-area-title">
                                    Average Win
                                </div>
                                <div className="info-area-value">
                                    $61.18
                                </div>
                            </div>
                            <div className="icon-area">
                                <img src={profitIcon} alt="profit icon" />
                            </div>
                        </div>
                        <div className="statistics-boxes">
                            <div className="info-area">
                                <div className="info-area-title">
                                    Average Loss
                                </div>
                                <div className="info-area-value">
                                    -$29.35
                                </div>
                            </div>
                            <div className="icon-area">
                                <img src={profitIcon} alt="profit icon" />
                            </div>
                        </div>
                        <div className="statistics-boxes">
                            <div className="info-area">
                                <div className="info-area-title">
                                    Average RR
                                </div>
                                <div className="info-area-value">
                                    2.08
                                </div>
                            </div>
                            <div className="icon-area">
                                <img src={profitIcon} alt="profit icon" />
                            </div>
                        </div>
                        <div className="statistics-boxes">
                            <div className="info-area">
                                <div className="info-area-title">
                                    Expectancy
                                </div>
                                <div className="info-area-value">
                                    $8.52
                                </div>
                            </div>
                            <div className="icon-area">
                                <img src={profitIcon} alt="profit icon" />
                            </div>
                        </div>
                        <div className="statistics-boxes">
                            <div className="info-area">
                                <div className="info-area-title">
                                    Profit Factor
                                </div>
                                <div className="info-area-value">
                                    1.51
                                </div>
                            </div>
                            <div className="icon-area">
                                <img src={profitIcon} alt="profit icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="statistics-6">
                    <div className="column">
                        <div className="title">
                            Buy / Sell
                        </div>
                        <div className="image-area">
                            <img src={tffBuySellCharts} alt="buy sell charts image" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="title">
                            Direction Allocations
                        </div>
                        <div className="image-area">
                            <img src={tffDirectionAllocationCharts} alt="direction allocation charts image" />
                        </div>
                    </div>

                </div>
                <div className="statistics-6">
                    <div className="column">
                        <div className="title">
                            Symbol
                        </div>
                        <div className="image-area">
                            <img src={tffSymbolsCharts} alt="symbol charts image" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="title">
                            Symbol Allocation
                        </div>
                        <div className="image-area">
                            <img src={tffSymbolsAllocationsCharts} alt="symbol allocation charts image" />
                        </div>
                    </div>

                </div>

                <div className="statistics-8">
                    <div className="title">
                        Trade History
                    </div>

                    <div className="trade-history-table-area">
                        <table>
                            <thead>
                                <tr>
                                    <td>Open Date</td>
                                    <td>Direction</td>
                                    <td>Symbol</td>
                                    <td>Size</td>
                                    <td>Open Price</td>
                                    <td>Close Date</td>
                                    <td>Close Price</td>
                                    <td>Duration</td>
                                    <td>Commission</td>
                                    <td>Profit</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Dec 14, 2022, 10:58:41 PM</td>
                                    <td>Buy</td>
                                    <td>BTCUSDT</td>
                                    <td>$10.000</td>
                                    <td>$19.000</td>
                                    <td>Dec 14, 2022, 10:58:47 PM</td>
                                    <td>$19.900</td>
                                    <td>00:00:06</td>
                                    <td>-$1.18</td>
                                    <td>+$2.82</td>
                                </tr>
                                <tr>
                                    <td>Dec 14, 2022, 10:58:41 PM</td>
                                    <td>Buy</td>
                                    <td>BTCUSDT</td>
                                    <td>$10.000</td>
                                    <td>$19.000</td>
                                    <td>Dec 14, 2022, 10:58:47 PM</td>
                                    <td>$19.900</td>
                                    <td>00:00:06</td>
                                    <td>-$1.18</td>
                                    <td>+$2.82</td>
                                </tr>
                                <tr>
                                    <td>Dec 14, 2022, 10:58:41 PM</td>
                                    <td>Buy</td>
                                    <td>BTCUSDT</td>
                                    <td>$10.000</td>
                                    <td>$19.000</td>
                                    <td>Dec 14, 2022, 10:58:47 PM</td>
                                    <td>$19.900</td>
                                    <td>00:00:06</td>
                                    <td>-$1.18</td>
                                    <td>+$2.82</td>
                                </tr>
                                <tr>
                                    <td>Dec 14, 2022, 10:58:41 PM</td>
                                    <td>Buy</td>
                                    <td>BTCUSDT</td>
                                    <td>$10.000</td>
                                    <td>$19.000</td>
                                    <td>Dec 14, 2022, 10:58:47 PM</td>
                                    <td>$19.900</td>
                                    <td>00:00:06</td>
                                    <td>-$1.18</td>
                                    <td>+$2.82</td>
                                </tr>
                                <tr>
                                    <td>Dec 14, 2022, 10:58:41 PM</td>
                                    <td>Buy</td>
                                    <td>BTCUSDT</td>
                                    <td>$10.000</td>
                                    <td>$19.000</td>
                                    <td>Dec 14, 2022, 10:58:47 PM</td>
                                    <td>$19.900</td>
                                    <td>00:00:06</td>
                                    <td>-$1.18</td>
                                    <td>+$2.82</td>
                                </tr>
                                <tr>
                                    <td>Dec 14, 2022, 10:58:41 PM</td>
                                    <td>Buy</td>
                                    <td>BTCUSDT</td>
                                    <td>$10.000</td>
                                    <td>$19.000</td>
                                    <td>Dec 14, 2022, 10:58:47 PM</td>
                                    <td>$19.900</td>
                                    <td>00:00:06</td>
                                    <td>-$1.18</td>
                                    <td>+$2.82</td>
                                </tr>
                                <tr>
                                    <td>Dec 14, 2022, 10:58:41 PM</td>
                                    <td>Buy</td>
                                    <td>BTCUSDT</td>
                                    <td>$10.000</td>
                                    <td>$19.000</td>
                                    <td>Dec 14, 2022, 10:58:47 PM</td>
                                    <td>$19.900</td>
                                    <td>00:00:06</td>
                                    <td>-$1.18</td>
                                    <td>+$2.82</td>
                                </tr>
                                <tr>
                                    <td>Dec 14, 2022, 10:58:41 PM</td>
                                    <td>Buy</td>
                                    <td>BTCUSDT</td>
                                    <td>$10.000</td>
                                    <td>$19.000</td>
                                    <td>Dec 14, 2022, 10:58:47 PM</td>
                                    <td>$19.900</td>
                                    <td>00:00:06</td>
                                    <td>-$1.18</td>
                                    <td>+$2.82</td>
                                </tr>
                                <tr>
                                    <td>Dec 14, 2022, 10:58:41 PM</td>
                                    <td>Buy</td>
                                    <td>BTCUSDT</td>
                                    <td>$10.000</td>
                                    <td>$19.000</td>
                                    <td>Dec 14, 2022, 10:58:47 PM</td>
                                    <td>$19.900</td>
                                    <td>00:00:06</td>
                                    <td>-$1.18</td>
                                    <td>+$2.82</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </section >
    )
}