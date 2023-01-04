import React from "react"
import HowToTrade101 from "../img/how-to-trade-101.jpg"
import likeIcon from "../img/like.png";
import twitterIcon from "../img/twitter-icon.png";
import arrowIconPng from "../img/arrow.png";
import { Link } from "react-router-dom";
import blogTextImage from "../img/blog-text-image.png";
import clock from "../img/clock.png";
import telegramIcon from "../img/telegram-icon.png"
import discordIcon from "../img/discord-icon.png"

export default function BlogPage() {
    return (
        <section className="blog-page">
            <div className="title-area">
                <Link to="/blog">
                    <div className="arrow-icon-area">
                        <img src={arrowIconPng} alt="arrow icon" />
                    </div>
                </Link>
                <div className="title">
                    Ribu Blog
                </div>
            </div>
            <div className="blog-page-area">
                <div className="column">
                    <div className="blog-title">
                        <div className="top-title">
                            How To Trade 101
                        </div>
                        <div className="description-title">
                            2022-12-29
                        </div>
                    </div>
                    <div className="text-area">
                        <div className="blog-inside-title">
                            Main Takeaways
                        </div>
                        <p>
                            There was a time years ago when the only people able to trade actively in the stock market were those working for large financial institutions, brokerages, and trading houses. The arrival of online trading, along with instantaneous dissemination of news, have leveled the playing—or should we say trading—field. The easy-to-use trading apps and 0% commissions of services like Robinhood, TD Ameritrade, and Charles Schwab have made it easier than ever for retail investors to attempt to trade like the pros.

                            Day trading can turn into a lucrative career (as long as you do it properly). But it can be challenging for novices—especially those who don't have a well-planned strategy. And be aware that even the most seasoned day traders can hit rough patches and experience losses.

                            So, what exactly is day trading, and how does it work?
                        </p>
                        <img src={HowToTrade101} alt="how to trade 101 image" />
                        <p>
                            Day traders are typically well-educated in the minutia of trading and tend to be well funded. Many of them add an additional level of risk by using leverage to increase the size of their stakes.

                            Day traders are attuned to events that cause short-term market moves. Trading based on the news is one popular technique. Scheduled announcements such as the release of economic statistics, corporate earnings, or interest rate announcements are subject to market expectations and market psychology. That is, markets react when those expectations are not met or are exceeded—usually with sudden, significant moves which can greatly benefit day traders.

                            Day traders use numerous intraday strategies. These strategies include:

                            Scalping: This strategy focuses on making numerous small profits on ephemeral price changes that occur throughout the day.
                            Range trading: This strategy uses pre-determined support and resistance levels in prices to determine the trader's buy and sell decisions.
                            News-based trading: This strategy seizes trading opportunities from the heightened volatility that occurs around news events.
                            High-frequency trading (HTF): These strategies use sophisticated algorithms to exploit small or short-term market inefficiencies.
                            1
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="fav-icon">
                        <div className="icon-area">
                            <img src={likeIcon} alt="fav icon" />
                        </div>
                        <div className="fav-count">
                            83
                        </div>
                    </div>
                    <div className="share-posts-area">
                        <div className="title">
                            Share Posts
                        </div>
                        <div className="icons-area">
                            <img src={twitterIcon} alt="twitter icon" />
                            <img src={telegramIcon} alt="twitter icon" />
                            <img src={discordIcon} alt="twitter icon" />
                        </div>
                    </div>
                    <div className="blog-page-highlights">
                        <div className="column">
                            <div className="dot"></div>
                            <div className="horizontal-line"></div>
                            <div className="dot"></div>
                            <div className="horizontal-line"></div>
                            <div className="dot"></div>
                            <div className="horizontal-line"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="column">
                            <div className="highlight">
                                How To Trade
                            </div>
                            <div className="highlight">
                                What is Trend Lines
                            </div>
                            <div className="highlight">
                                Support/Resistance
                            </div>
                            <div className="highlight">
                                Trading Methodology
                            </div>
                        </div>
                    </div>
                    <div className="related-posts">
                        <Link to="/blog-page">
                            <div className="blog-text-area">
                                <div className="blog-text-header">
                                    <img src={blogTextImage} alt="blog text image" />
                                </div>
                                <div className="blog-text-title">
                                    What is Trendlines?
                                </div>
                                <div className="blog-text-bottom">
                                    <div className="blog-level">
                                        <div className="dot"></div>
                                        <p>Beginner</p>
                                    </div>
                                    <div className="blog-date">
                                        Dec 15, 2022
                                    </div>
                                    <div className="blog-reading-minute">
                                        <img src={clock} alt="clock icon" />
                                        <p>9m</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/blog-page">
                            <div className="blog-text-area">
                                <div className="blog-text-header">
                                    <img src={blogTextImage} alt="blog text image" />
                                </div>
                                <div className="blog-text-title">
                                    What is Trendlines?
                                </div>
                                <div className="blog-text-bottom">
                                    <div className="blog-level">
                                        <div className="dot"></div>
                                        <p>Beginner</p>
                                    </div>
                                    <div className="blog-date">
                                        Dec 15, 2022
                                    </div>
                                    <div className="blog-reading-minute">
                                        <img src={clock} alt="clock icon" />
                                        <p>9m</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/blog-page">
                            <div className="blog-text-area">
                                <div className="blog-text-header">
                                    <img src={blogTextImage} alt="blog text image" />
                                </div>
                                <div className="blog-text-title">
                                    What is Trendlines?
                                </div>
                                <div className="blog-text-bottom">
                                    <div className="blog-level">
                                        <div className="dot"></div>
                                        <p>Beginner</p>
                                    </div>
                                    <div className="blog-date">
                                        Dec 15, 2022
                                    </div>
                                    <div className="blog-reading-minute">
                                        <img src={clock} alt="clock icon" />
                                        <p>9m</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    )
}