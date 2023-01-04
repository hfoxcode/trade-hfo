import React from "react"
import testimonials from "../img/testimonials.png";
import TradingObjectives from "./TradingObjectives";
import PayoutSystem from "../img/payout-system.png";
import { Link } from "react-router-dom";

export default function HowItWorksDetailed() {
    return (
        <section className="how-it-works-detailed">
            <section className="what-is-ribu">
                <div className="column">
                    <div className="title">İyi bir tradersın ama likiditen mi yok?</div>
                    <div className="description">
                        <div className="top-description">
                            Ribu, seni iki farklı challenge'a tabi tutarak sana $1.000.000'a varan bakiyelerle trade etme imkanı sunuyor.
                        </div>
                        <div className="bottom-description">
                            Tek yapman gereken bir challenge pakedi seçip görevleri tamamlamak.
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="testimonials-container">
                        <img src={testimonials} alt="testimonials cards" />
                    </div>
                </div>
            </section>
            <section className="challenge-onetwothree">
                <div className="title">
                    Görevleri tamamlayıp şartları sağladığında bir sonraki aşamaya geçersin.
                </div>
                <div className="onetwothree-area">
                    <div className="challenge-card">
                        <div className="title">
                            Discover
                        </div>
                        <div className="challenge-card-description">
                            Discover, değerlendirme aşamasının ilk adımıdır. Bu aşamada kendini bize kanıtlayarak ikinci aşamaya geçebilirsin. Görevleri tamamla, sertifikalı Ribu Trader olmaya bir adım daha yaklaş!
                        </div>
                        <div className="challenge-card-bottom">
                            RIBU <i>"trader's pocket"</i>
                        </div>
                    </div>
                    <div className="challenge-card">
                        <div className="title">
                            Approve
                        </div>
                        <div className="challenge-card-description">
                            Approve, değerlendirme aşamasının son adımıdır. Artık burada kendini bize kanıtlayarak fon yönetmeye uygun olduğunu kanıtlayacaksın. Bu adımı geçersen sertifikalı Ribu Trader olarak gerçek bir fon yönetmeye başlayabilirsin.
                        </div>
                        <div className="challenge-card-bottom">
                            RIBU <i>"trader's pocket"</i>
                        </div>
                    </div>
                    <div className="challenge-card">
                        <div className="title">
                            Sertifikalı Ribu Trader
                        </div>
                        <div className="challenge-card-description">
                            Tebrikler! Artık sen de sertifikalı bir Ribu Tradersın. Gerçek bakiyeni yönet, kazandığının 75%'i senin! Scaling up programı ile başarılı geçen her 4 ay bakiyeni %25 büyütür.
                        </div>
                        <div className="challenge-card-bottom">
                            RIBU <i>"trader's pocket"</i>
                        </div>
                    </div>
                </div>
            </section>
            <section className="payout-system">
                <div className="column">
                    <img src={PayoutSystem} alt="payout system image copied from ftmo" />
                </div>
                <div className="column">
                    <div className="title">
                        Payout System
                    </div>
                    <div className="payout-system-text">
                        <p>
                            Standart ödeme planı her elde ettiğiniz karın %75'ini çekebileceğiniz şekilde ayarlanmıştır. Ancak scaling up programı ile başarılı geçen 4 ay sonrası bakiyenizi %25 büyüttüğümüz gibi kar payınızı da %80'e çıkartıyoruz!
                        </p>
                        <p>
                            Tüm Ribu Traderları, anında ödeme talep edebilir. Ancak ödeme sadece 14 gün sonra işleme alınabilir. Ancak aynı zamanda kendi profit share gününüzü seçme yeteneğiniz de vardır.Size en uygun çekim gününü seçerek çekiminizi her ay o günde gerçekleştirebilirsiniz.
                        </p>
                    </div>
                </div>
            </section>
            <TradingObjectives />
            <section className="start-now">
                <Link to="/login">
                    <div className="bigger-button">
                        Hemen Başla!
                    </div>
                </Link>

            </section>
        </section>
    )
}