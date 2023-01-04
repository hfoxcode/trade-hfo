import axios from "axios";
import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import resize from "../img/resize.png";
import PnlPopup from "./PnlPopup";
import TakeProfitPopup from "./TakeProfitPopup";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

export default function PositionsData() {
    const [positionsData, setPositionsData] = useState([]);
    const [userId, setUserId] = useState();
    const [price, setPrice] = useState();
    const [ethPrice, setEthPrice] = useState();
    const [bnbPrice, setBnbPrice] = useState();
    const [monthlyPnl, setMonthlyPnl] = useState();
    const [accountPnl, setAccountPnl] = useState();
    const [openPnlPopup, setOpenPnlPopup] = useState(false);
    const [openTakeProfitPopup, setOpenTakeProfitPopup] = useState(false);
    const [openedItemIndex, setOpenedItemIndex] = useState(-1);
    const [pair, setPair] = useState("1");
    const [size, setSize] = useState();
    const [positionDataDirection, setPositionDataDirection] = useState();

    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();

    useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserId(decodedToken.name);
        }

        const getUser = async () => {
            try {
                const response = await axios.get(`https://ribu-backend.civitaseterna.com/User/${userId}`);


            } catch (error) {
                // Bir hata oluştuysa burada işleyebilirsiniz.
            }
        }

        const getPositionsData = async () => {
            const result = await axios.get(`https://ribu-backend.civitaseterna.com/Positions/UserPositions/${userId}`);
            setPositionsData(result.data);
        };



        const interval = setInterval(() => {
            getUser();
            getPositionsData();
        }, 1000);


        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // interval değişkenini sıfırlayın.
        return () => clearInterval(interval);
    }, [userId]);


    async function marketBuy(event) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Buy?userId=${userId}&pair=${pair}&size=${size / price}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

    async function marketSell(event) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Sell?userId=${userId}&pair=${pair}&size=${size / price}`);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

    async function closePosition(event, closePositionSide, closePositionSize) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/${closePositionSide}?userId=${userId}&pair=${pair}&size=${closePositionSize}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

    async function limitBuy(event) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Limit_Order_Buy?userId=${userId}&pair=${pair}&size=${size / price}&limit=${number1}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

    async function limitSell(event) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Limit_Order_Sell?userId=${userId}&pair=${pair}&size=${size / price}&limit=${number1}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }





    useEffect(() => {
        const socket = new window.WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            const number = Number(data.c);
            const fixedNumber = number.toFixed(1);
            setPrice(fixedNumber);
        };

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // websocket bağlantısını kapatın.
        return () => socket.close();
    }, []);

    useEffect(() => {
        const socket = new window.WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            const number = Number(data.c);
            const fixedNumber = number.toFixed(1);
            setEthPrice(fixedNumber);
        };

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // websocket bağlantısını kapatın.
        return () => socket.close();
    }, []);

    useEffect(() => {
        const socket = new window.WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@ticker');

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            const number = Number(data.c);
            const fixedNumber = number.toFixed(1);
            setBnbPrice(fixedNumber);
        };

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // websocket bağlantısını kapatın.
        return () => socket.close();
    }, []);

    // useEffect(() => {

    //     const interval = setInterval(getPositionsData, 5000);

    //     return () => clearInterval(interval); // fetch data every 1 second
    // }, []);


    return (

        <section className="open-positions">
            <TakeProfitPopup
                open={openTakeProfitPopup}
                onClose={() => setOpenTakeProfitPopup(false)}
                item={positionsData[openedItemIndex]}
                price={price}
                ethPrice={ethPrice}
                bnbPrice={bnbPrice}
            />
            <PnlPopup
                open={openPnlPopup}
                onClose={() => setOpenPnlPopup(false)}
                item={positionsData[openedItemIndex]}
                price={price}
                ethPrice={ethPrice}
                bnbPrice={bnbPrice}
            />

            {
                positionsData.map((item, index) => (
                    <>

                        <tr key={item.pair === 1 ? "BTCUSDT" : item.pair === 2 ? "ETHUSDT" : item.pair === 3 ? "BNBUSDT" : null}>
                            <td>{item.pair === 1 ? "BTCUSDT" : item.pair === 2 ? "ETHUSDT" : item.pair === 3 ? "BNBUSDT" : null}</td>
                            <td className={item.type === "LONG" ? "colorGreen width75" : "colorShort width75"}>+{Number(item.size * item.avgEntryPrice).toFixed(2)} USDT</td>
                            <td className="width54">{Number(item.avgEntryPrice).toFixed(2)}</td>
                            <td className="width54">{price}</td>
                            <td className="width54">{Number((item.avgEntryPrice * (100 - (10 + accountPnl))) / 100).toFixed(2)}</td>
                            <td className={item.pnL * price >= 0 ? "colorGreen width148" : "colorShort width148"}>
                                <div>
                                    {(item.pnL * price) > "0" ? "+" : (item.pnL * price) === "0" ? null : null}{(item.pnL * (item.pair === "1" ? price : item.pair === "2" ? ethPrice : bnbPrice)).toFixed(2)} USDT ({(item.pnL * price) > "0" ? "+" : (item.pnL * price) === "0" ? null : null}{Number(item.pnL * 100).toFixed(2)}) %
                                </div>
                                <div onClick={() => {
                                    setOpenedItemIndex(index);
                                    setOpenPnlPopup(true);
                                }}>
                                    <img src={resize} alt="resize icon" />
                                </div>
                            </td>
                            <td>
                                <div className="close-positions-button" onClick={(event) => closePosition(event, item.type === "LONG" ? "Sell" : "Buy", item.size)}>
                                    Market
                                </div>
                                <div className="close-positions-button">
                                    <div onClick={positionDataDirection === "LONG" ? (event) => limitBuy(event) : (event) => limitSell(event)}>Limit</div>
                                    <div className="input-box-area">
                                        <input
                                            type="number"
                                            value={number1}
                                            onChange={(event) => setNumber1(event.target.value)}
                                        />
                                        <input
                                            type="number"
                                            value={size}
                                            onChange={(event) => setSize(event.target.value)}
                                        />
                                    </div>
                                </div>

                            </td>
                            <td>
                                <div className="tp-area" onClick={() => {
                                    setOpenTakeProfitPopup(true);
                                    setOpenedItemIndex(index);

                                }}>
                                    Take Profit
                                </div>
                            </td>
                        </tr>
                    </>

                ))
            }
        </section>

    )
}