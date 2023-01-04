import React from "react"
import Logo from "../img/Logo.png"
import RibuBiggerLogo from "../img/ribu-bigger-logo.png"


export default function WhyRibu() {

    return (

        <section className="why-ribu">
            <div className="title">

            </div>
            <div className="why-ribu-container">

                <div className="why-ribu-title">
                    <div className="ribu-bigger-logo"><img src={RibuBiggerLogo} alt="ribu logo"/></div>
                    <div className="why-ribu-slogan">Neden Ribu?</div>
                </div>

                <div className="cards-area">
                    <div className="column">
                        <div className="card">
                            <div className="card-title">Eğitir</div>
                            <div className="card-description">Kullanıcılara özel hazırlanmış trading eğitimleri ile trade konseptlerini öğretir.</div>
                        </div>
                        <div className="card">
                            <div className="card-title">Test Eder</div>
                            <div className="card-description">Hazırlanmış olan challenge ve quizler ile eğitim alan kullanıcıların kendini test etmesine olanak sağlar.</div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <div className="card-title">Fonlar</div>
                            <div className="card-description">Challengeları ve quizleri başarıyla tamamlayan kullanıcıları fonlayarak yüksek bakiyeli hesaplar yönetmelerine olanak tanır.</div>
                        </div>
                        <div className="card">
                            <div className="card-title">Kazandırır</div>
                            <div className="card-description">Traderlar yönettikleri fonlar üzerinden elde ettiği karın %75'ini direkt olarak çekebilir.</div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

    )
}