import React from "react"

export default function WhyRibuPage() {
    return (
        <section className="why-ribu-page">
            <section className="education-area">
                <div className="video-area">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4AQojYKMV6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="description-area">
                    <div className="title">
                        Professional Trading Education
                    </div>
                    <div className="description">
                        Profesyonel eğitimcilerimiz tarafından hazırlanmış trading eğitimlerine katıl. Her eğitim birkaç bölümden oluşur. Her eğitim videosunu tamamladığında bir sonraki eğitimin kilidi açılır. Her bölüm sonunda seni profesyonel kadromuz tarafından hazırlanmış olan bir quiz bekliyor. Quizlerde %75 üzeri başarı sağlarsan bir sonraki bölümün kilidi açılır. Eğitimleri tamamla, quizleri bitir ve profesyonel bir fon yönetmeye hazırlan!
                    </div>
                </div>
            </section>
            <section className="ribu-advantages-area">
                <div className="column">
                    <div className="ribu-advantages-card">
                        <div className="advantage-title">
                            Trade Crypto
                        </div>
                        <div className="advantage-description">
                            Ribu ile yüksek spread'lere ve slippage'lara maruz kalmadan 50+ kripto parayı trade edebilirsin.
                        </div>
                    </div>
                    <div className="ribu-advantages-card">
                        <div className="advantage-title">
                            No External Software
                        </div>
                        <div className="advantage-description">
                            Ribu ile trade etmek için ekstra bir yazılım indirmene gerek yok! Direkt olarak sitemiz ve uygulamamız üzerinden trade etmeye başlayabilirsin.
                        </div>
                    </div>
                    <div className="ribu-advantages-card">
                        <div className="advantage-title">
                            Deep Liquidity
                        </div>
                        <div className="advantage-description">
                            Likidite sıkıntısı çekmemeniz için dünyanın en popüler ve derin likiditeli kripto para borsaları ile çalışıyoruz.
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="ribu-advantages-card">
                        <div className="advantage-title">
                            1:20 / 1:125 Leverage
                        </div>
                        <div className="advantage-description">
                            $5000 altı işlemlerinizde 125x, $5000 üstü işlemlerinizde ise 20x'e kadar kaldıraç kullanabilirsiniz.
                        </div>
                    </div>
                    <div className="ribu-advantages-card">
                        <div className="advantage-title">
                            No Limits on Trading Style
                        </div>
                        <div className="advantage-description">
                            Trade stilinize karışmıyoruz! İstediğin saatte, istediğin şekilde, istediğin günde trade et. 7/24 açık platformumuz sayesinde hiçbir işlemi kaçırma.
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}