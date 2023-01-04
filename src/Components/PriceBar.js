import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import bitcoin from "../img/bitcoin.png"
import SelectCurrency from "../Components/SelectCurrency"


export default function PriceBar() {
    const [price, setPrice] = useState();
    const [changePercentage, setChangePercentage] = useState();
    const [highestPrice, setHighestPrice] = useState();
    const [lowestPrice, setLowestPrice] = useState();
    const [baseAssetVolume, setBaseAssetVolume] = useState();
    const [quoteAssetVolume, setQuoteAssetVolume] = useState();
    const [openSelectCurrency, setOpenSelectCurrency] = useState();


    useEffect(() => {
        const socket = new window.WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            const number = Number(data.c);
            const numberTwo = Number(data.h);
            const numberThree = Number(data.l);
            const numberFor = Number(data.v);
            const numberFive = Number(data.q);
            const fixedNumber = number.toFixed(1);
            const fixedNumberTwo = numberTwo.toFixed(2);
            const fixedNumberThree = numberThree.toFixed(2);
            const fixedNumberFor = numberFor.toFixed(2);
            const fixedNumberFive = numberFive.toFixed(2);
            setPrice(fixedNumber);
            setChangePercentage(data.P);
            setHighestPrice(fixedNumberTwo);
            setLowestPrice(fixedNumberThree);
            setBaseAssetVolume(fixedNumberFor);
            setQuoteAssetVolume(fixedNumberFive);
        };

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // websocket bağlantısını kapatın.
        return () => socket.close();
    }, []);

    return (
        <div className="row">
            <SelectCurrency
                open={openSelectCurrency}
                onClose={() => setOpenSelectCurrency(false)}
                price={price}
            />
            <div className="pair">
                <div className="pair-popover">
                </div>
                <div className="pair-logo">
                    <img src={bitcoin} alt="bitcoin icon" />
                </div>
                <div className="pair-name" onClick={() => {
                setOpenSelectCurrency(true);

            }}>BTC/USDT</div>


            </div>
            <div className="info-ticker">
                <div className="pair-price">${price}</div>
                <div className="price-info">
                    <div className="info-title">
                        24sa Değişim %
                    </div>
                    <div className="info-value">
                        {changePercentage}
                    </div>
                </div>
                <div className="price-info">
                    <div className="info-title">
                        24sa Yüksek
                    </div>
                    <div className="info-value">
                        {highestPrice}
                    </div>
                </div>
                <div className="price-info">
                    <div className="info-title">
                        24sa Düşük
                    </div>
                    <div className="info-value">
                        {lowestPrice}
                    </div>
                </div>
                <div className="price-info">
                    <div className="info-title">
                        24sa Volume(BTC)
                    </div>
                    <div className="info-value">
                        {baseAssetVolume}
                    </div>
                </div>
                <div className="price-info">
                    <div className="info-title">
                        24h Volume(USDT)
                    </div>
                    <div className="info-value">
                        {quoteAssetVolume}
                    </div>
                </div>
            </div>
        </div>
    )
}