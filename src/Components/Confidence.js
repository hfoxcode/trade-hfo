import React from "react"

export default function Confidence() {
    return (

        // This component included 3 different columns. first column has 2 rows. second and third column has only one row.
        <section className="confidence">
            <div className="column--1">
                <div className="row">
                    <div className="row-container">
                        <div>
                            <img></img>
                        </div>
                        <div>
                            <h4>Most Eligible Prop Trading Firm</h4>
                            <p>Ribu is the first and only online prop trading platform focused on cryptocurrencies. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row-container">
                        <div>
                            <img></img>
                        </div>
                        <div>
                            <h4>Deep Liquidity</h4>
                            <p>
                            Ribu works with the world's leading cryptocurrency exchanges. We are proud to be the world's lowest spread cryptocurrency prop trading firm. Join us and start multiplying your balance with low spreads.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column--2">
                <div className="row">
                    <div className="row-container">
                        <div>
                            <img></img>
                        </div>
                        <div>
                            <h4>No External Platform</h4>
                            <p>We are working for a better user experience every day. Thanks to our user-friendly and simple interface, you will be able to trade without needing to download any extra software.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column--3">
                <h2>The first Online CryptoCurrency Prop Trading Firm</h2>
                <p>Ribu is the first and most secure crypto prop trading platform for making money.</p>
                <div>Start to your Journey</div>
            </div>
        </section>
    )
}