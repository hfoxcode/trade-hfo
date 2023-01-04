import React from "react"

export default function AnimationComp() {
    return (
        <section className="animation-comp">
            <div className="title">
                Trading Objectives
            </div>
            <div className="animation-area">
                <div className="animation-card">
                    <div className="card-title">
                        Discover
                    </div>
                    <div className="card-balance">
                        $10.000 Demo Balance
                    </div>
                    <div className="animation-area">
                        <div className="graphic-line"></div>
                        <div className="profit">10%</div>
                    </div>
                </div>
                <div className="animation-card">
                    <div className="card-title">
                        Approve
                    </div>
                    <div className="card-balance">
                        $10.000 Demo Balance
                    </div>
                    <div className="animation-area">
                        <div className="graphic-line"></div>
                        <div className="profit">10%</div>
                    </div>
                </div>
                <div className="animation-card">
                    <div className="card-title">
                        Certified Ribu Trader
                    </div>
                    <div className="card-balance">
                        $10.000 Real Balance
                    </div>
                    <div className="animation-area">
                        <div className="graphic-line"></div>
                        <div className="profit">10%</div>
                        <div className="profit">You gain 75% of what u earn!</div>
                    </div>
                </div>
            </div>
        </section>
    )
}