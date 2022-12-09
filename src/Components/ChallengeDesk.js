import React, { useState } from "react"
import illustration2 from "../img/illustration2.png"
import pys from "../img/pys.png"
import how_to_work from "../img/how_to_work.png"

export default function ChallengeDesk() {
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active5, setActive5] = useState(false);
    const [active6, setActive6] = useState(false);
   
    return (
        // The section of Challenge Desk included 2 columns.
        // First columns is illustration of world wide trading. The second column is a description about Jacfold Challenge and trading mechanism.
        <section className="challenge-desk">

            {/* <div className="column--1">
                <img src={pys} alt="illustration"></img>
            </div>

            <div className="column--2">
                <div className="title">Ribu Challenge</div>
                <div className="description">
                    <p>Complete the two stage Ribu Challenge by making 10% profit with up to 100x leverage. Qualify to be a certified Ribu Trader and manage 10.000$ trade balance. You can withdraw 75% of your profit with the fund you have earned. Remember, 10% drawdown will cause you to lose the challenge.</p>
                </div>
                <div className="button">Get Started</div>
            </div> */}

            <div className="roadmap-container">
                <div className="how-to-work">
                    <div className="title">
                        Beginner
                    </div>
                    <div className="line-container">
                        <div className="how-to-container" id="how-to-1">
                            <div className="line-area">
                                <div className="dot">

                                </div>
                                <div className="line2">

                                </div>
                            </div>
                            <div className="description-steps" id="1">
                                <div className="title">Complete the Education</div>
                                <div className="description">We have prepared an comprehensive education set for those who do not know how to trade.</div>
                            </div>
                        </div>

                        <div className={active1 ? "how-to-container how-to-2 active" : "how-to-container how-to-2"} onMouseEnter={() => {

                            setActive1(true);
                        }}>
                            <div className="line-area">
                                <div className="dot">

                                </div>
                                <div className="line2">

                                </div>
                            </div>
                            <div className="description-steps" id="2">
                                <div className="title">Pass the Quizzes</div>
                                <div className="description">Complete special quizzes prepared for you. Get ready to start Ribu Challenges.</div>
                            </div>
                        </div>

                        <div className={active2 ? "how-to-container how-to-3 active" : "how-to-container how-to-3"} onMouseEnter={() => {

                            setActive2(true);
                        }}>
                            <div className="line-area">
                                <div className="dot">

                                </div>
                                <div className="line2">

                                </div>
                            </div>
                            <div className="description-steps" id="3">
                                <div className="title">Prove yourself</div>
                                <div className="description">Prove yourself with challenges by choosing the package that suits you.</div>
                            </div>
                        </div>

                        <div className={active3 ? "how-to-container how-to-4 active" : "how-to-container how-to-4"} onMouseEnter={() => {

                            setActive3(true);
                        }}>
                            <div className="line-area">
                                <div className="dot">

                                </div>
                                <div className="line2">

                                </div>
                            </div>

                            <div className="description-steps" id="4">
                                <div className="title">Start to earn as a Professional</div>
                                <div className="description">Now you are a certified Ribu Trader. Start making money by managing the fund defined for you.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="how-to-work">
                    <div className="title">
                        Pro
                    </div>
                    <div className="line-container">
                        <div className="how-to-container" id="how-to-1">
                            <div className="line-area">
                                <div className="dot">

                                </div>
                                <div className="line3">

                                </div>
                            </div>
                            <div className="description-steps" id="1">
                                <div className="title">Discover</div>
                                <div className="description">Discover is the first stage where you will try to prove yourself. Fulfill the tasks. Prove your trading skills and risk management. Go to step two!</div>
                            </div>
                        </div>

                        <div className={active5 ? "how-to-container how-to-5 active" : "how-to-container how-to-5"} onMouseEnter={() => {

                            setActive5(true);
                        }}>
                            <div className="line-area">
                                <div className="dot">

                                </div>
                                <div className="line3">

                                </div>
                            </div>
                            <div className="description-steps" id="2">
                                <div className="title">Approve</div>
                                <div className="description">You are now in the final stage before you become a registered Ribu trader. Complete tasks to become certified Ribu Trader and prepare to manage a real fund.</div>
                            </div>
                        </div>

                        <div className={active6 ? "how-to-container how-to-6 active" : "how-to-container how-to-6"} onMouseEnter={() => {

                            setActive6(true);
                        }}>
                            <div className="line-area">
                                <div className="dot">

                                </div>
                                <div className="line3">

                                </div>
                            </div>
                            <div className="description-steps" id="3">
                                <div className="title">Certified Ribu Trader</div>
                                <div className="description">You are now a certified Ribu Trader too! Get up to 85% of your profits from consistently growing a real fund. If you can make steady profits, we will increase the fund you manage. Good Luck!</div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>


        </section>
    )
}