import React, { useState } from "react"
import Cookies from "universal-cookie";
import cookie from "../Pages/Login"







export default function IntroRoadmap() {
    const [activeRow, setActiveRow] = useState(0);
    const [activeSecondRow, setActiveSecondRow] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const [activeSecondStep, setActiveSecondStep] = useState(0);
    const [activeThirdStep, setActiveThirdStep] = useState(0);

    console.log(activeRow);



    



    return (
        <section className={activeRow === 1 || activeRow === 2 ? "intro-roadmap heightone" : "intro-roadmap"} >
            <div className="row">
                <div className="title">Sen Kimsin?</div>
                <div className="card-container">
                    <div className="card" onClick={() => setActiveRow(1)}>Acemi</div>
                    <div className="card" onClick={() => setActiveRow(2)}>Pro</div>
                </div>
            </div>
            {activeRow === 1 || activeRow === 2 ?
                <div className="suggestion-row">
                    <div className="column">
                        <div className={activeRow === 1 ? "suggestion-card" : activeRow === 2 ? "suggestion-card opacity" : null}>
                            <div className="suggestion">
                                En baştan başla. Eğitim al.
                            </div>
                            <div className="suggestion-bottom-area">
                                <div className="suggestion-button" onClick={() => setActiveSecondRow(1)}>
                                    Eğitim
                                </div>
                                <div className="suggestion-bottom-quote">
                                    Sizin bilgi seviyeniz için eğitimden başlamanız <b>önerilmektedir.</b>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="column">
                        <div className={activeRow === 2 ? "suggestion-card" : activeRow === 1 ? "suggestion-card opacity" : null}>
                            <div className="suggestion">
                                Direkt Challenge'a gir. Para kazanmaya başla.
                            </div>
                            <div className="suggestion-bottom-area">
                                <div className="suggestion-button" onClick={() => setActiveSecondRow(2)}>
                                    Challenge
                                </div>
                                <div className="suggestion-bottom-quote">
                                    Sizin bilgi seviyeniz için challenge'dan başlamanız <b>önerilmektedir.</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null
            }

            <div className="row">
                {activeSecondRow === 1 ?
                    <div className="package-type-container">
                        <div className="title">
                            Eğitimli Paketler
                        </div>
                        <div className="package-cards">
                            <div className="cards-area">
                                <div className="xxx">
                                    <div className="user-card">
                                        <div className="title-area">
                                            <div className="card-title">Başlangıç</div>
                                            <div className="card-description"> $5.000</div>
                                        </div>

                                        <div className="user-challenge-rules">
                                            <div className="rule">Max Günlük Kayıp: 5%</div>
                                            <div className="rule">Max Aylık Kayıp: 5%</div>
                                            <div className="rule">Kar Hedefi: 5%</div>
                                            <div className="rule">Kalan Gün: 30</div>
                                            <div className="rule">Eğitim İçerikleri: Aktif</div>
                                        </div>

                                        <div className="roadmap-area">
                                            <div className="price-area">
                                                <div className="title">
                                                    $65
                                                </div>
                                            </div>

                                            <div className="card-roadmap">
                                                <div className="line-area">
                                                    <div className="dot" id="bgyellow">

                                                    </div>
                                                    <div className="line2" id={activeStep === 0 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveStep(1)} onMouseLeave={() => setActiveStep(0)}>

                                                    </div>
                                                    <div className="dot" id={activeStep < 2 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveStep(2)} onMouseLeave={() => setActiveStep(0)}>

                                                    </div>
                                                    <div className="line2" id={activeStep < 3 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveStep(3)} onMouseLeave={() => setActiveStep(0)} >

                                                    </div>
                                                    <div className="dot" id={activeStep < 4 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveStep(4)} onMouseLeave={() => setActiveStep(0)} >

                                                    </div>
                                                    <div className="line2" id={activeStep < 5 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveStep(5)} onMouseLeave={() => setActiveStep(0)}>

                                                    </div>
                                                </div>
                                                <div className="step-area">
                                                    <div className="step">
                                                        Eğitim
                                                    </div>
                                                    <div className="step">
                                                        Challenge
                                                    </div>
                                                    <div className="step">
                                                        Ribu Trader!
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="button-area">
                                                <div className="buy-button">BUY</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="xxx">
                                    <div className="user-card">
                                        <div className="title-area">
                                            <div className="card-title">Gelişmiş</div>
                                            <div className="card-description">$10.000</div>
                                        </div>

                                        <div className="user-challenge-rules">
                                            <div className="rule">Max Günlük Kayıp: 5%</div>
                                            <div className="rule">Max Aylık Kayıp: 5%</div>
                                            <div className="rule">Kar Hedefi: 5%</div>
                                            <div className="rule">Kalan Gün: 30</div>
                                            <div className="rule">Eğitim İçerikleri: Aktif</div>
                                        </div>

                                        <div className="roadmap-area">
                                            <div className="price-area">
                                                <div className="title">
                                                    $110
                                                </div>
                                            </div>

                                            <div className="card-roadmap">
                                                <div className="line-area">
                                                    <div className="dot" id="bgyellow">

                                                    </div>
                                                    <div className="line2" id={activeSecondStep === 0 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveSecondStep(1)} onMouseLeave={() => setActiveSecondStep(0)}>

                                                    </div>
                                                    <div className="dot" id={activeSecondStep < 2 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveSecondStep(2)} onMouseLeave={() => setActiveSecondStep(0)}>

                                                    </div>
                                                    <div className="line2" id={activeSecondStep < 3 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveSecondStep(3)} onMouseLeave={() => setActiveSecondStep(0)} >

                                                    </div>
                                                    <div className="dot" id={activeSecondStep < 4 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveSecondStep(4)} onMouseLeave={() => setActiveSecondStep(0)} >

                                                    </div>
                                                    <div className="line2" id={activeSecondStep < 5 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveSecondStep(5)} onMouseLeave={() => setActiveSecondStep(0)}>

                                                    </div>
                                                </div>
                                                <div className="step-area">
                                                    <div className="step">
                                                        Eğitim
                                                    </div>
                                                    <div className="step">
                                                        Challenge
                                                    </div>
                                                    <div className="step">
                                                        Ribu Trader!
                                                    </div>
                                                </div>
                                                <div className="button-area">
                                                    <div className="buy-button">BUY</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="xxx">
                                    <div className="user-card">
                                        <div className="title-area">
                                            <div className="card-title">Pro</div>
                                            <div className="card-description">$25.000</div>
                                        </div>

                                        <div className="user-challenge-rules">
                                            <div className="rule">Max Günlük Kayıp: 5%</div>
                                            <div className="rule">Max Aylık Kayıp: 5%</div>
                                            <div className="rule">Kar Hedefi: 5%</div>
                                            <div className="rule">Kalan Gün: 30</div>
                                            <div className="rule">Eğitim İçerikleri: Aktif</div>
                                        </div>

                                        <div className="roadmap-area">
                                            <div className="price-area">
                                                <div className="title">
                                                    $240
                                                </div>
                                            </div>

                                            <div className="card-roadmap">
                                                <div className="line-area">
                                                    <div className="dot" id="bgyellow">

                                                    </div>
                                                    <div className="line2" id={activeThirdStep === 0 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveThirdStep(1)} onMouseLeave={() => setActiveThirdStep(0)}>

                                                    </div>
                                                    <div className="dot" id={activeThirdStep < 2 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveThirdStep(2)} onMouseLeave={() => setActiveThirdStep(0)}>

                                                    </div>
                                                    <div className="line2" id={activeThirdStep < 3 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveThirdStep(3)} onMouseLeave={() => setActiveThirdStep(0)} >

                                                    </div>
                                                    <div className="dot" id={activeThirdStep < 4 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveThirdStep(4)} onMouseLeave={() => setActiveThirdStep(0)} >

                                                    </div>
                                                    <div className="line2" id={activeThirdStep < 5 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveThirdStep(5)} onMouseLeave={() => setActiveThirdStep(0)}>

                                                    </div>
                                                </div>
                                                <div className="step-area">
                                                    <div className="step">
                                                        Eğitim
                                                    </div>
                                                    <div className="step">
                                                        Challenge
                                                    </div>
                                                    <div className="step">
                                                        Ribu Trader!
                                                    </div>
                                                </div>
                                                <div className="button-area">
                                                    <div className="buy-button">BUY</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    : activeSecondRow === 2 ?
                        <div className="package-type-container">
                            <div className="title">
                                Direkt Challenge Paketler
                            </div>
                            <div className="package-cards">
                                <div className="cards-area">
                                    <div className="xxx">
                                        <div className="user-card">
                                            <div className="title-area">
                                                <div className="card-title">Başlangıç</div>
                                                <div className="card-description"> $5.000</div>
                                            </div>

                                            <div className="user-challenge-rules">
                                                <div className="rule">Max Günlük Kayıp: 5%</div>
                                                <div className="rule">Max Aylık Kayıp: 5%</div>
                                                <div className="rule">Kar Hedefi: 5%</div>
                                                <div className="rule">Kalan Gün: 30</div>
                                                <div className="rule">Eğitim İçerikleri: X</div>
                                            </div>

                                            <div className="roadmap-area">
                                                <div className="price-area">
                                                    <div className="title">
                                                        $50
                                                    </div>
                                                </div>

                                                <div className="card-roadmap">
                                                    <div className="line-area">
                                                        <div className="dot" id="bgyellow">

                                                        </div>
                                                        <div className="line2" id={activeStep === 0 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveStep(1)} onMouseLeave={() => setActiveStep(0)}>

                                                        </div>
                                                        <div className="dot" id={activeStep < 2 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveStep(2)} onMouseLeave={() => setActiveStep(0)}>

                                                        </div>
                                                        <div className="line2" id={activeStep < 3 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveStep(3)} onMouseLeave={() => setActiveStep(0)} >

                                                        </div>
                                                        <div className="dot" id={activeStep < 4 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveStep(4)} onMouseLeave={() => setActiveStep(0)} >

                                                        </div>
                                                        <div className="line2" id={activeStep < 5 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveStep(5)} onMouseLeave={() => setActiveStep(0)}>

                                                        </div>
                                                    </div>
                                                    <div className="step-area">
                                                        <div className="step">
                                                            Discover
                                                        </div>
                                                        <div className="step">
                                                            Approve
                                                        </div>
                                                        <div className="step">
                                                            Ribu Trader!
                                                        </div>
                                                    </div>
                                                    <div className="button-area">
                                                        <div className="buy-button">BUY</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="xxx">
                                        <div className="user-card">
                                            <div className="title-area">
                                                <div className="card-title">Gelişmiş</div>
                                                <div className="card-description">$10.000</div>
                                            </div>

                                            <div className="user-challenge-rules">
                                                <div className="rule">Max Günlük Kayıp: 5%</div>
                                                <div className="rule">Max Aylık Kayıp: 5%</div>
                                                <div className="rule">Kar Hedefi: 5%</div>
                                                <div className="rule">Kalan Gün: 30</div>
                                                <div className="rule">Eğitim İçerikleri: X</div>
                                            </div>

                                            <div className="roadmap-area">
                                                <div className="price-area">
                                                    <div className="title">
                                                        $95
                                                    </div>
                                                </div>

                                                <div className="card-roadmap">
                                                    <div className="line-area">
                                                        <div className="dot" id="bgyellow">

                                                        </div>
                                                        <div className="line2" id={activeSecondStep === 0 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveSecondStep(1)} onMouseLeave={() => setActiveSecondStep(0)}>

                                                        </div>
                                                        <div className="dot" id={activeSecondStep < 2 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveSecondStep(2)} onMouseLeave={() => setActiveSecondStep(0)}>

                                                        </div>
                                                        <div className="line2" id={activeSecondStep < 3 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveSecondStep(3)} onMouseLeave={() => setActiveSecondStep(0)} >

                                                        </div>
                                                        <div className="dot" id={activeSecondStep < 4 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveSecondStep(4)} onMouseLeave={() => setActiveSecondStep(0)} >

                                                        </div>
                                                        <div className="line2" id={activeSecondStep < 5 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveSecondStep(5)} onMouseLeave={() => setActiveSecondStep(0)}>

                                                        </div>
                                                    </div>
                                                    <div className="step-area">
                                                        <div className="step">
                                                            Discover
                                                        </div>
                                                        <div className="step">
                                                            Approve
                                                        </div>
                                                        <div className="step">
                                                            Ribu Trader!
                                                        </div>
                                                    </div>
                                                    <div className="button-area">
                                                        <div className="buy-button">BUY</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="xxx">
                                        <div className="user-card">
                                            <div className="title-area">
                                                <div className="card-title">Pro</div>
                                                <div className="card-description">$25.000</div>
                                            </div>

                                            <div className="user-challenge-rules">
                                                <div className="rule">Max Günlük Kayıp: 5%</div>
                                                <div className="rule">Max Aylık Kayıp: 5%</div>
                                                <div className="rule">Kar Hedefi: 5%</div>
                                                <div className="rule">Kalan Gün: 30</div>
                                                <div className="rule">Eğitim İçerikleri: X</div>
                                            </div>

                                            <div className="roadmap-area">
                                                <div className="price-area">
                                                    <div className="title">
                                                        $225
                                                    </div>
                                                </div>

                                                <div className="card-roadmap">
                                                    <div className="line-area">
                                                        <div className="dot" id="bgyellow">

                                                        </div>
                                                        <div className="line2" id={activeThirdStep === 0 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveThirdStep(1)} onMouseLeave={() => setActiveThirdStep(0)}>

                                                        </div>
                                                        <div className="dot" id={activeThirdStep < 2 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveThirdStep(2)} onMouseLeave={() => setActiveThirdStep(0)}>

                                                        </div>
                                                        <div className="line2" id={activeThirdStep < 3 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveThirdStep(3)} onMouseLeave={() => setActiveThirdStep(0)} >

                                                        </div>
                                                        <div className="dot" id={activeThirdStep < 4 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveThirdStep(4)} onMouseLeave={() => setActiveThirdStep(0)} >

                                                        </div>
                                                        <div className="line2" id={activeThirdStep < 5 ? "bggray" : "bgyellow"} onMouseEnter={() => setActiveThirdStep(5)} onMouseLeave={() => setActiveThirdStep(0)}>

                                                        </div>
                                                    </div>
                                                    <div className="step-area">
                                                        <div className="step">
                                                            Discover
                                                        </div>
                                                        <div className="step">
                                                            Approve
                                                        </div>
                                                        <div className="step">
                                                            Ribu Trader!
                                                        </div>
                                                    </div>
                                                    <div className="button-area">
                                                        <div className="buy-button">BUY</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        : null}
            </div>
        </section>
    )
}