import React from "react"
import telegramLogo from "../img/telegram.png";
import discordLogo from "../img/discord.png";
import mailLogo from "../img/gmail.png";
import { useState } from "react";

export default function ContactUs() {

    const [activeHover1, setActiveHover1] = useState(false);
    const [activeHover2, setActiveHover2] = useState(false);
    const [activeHover3, setActiveHover3] = useState(false);


    return (
        <section className="contact-us">
            <div className="title-area">
                <div className="title">
                    Contact Us
                </div>
                <div className="description">
                    <h4>
                        We're always happy to answer any questions you may have. Just send us a message and we'll do our best to help.You can reach us through any of the following methods.
                    </h4>
                </div>
            </div>
            <div className="box-area">
                <div className="box" onMouseEnter={() => setActiveHover1(true)} onMouseLeave={() => setActiveHover1(false)}>
                    {activeHover1 === false ?

                        <div className="box-image">
                            <img src={telegramLogo} alt="telegram logo" />
                        </div>

                        :

                        <>
                            <div className="box-image opacity03">
                                <img src={telegramLogo} alt="telegram logo" />
                            </div>

                            <div className="icerik posAbsolute">
                                <div className="text">
                                    You can contact us through Telegram. Our admins on Telegram will be available 24/7 to communicate with you.
                                </div>
                                <div className="click-here-title">
                                    Click here to check our Telegram Channel
                                </div>
                            </div>
                        </>



                    }

                </div>

                <div className="box" onMouseEnter={() => setActiveHover2(true)} onMouseLeave={() => setActiveHover2(false)}>
                    {activeHover2 === false ?

                        <div className="box-image">
                            <img src={discordLogo} alt="telegram logo" />
                        </div>

                        :

                        <>
                            <div className="box-image opacity03">
                                <img src={discordLogo} alt="telegram logo" />
                            </div>

                            <div className="icerik posAbsolute">
                                <div className="text">
                                    You can contact us through Discord. Our admins on Discord will be available 24/7 to communicate with you.
                                </div>
                                <div className="click-here-title">
                                    Click here to check our Discord Group
                                </div>
                            </div>
                        </>



                    }

                </div>

                <div className="box" onMouseEnter={() => setActiveHover3(true)} onMouseLeave={() => setActiveHover3(false)}>
                    {activeHover3 === false ?

                        <div className="box-image">
                            <img src={mailLogo} alt="telegram logo" />
                        </div>

                        :

                        <>
                            <div className="box-image opacity03">
                                <img src={mailLogo} alt="telegram logo" />
                            </div>

                            <div className="icerik posAbsolute">
                                <div className="text">
                                    You can contact us through Mail.
                                </div>
                                <div className="click-here-title">
                                    Click here to check our Mail Address
                                </div>
                            </div>
                        </>



                    }

                </div>
            </div>
        </section>
    )
}