import React from "react"
import calculator_icon from "../img/calculator-icon.png"; 
import PriceAmountArea from "./PriceAmountArea";

export default function TradingEngineWidget() {


    return (
        <div className="trading-widget-container">
            <div className="header-row1">
                <div className="buy-btn">BTC-PERP Buy</div>
                <div className="sell-btn">BTC-Perp Sell</div>
                <div className="calculator-icon"><img src={calculator_icon} alt="calculator icon"/></div>
            </div>
            <div className="trading-insider-container">
                <div className="price-amount-sider">
                    <PriceAmountArea/>
                </div>
                <div className="button-row-sider">
                    <div className="on-off-buttons"></div>
                    <div className="on-off-buttons"></div>
                    <div className="on-off-buttons"></div>
                </div>
                <div className="approve-row">
                    <div className="approve-btn">

                    </div>
                </div>
            </div>


        </div>
    )
}