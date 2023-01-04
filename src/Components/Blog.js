import React from "react"
import tradingImagePost from "../img/trading-image-post.jpg";
import clock from "../img/clock.png";
import blogTextImage from "../img/blog-text-image.png";
import { Link } from "react-router-dom";

export default function Blog() {
    return (
        <section className="blog">
            <section className="blog-slider">
                <div className="column">
                    <div className="blog-column-header">
                        LEARN ALL ABOUT
                    </div>
                    <h1>Trading & Crypto</h1>
                    <p>Trading ve Crypto hakkında her şeyi öğrenebileceğin blog. İster bir çaylak ol, istersen bir pro trader. Öğrenmen gereken her şey burada mevcut.</p>
                    <Link to="/blog-page">
                        <div className="button">Start here.</div>
                    </Link>

                </div>
                <Link to="/blog-page">
                    <div className="column">
                        <div className="text-row">
                            <div className="blog-column-header">
                                FEATURED
                            </div>
                            <div className="blog-text-image">
                                <img src={tradingImagePost} alt="blog-image" />
                            </div>
                        </div>

                        <div className="text-row">

                            <div className="text-title">What is Trend Lines?</div>


                            <div className="text-date">
                                <div className="date">
                                    Sep 28, 2020
                                </div>
                                <div className="reading-minute">
                                    <div className="reading-minute-icon">
                                        <img src={clock} alt="reading minute icon" />
                                    </div>
                                    <p>9m</p>
                                </div>

                            </div>
                            <div className="reading-level">
                                <div className="dot"></div>
                                <p>Beginner</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
            <section className="blog-text-feeder">
                <div className="blog-text-header">
                    <div className="latest-releases">
                        Latest Releases
                    </div>
                    <div className="see-all">
                        SEE ALL LATEST RELEASES
                    </div>
                </div>
                <div className="blog-text-row">
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
                <div className="blog-text-row">
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
                </div>
            </section>
        </section>
    )
}