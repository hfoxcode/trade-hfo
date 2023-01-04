import axios from "axios";
import React, { useEffect } from "react"
import { useState } from "react";
import CalculatorPopup from "./CalculatorPopup";
import PnlPopup from "./PnlPopup";
import calculatorIcon from "../img/calculator.png"
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

export default function TradeArea() {

    const [openCalculatorPopup, setOpenCalculatorPopup] = useState(false);
    // const [openTakeProfitPopup, setOpenTakeProfitPopup] = useState(false);
    const [openPnlPopup, setOpenPnlPopup] = useState(false);
    const [positionType, setPositionType] = useState(0);
    const [positionDirection, setPositionDirection] = useState(0);
    const [userId, setUserId] = useState();
    const [percentage1, setPercentage1] = useState(5);
    const [avblBalance, setAvblBalance] = useState();
    const [username, setUsername] = useState();
    const [accountLeverage, setAccountLeverage] = useState();
    const [challengeStatus, setChallengeStatus] = useState();


    const [pair, setPair] = useState(1);
    const [size, setSize] = useState(0.1);
    const [limit, setLimit] = useState();

    const [price, setPrice] = useState(0);

    // const handleSizeChange = (newSize) => {
    //     setSize(newSize);
    //     setPercentage1((newSize / avblBalance) * 100);
    //   }


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

                setAccountLeverage(response.data.leverage);
                setChallengeStatus(response.data.challenge);
                console.log(response.data.challenge);


            } catch (error) {
                // Bir hata oluştuysa burada işleyebilirsiniz.
            }
        }

        console.log(challengeStatus)

        const getUserAvailableBalance = async () => {
            try {
                const response = await axios.get(`https://ribu-backend.civitaseterna.com/User/AvailableBalance/${userId}`);

                setAvblBalance(Number(response.data));


            } catch (error) {
                // Bir hata oluştuysa burada işleyebilirsiniz.
            }
        }



        const interval = setInterval(() => {
            getUser();
            getUserAvailableBalance();
        }, 1000);

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // interval değişkenini sıfırlayın.
        return () => clearInterval(interval);
    }, [userId], [challengeStatus]);






    function handleChangeLimit(event) {
        const newLimit = event.target.value;
        setLimit(newLimit);
    }




    useEffect(() => {
        const socket = new window.WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            const number = Number(data.c);
            setPrice(number);
        };

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // websocket bağlantısını kapatın.
        return () => socket.close();
    }, []);

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

    async function limitBuy(event) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Limit_Order_Buy?userId=${userId}&pair=${pair}&size=${size / price}&limit=${limit}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

    async function limitSell(event) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Limit_Order_Sell?userId=${userId}&pair=${pair}&size=${size / price}&limit=${limit}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

    async function longStopLimit(event) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Long_Stop_Limit_Order?userId=${userId}&pair=${pair}&size=${size / price}&limit=${limit}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

    async function shortStopLimit(event) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Short_Stop_Limit_Order?userId=${userId}&pair=${pair}&size=${size / price}&limit=${limit}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

    const handleChangeLeverage = (event) => {
        const selectedOption = Number(event.target.value);
        axios.post(`https://ribu-backend.civitaseterna.com/User/Update_Leverage?userId=${userId}&newLeverage=${selectedOption}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    // useEffect(() => {
    //     const getUser = async () => {
    //         try {
    //             const response = await axios.get('https://ribu-backend.civitaseterna.com/User/' + userId);
    //             console.log(response.data);
    //             const realBalance = Number(response.data.realBalance);
    //             const leverage = Number(response.data.leverage);

    //             setAvblBalance(realBalance * leverage);


    //         } catch (error) {
    //             // Bir hata oluştuysa burada işleyebilirsiniz.
    //         }
    //     }

    //     // getUser fonksiyonunu her 1000 milisaniye (yani 1 saniye) bir çalıştırın.
    //     const interval = setInterval(getUser, 1000);

    //     // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
    //     // interval değişkenini sıfırlayın.
    //     return () => clearInterval(interval);
    // }, []);

    // const handleSizeChange = (newSize) => {
    //     setSize(Number(newSize));
    //     setPercentage1((newSize / avblBalance) * 100);
    // }

    useEffect(() => {
        setSize(avblBalance * (percentage1 / 100));
    }, [percentage1, avblBalance]);



    const handleSizeChange = (newSize) => {
        if (newSize > avblBalance) {
            setSize(avblBalance);
        } else if (newSize === "") {
            setSize("");
        } else {
            setSize(newSize);
        }
        setPercentage1(newSize / avblBalance * 100);
    }

    const handlePercentageChange = (newPercentage) => {
        if (newPercentage > 100) {
            setPercentage1(100);
        } else if (newPercentage === "") {
            setPercentage1("");
        } else {
            setPercentage1(newPercentage);
        }
        setSize(newPercentage / 100 * avblBalance);
    }

    return (
        <>
            {challengeStatus === 1 ?
                <div className="not-logged-in">
                    <div className="title">Bir Challenge Sahibi Değilsin!</div>
                    <Link to="/buy-challenge"><div className="challenge-satin-al">Challenge Satın Al</div></Link>
                </div>
                :
                <></>
            }

            <div className={challengeStatus === 1 ? "trade-area opacity03" : "trade-area"}>
                <div className="buy-sell-buttons">
                    <div onClick={() => setPositionDirection(0)} className={positionDirection === 0 ? "button yellowButton" : "button grayButton"}>BUY</div>
                    <div onClick={() => setPositionDirection(1)} className={positionDirection === 0 ? "button grayButton" : "button yellowButton"}>SELL</div>
                </div>
                <div className="order-type-area">
                    <div className={positionType === 0 ? "order-type colorYellow" : "order-type"} onClick={() => setPositionType(0)}>Limit</div>
                    <div className={positionType === 1 ? "order-type colorYellow" : "order-type"} onClick={() => setPositionType(1)}>Market</div>
                    <div className={positionType === 3 ? "order-type colorYellow" : "order-type"} onClick={() => setPositionType(3)}>Stop Limit</div>
                </div>

                <CalculatorPopup open={openCalculatorPopup} onClose={() => setOpenCalculatorPopup(false)} />
                {/* <TakeProfitPopup open={openTakeProfitPopup} onClose={() => setOpenTakeProfitPopup(false)} /> */}
                <PnlPopup open={openPnlPopup} onClose={() => setOpenPnlPopup(false)} />



                <div className="amount-area">
                    <div className="avlbl">
                        <div className="avlbl-title">Avbl</div>
                        <div className="avlbl-amount">{Number(avblBalance).toFixed(2)} USDT</div>
                        <div className="calculator-icon-area" onClick={() => setOpenCalculatorPopup(true)}>
                            <img src={calculatorIcon} alt="calculator icon" />
                        </div>
                    </div>

                    {positionType === 3 ?

                        <label className="trade-area-label">
                            <div className="input-area">
                                <div className="input-area-title">
                                    Stop Price
                                </div>
                                <div className="input">
                                    <input type="text" name="stop-price" placeholder='Stop Price' />
                                </div>
                                <div className="input-area-pair">USDT</div>
                            </div>


                        </label>

                        : null}

                    {positionType === 0 || 3 ?

                        <label className="trade-area-label">
                            <div className="input-area">
                                <div className="input-area-title">
                                    Price
                                </div>
                                <div className="input">
                                    <input type="text" name="price" placeholder='price' onChange={handleChangeLimit} />
                                </div>
                                <div className="last-btn">Last</div>
                                <div className="input-area-pair">USDT</div>
                            </div>


                        </label>

                        : null

                    }





                    <label className="trade-area-label">
                        <div className="input-area">
                            <div className="input-area-title">
                                Size
                            </div>
                            <div className="input">
                                <input type="number" max={avblBalance} value={parseFloat(size).toFixed(0)} placeholder="size" onChange={event => {
                                    setSize(event.target.value);
                                    handleSizeChange(event.target.value);
                                }} />
                            </div>
                            <div className="input-area-pair">USDT</div>
                        </div>


                    </label>
                    <div className="amount-bar">
                        <div className="selection-bar">
                            <input type="range" onChange={(event) => {
                                setPercentage1(event.target.value);
                                handlePercentageChange(event.target.value);
                            }} value={percentage1} />
                            <div style={{ width: `${percentage1}%` }}>{Number(percentage1).toFixed(2)}%</div>
                        </div>
                    </div>
                </div>
                <div className="leverage-area">
                    <div className="leverage-bar">
                        <div className="leverage-bar-title">
                            Account Leverage:
                        </div>
                        <select onChange={(event) => handleChangeLeverage(event)}>
                            <option>1</option>
                            <option>3</option>
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>75</option>
                            <option>100</option>
                        </select>
                    </div>
                </div>
                <div className="button-area">


                    {positionType === 0 ?
                        <>
                            {positionDirection === 0 ?
                                <div className="button" onClick={(event) => limitBuy(event)}>Buy/Long BTC</div>
                                :
                                <div className="button" onClick={(event) => limitSell(event)}>Short/Sell BTC</div>
                            }
                        </>
                        : positionType === 1 ?
                            <>
                                {positionDirection === 0 ?
                                    <div className="button" onClick={(event) => marketBuy(event)}>Buy/Long BTC</div>
                                    :
                                    <div className="button" onClick={(event) => marketSell(event)}>Short/Sell BTC</div>
                                }
                            </>
                            : <>
                                {positionDirection === 0 ?
                                    <div className="button" onClick={(event) => longStopLimit(event)}>Buy/Long BTC</div>
                                    :
                                    <div className="button" onClick={(event) => shortStopLimit(event)}>Short/Sell BTC</div>
                                }
                            </>
                    }

                </div>
                <div className="leverage-info-area">
                    <div className="leverage-info">
                        Trading'de yüksek kaldıraç, özellikle volatil piyasalarda ve hızlı fiyat hareketleri sırasında büyük risk taşır ve büyük zararlara neden olabilir. Kaldıraç oranı ne kadar yüksekse, potansiyel kayıp o kadar büyük olur.
                    </div>
                </div>
            </div>
        </>

    )
}