import React from "react"
import { useEffect } from "react";
import { useState } from "react";

export default function BottomHeader() {

    const [btcPrice, setBtcPrice] = useState();
    const [ethPrice, setEthPrice] = useState();
    const [bnbPrice, setBnbPrice] = useState();
    const [avaxPrice, setAvaxPrice] = useState();
    const [solPrice, setSolPrice] = useState();
    const [adaPrice, setAdaPrice] = useState();
    const [xrpPrice, setXrpPrice] = useState();
    const [ltcPrice, setLtcPrice] = useState();

    useEffect(() => {
        const socket = new window.WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            const number = Number(data.P);
            setBtcPrice(number);
        };

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // websocket bağlantısını kapatın.
        return () => socket.close();
    }, []);
    useEffect(() => {
        const socket = new window.WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            const number = Number(data.P);
            setEthPrice(number);
        };

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // websocket bağlantısını kapatın.
        return () => socket.close();
    }, []);
    useEffect(() => {
        const socket = new window.WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@ticker');

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            const number = Number(data.P);
            setBnbPrice(number);
        };

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // websocket bağlantısını kapatın.
        return () => socket.close();
    }, []);
    useEffect(() => {
        const socket = new window.WebSocket('wss://stream.binance.com:9443/ws/avaxusdt@ticker');

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            const number = Number(data.P);
            setAvaxPrice(number);
        };

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // websocket bağlantısını kapatın.
        return () => socket.close();
    }, []);
    useEffect(() => {
        const socket = new window.WebSocket('wss://stream.binance.com:9443/ws/solusdt@ticker');

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            const number = Number(data.P);
            setSolPrice(number);
        };

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // websocket bağlantısını kapatın.
        return () => socket.close();
    }, []);
    useEffect(() => {
        const socket = new window.WebSocket('wss://stream.binance.com:9443/ws/adausdt@ticker');

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            const number = Number(data.P);
            setAdaPrice(number);
        };

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // websocket bağlantısını kapatın.
        return () => socket.close();
    }, []);
    useEffect(() => {
        const socket = new window.WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@ticker');

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            const number = Number(data.P);
            setXrpPrice(number);
        };

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // websocket bağlantısını kapatın.
        return () => socket.close();
    }, []);
    useEffect(() => {
        const socket = new window.WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@ticker');

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            const number = Number(data.P);
            setLtcPrice(number);
        };

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // websocket bağlantısını kapatın.
        return () => socket.close();
    }, []);
    return (

        <section className="bottom-header">
            <div className="pair">
                <div className="pair-name">BTC/USDT </div>
                <div className="pair-percentage colorGreen">+{btcPrice}%</div>
            </div>
            <div className="pair">
                <div className="pair-name">ETH/USDT </div>
                <div className="pair-percentage colorGreen">+{ethPrice}%</div>
            </div>
            <div className="pair">
                <div className="pair-name">BNB/USDT </div>
                <div className="pair-percentage colorGreen">+{bnbPrice}%</div>
            </div>
            <div className="pair">
                <div className="pair-name">AVAX/USDT </div>
                <div className="pair-percentage colorGreen">+{avaxPrice}%</div>
            </div>
            <div className="pair">
                <div className="pair-name">SOL/USDT </div>
                <div className="pair-percentage colorGreen">+{solPrice}%</div>
            </div>
            <div className="pair">
                <div className="pair-name">ADA/USDT </div>
                <div className="pair-percentage colorGreen">+{adaPrice}%</div>
            </div>
            <div className="pair">
                <div className="pair-name">XRP/USDT </div>
                <div className="pair-percentage colorGreen">+{xrpPrice}%</div>
            </div>
            <div className="pair">
                <div className="pair-name">LTC/USDT </div>
                <div className="pair-percentage colorGreen">+{ltcPrice}%</div>
            </div>
        </section>

    )
}