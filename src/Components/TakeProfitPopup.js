import React from "react"
import { useState } from "react";
import axios from "axios";


const TakeProfitPopup = (props) => {
    const { open, onClose, item, price, ethPrice, bnbPrice } = props;
    if (!open) return null

    const [tpLimit, setTpLimit] = useState();
    const [slLimit, setSlLimit] = useState();
    const [userId, setUserId] = useState(item.userId);
    const [pair, setPair] = useState(1);


    function handleChangeTpLimit(event) {
        const newLimit = event.target.value;
        setTpLimit(newLimit);
    }

    function handleChangeSlLimit(event) {
        const newLimit = event.target.value;
        setSlLimit(newLimit);
    }

    async function limitBuy(event, limit) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Limit_Order_Buy?userId=${userId}&pair=${pair}&size=${item.size}&limit=${limit}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

    async function limitSell(event, limit) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Limit_Order_Sell?userId=${userId}&pair=${pair}&size=${item.size}&limit=${limit}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }



    return (
        <div onClick={onClose} className="overlay-three">
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="popup_container">
                <div className="take-profit-popup">
                    <div className="header">
                        <div className="title">
                            TP/SL for entire position
                        </div>
                    </div>
                    <div className="tp-sl-container">
                        <div className="tp">
                            <div className="info">
                                <div className="description">
                                    Symbol
                                </div>
                                <div className="value">
                                    {item.pair === 1 ? "BTC/USDT" : item.pair === 2 ? "ETH/USDT" : item.pair === 3 ? "BNB/USDT" : "Another"}
                                </div>
                            </div>
                            <div className="info">
                                <div className="description">
                                    Entry Price
                                </div>
                                <div className="value">
                                    {Number(item.avgEntryPrice).toFixed(2)} USDT
                                </div>
                            </div>
                            <div className="info">
                                <div className="description">
                                    Mark Price
                                </div>
                                <div className="value">
                                    {item.pair === 1 ? price : item.pair === 2 ? ethPrice : item.pair === 3 ? bnbPrice : "0"} USDT
                                </div>
                            </div>
                            <label className="trade-area-label">
                                <div className="input-area">
                                    <div className="input-area-title">
                                        Take Profit
                                    </div>
                                    <div className="input">
                                        <input type="text" name="price" placeholder='0.00' onChange={handleChangeTpLimit} />
                                    </div>
                                    <div className="input-area-pair">
                                        <select>
                                            <option>USDT</option>
                                            <option>Gain %</option>
                                        </select>
                                    </div>
                                </div>
                            </label>

                            <div className="input-description">
                                When Mark Price reaches 0.00, it will trigger Take Profit Market order to close this position. Estimated PNL will be —— USDT
                            </div>

                        </div>
                        <div className="sl">
                            <label className="trade-area-label">
                                <div className="input-area">
                                    <div className="input-area-title">
                                        Stop Loss
                                    </div>
                                    <div className="input">
                                        <input type="text" name="price" placeholder='0.00' onChange={handleChangeSlLimit} />
                                    </div>
                                    <div className="input-area-pair">
                                        <select>
                                            <option>USDT</option>
                                            <option>Gain %</option>
                                        </select>
                                    </div>
                                </div>
                            </label>

                            <div className="input-description">
                                When Mark Price reaches 0.00, it will trigger Stop Market order to close this position. Estimated PNL will be —— USDT
                            </div>

                        </div>
                        <div className="button" onClick={
                            (event) => {
                                if (item.type === "LONG") {
                                    limitSell(event, tpLimit);
                                    limitBuy(event, slLimit);
                                } else {
                                    limitBuy(event, tpLimit);
                                    limitSell(event, slLimit);
                                }
                            }
                        }>
                            Confirm
                        </div>
                    </div>

                </div>
                <p onClick={onClose} className="close_popup">X</p>
            </div>

        </div >
    )
}

export default TakeProfitPopup;