import React from "react"

export default function TradingObjectives() {
    return (
        <section className="trading-objectives">
            <div className="title">
                Trading Görevleri
            </div>
            <div className="challenge-objectives">
                <div className="objective">
                    <div className="objective-title">
                        Kar Hedefi 10%
                    </div>
                    <div className="objective-description">
                        Challenge'ı geçmek için 10% kar elde etmelisin.
                    </div>
                </div>
                <div className="objective">
                    <div className="objective-title">
                        Max Aylık Kayıp 10%
                    </div>
                    <div className="objective-description">
                       Bir ayda 10%'dan fazla kaybetmemelisin.
                    </div>
                </div>
                <div className="objective">
                    <div className="objective-title">
                        Max Günlük Kayıp 5%
                    </div>
                    <div className="objective-description">
                        Bir günde 5%'ten fazla kaybetmemelisin.
                    </div>
                </div>
            </div>
        </section>
    )
}