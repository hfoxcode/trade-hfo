import React, { useState } from "react"
import ribuLogo from "../img/Logo.png";
import qrCode from "../img/qr-code.png";

const PnlPopup = (props) => {
    const { open, onClose, item, price, ethPrice, bnbPrice } = props;
    if (!open) return null

    return (
        <div onClick={onClose} className="overlay-for">
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="popup_container">
                <div className="pnl-popup">
                    <div className="row">
                        <div className="image-area">
                            <img src={ribuLogo} alt="ribu logo" />
                        </div>
                        <div className="title">
                            Ribu
                        </div>

                    </div>
                    <div className="pnl-area">
                        <div className="upper-description">
                            <div className="direction colorGreen">
                                Long
                            </div>
                            <div className="leverage">
                                10x
                            </div>
                            <div className="pair">
                                {item.pair === 1 ? "BTC/USDT" : item.pair === 2 ? "ETH/USDT" : item.pair === 3 ? "BNB/USDT" : "Another"}
                            </div>
                        </div>
                        <div className="pnl-value">
                            <div className={item.pnL >= 0 ? "value-percentage colorGreen" : "value-percentage colorShort"}>
                                {Number(item.pnL * 100).toFixed(2)}%
                            </div>
                            <div className={item.pnL >= 0 ? "value-usdt colorGreen" : "value-usdt colorShort"}>
                                {(item.pnL * price) > 0 ? "+" : (item.pnL * price) === "0" ? null : null}{(item.pnL * (item.pair === "1" ? price : item.pair === "2" ? ethPrice : bnbPrice)).toFixed(2)} USDT
                            </div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="qr-code">
                            <img src={qrCode} alt="qr code" />
                        </div>
                        <div className="referral-code-area">
                            <div className="title">Referral Code</div>
                            <div className="code">167169370</div>
                        </div>
                    </div>
                </div>
                <p onClick={onClose} className="close_popup">X</p>
            </div>

        </div>
    )
}

export default PnlPopup;