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
                <div className="how-to-work" id="howtowork">
                    <div className="title">
                        Acemi
                    </div>
                    <div className="line-container">
                        <div className="how-to-container" id="how-to-1">
                            <div className="line-area">
                                <div className="dot">
                                    1
                                </div>
                                <div className="line2">

                                </div>
                            </div>
                            <div className="description-steps" id="1">
                                <div className="title">Eğitimi Tamamla</div>
                                <div className="description">Nasıl trade edeceğini bilmeyenler için detaylı bir eğitim seti hazırladık.</div>
                            </div>
                        </div>

                        <div className={active1 ? "how-to-container how-to-2 active" : "how-to-container how-to-2"} onMouseEnter={() => {

                            setActive1(true);
                        }}>
                            <div className="line-area">
                                <div className="dot">
                                    2
                                </div>
                                <div className="line2">

                                </div>
                            </div>
                            <div className="description-steps" id="2">
                                <div className="title">Quizleri Geç</div>
                                <div className="description">Senin için profesyonel ekibimizce özel hazırlanmış quizleri başarıyla tamamla. Sertifikalı bir Ribu Trader olmaya hazırlan.</div>
                            </div>
                        </div>

                        <div className={active2 ? "how-to-container how-to-3 active" : "how-to-container how-to-3"} onMouseEnter={() => {

                            setActive2(true);
                        }}>
                            <div className="line-area">
                                <div className="dot">
                                    3
                                </div>
                                <div className="line2">

                                </div>
                            </div>
                            <div className="description-steps" id="3">
                                <div className="title">Kendini Kanıtla</div>
                                <div className="description">Sana uyan challenge pakedini seçerek kendini kanıtla</div>
                            </div>
                        </div>

                        <div className={active3 ? "how-to-container how-to-4 active" : "how-to-container how-to-4"} onMouseEnter={() => {

                            setActive3(true);
                        }}>
                            <div className="line-area">
                                <div className="dot">
                                    4
                                </div>
                                <div className="line2">

                                </div>
                            </div>

                            <div className="description-steps" id="4">
                                <div className="title">Kazanmaya başla!</div>
                                <div className="description">Artık sen de bir sertifikalı Ribu Trader'sın. Hesabına tamamlanan fonu yöneterek para kazanmaya başla!</div>
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
                                    1
                                </div>
                                <div className="line3">

                                </div>
                            </div>
                            <div className="description-steps" id="1">
                                <div className="title">Discover</div>
                                <div className="description">Discover bize kendini kanıtlaman için sana sunulan ilk challenge adımı. Tüm görevleri tamamla. Trading yeteneklerini ve risk yönetimi başarını kanıtla. İkinci adıma geç!</div>
                            </div>
                        </div>

                        <div className={active5 ? "how-to-container how-to-5 active" : "how-to-container how-to-5"} onMouseEnter={() => {

                            setActive5(true);
                        }}>
                            <div className="line-area">
                                <div className="dot">
                                    2
                                </div>
                                <div className="line3">

                                </div>
                            </div>
                            <div className="description-steps" id="2">
                                <div className="title">Approve</div>
                                <div className="description">Artık sertifikalı Ribu Trader olmadan önceki son adımdasın. Sertifikalı Ribu Trader olmak için görevleri tamamla ve gerçek bir fon yönetmeye hazırlan!</div>
                            </div>
                        </div>

                        <div className={active6 ? "how-to-container how-to-6 active" : "how-to-container how-to-6"} onMouseEnter={() => {

                            setActive6(true);
                        }}>
                            <div className="line-area">
                                <div className="dot">
                                    3
                                </div>
                                <div className="line3">

                                </div>
                            </div>
                            <div className="description-steps" id="3">
                                <div className="title">Certified Ribu Trader</div>
                                <div className="description">Artık sen de bir sertifikalı Ribu Trader'sın! Artık elde ettiğin karın %75-85'e varan kadarı senin. Eğer düzenli olarak kar elde etmeye devam edebilirsen, yönettiğin fonu daha da büyüteceğiz. Bol Şans!</div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </section>
    )
}