import React, { useEffect, useState } from "react"
import Cookies from "universal-cookie"
import jwtDecode from "jwt-decode"
import axios from "axios"

const CalculatorPopup = ({ open, onClose }) => {
    if (!open) return null

    const [positionType, setPositionType] = useState(0);
    const [positionDirection, setPositionDirection] = useState(0);
    const [userId, setUserId] = useState();
    const [percentage1, setPercentage1] = useState(5);
    const [avblBalance, setAvblBalance] = useState();


    const [pair, setPair] = useState(1);
    const [size, setSize] = useState(0.1);
    const [entryLimit, setEntryLimit] = useState();
    const [stopLimit, setStopLimit] = useState();
    const [tpLimit, setTpLimit] = useState();

    const [price, setPrice] = useState(0);

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
    }, [userId]);






    function handleChangeEntryLimit(event) {
        const newLimit = event.target.value;
        setEntryLimit(newLimit);
    }

    function handleChangeStopLimit(event) {
        const newLimit = event.target.value;
        setStopLimit(newLimit);
    }

    function handleChangeTpLimit(event) {
        const newLimit = event.target.value;
        setTpLimit(newLimit);
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
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Limit_Order_Buy?userId=${userId}&pair=${pair}&size=${size / price}&limit=${entryLimit}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

    async function limitSell(event) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Limit_Order_Sell?userId=${userId}&pair=${pair}&size=${size / price}&limit=${entryLimit}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

    async function longStopLimit(event) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Long_Stop_Limit_Order?userId=${userId}&pair=${pair}&size=${size / price}&limit=${stopLimit}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

    async function shortStopLimit(event) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Short_Stop_Limit_Order?userId=${userId}&pair=${pair}&size=${size / price}&limit=${stopLimit}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

    async function longTakeProfit(event) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Limit_Order_Sell?userId=${userId}&pair=${pair}&size=${size / price}&limit=${tpLimit}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

    async function shortTakeProfit(event) {
        event.preventDefault();

        try {
            await axios.post(`https://ribu-backend.civitaseterna.com/Positions/Limit_Order_Buy?userId=${userId}&pair=${pair}&size=${size / price}&limit=${tpLimit}
            `);
            // İşlem başarılıysa burada bir mesaj gösterebilir veya bir işlem yapabilirsiniz.
        } catch (error) {
            // Bir hata oluştuysa burada işleyebilirsiniz.
        }
    }

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
        <div onClick={onClose} className="overlay-two">
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="popup_container">
                <div className="calculator-popup">
                    <div className="row">
                        <div onClick={() => setPositionDirection(0)} className={positionDirection === 0 ? "button yellowButton" : "button grayButton"}>BUY</div>
                        <div onClick={() => setPositionDirection(1)} className={positionDirection === 0 ? "button grayButton" : "button yellowButton"}>SELL</div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="order-type-area">
                                <div className={positionType === 0 ? "order-type colorYellow" : "order-type"} onClick={() => setPositionType(0)}>Limit</div>
                                <div className={positionType === 1 ? "order-type colorYellow" : "order-type"} onClick={() => setPositionType(1)}>Market</div>
                            </div>
                            <div className="avlbl">
                                <div className="avlbl-title">Avbl</div>
                                <div className="avlbl-amount">{Number(avblBalance).toFixed(2)} USDT</div>
                            </div>
                            {positionType === 0 ?
                                <label className="trade-area-label">
                                    <div className="input-area">
                                        <div className="input-area-title">
                                            Entry Price
                                        </div>
                                        <div className="input">
                                            <input type="text" name="stop-price" placeholder='Entry Price' onChange={handleChangeEntryLimit} />
                                        </div>
                                        <div className="input-area-pair">USDT</div>
                                    </div>


                                </label>
                                : null}

                            <label className="trade-area-label">
                                <div className="input-area">
                                    <div className="input-area-title">
                                        Take Profit:
                                    </div>
                                    <div className="input">
                                        <input type="text" name="stop-price" placeholder='TP Price' onChange={handleChangeTpLimit} />
                                    </div>
                                    <div className="input-area-pair">USDT</div>
                                </div>


                            </label>
                            <label className="trade-area-label">
                                <div className="input-area">
                                    <div className="input-area-title">
                                        Stop Loss:
                                    </div>
                                    <div className="input">
                                        <input type="text" name="stop-price" placeholder='Stop Price' onChange={handleChangeStopLimit} />
                                    </div>
                                    <div className="input-area-pair">USDT</div>
                                </div>


                            </label>
                            <label className="trade-area-label">
                                <div className="input-area">
                                    <div className="input-area-title">
                                        Size
                                    </div>
                                    <div className="input">
                                        <input type="number" max={avblBalance} value={parseFloat(size).toFixed(2)} placeholder="size" onChange={event => {
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
                            <div className="leverage-area">
                                <div className="leverage-bar">
                                    <div className="leverage-bar-title">
                                        Account Leverage:
                                    </div>
                                    <select>
                                        <option>1x</option>
                                        <option>3x</option>
                                        <option>5x</option>
                                        <option>10x</option>
                                        <option>25x</option>
                                        <option>50x</option>
                                        <option>75x</option>
                                        <option>100x</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="tp-sl-area">
                                <div className="bigger-title">Take Profit</div>
                                <div className="row">
                                    <div className="column">
                                        <div className="profit-usdt">+{positionDirection === 0 ?
                                            <>
                                                {positionType === 0 ?
                                                    <>
                                                        {Number(((tpLimit - entryLimit) / (entryLimit)) * (size)).toFixed(2)}
                                                    </>

                                                    :

                                                    <>
                                                        {Number(((tpLimit - price) / (price)) * (size)).toFixed(2)}
                                                    </>


                                                }

                                            </>

                                            :
                                            <>
                                                {positionType === 0 ?
                                                    <>
                                                        {Number(((entryLimit - tpLimit) / (entryLimit)) * (size)).toFixed(2)}
                                                    </>
                                                    :

                                                    <>
                                                        {Number(((price - tpLimit) / (price)) * (size)).toFixed(2)}
                                                    </>

                                                }
                                            </>


                                        } USDT</div>
                                        <div className="profit-split">
                                            <div className="title">
                                                Profit Split
                                            </div>
                                            <div className="challenge-finish-bar-area">
                                                <div>
                                                    Challenge'ın tamamlanmasına %2 Profit kaldı!
                                                </div>
                                                <div className="line-area">
                                                    <div className="line" id="line1"></div>
                                                    <div className="line" id="line2"></div>
                                                </div>
                                            </div>
                                            <div className="challenge-finish-bar-area">
                                                <div>
                                                    Stop kısıtlamasının bitmesine -%6 kaldı!
                                                </div>
                                                <div className="line-area">
                                                    <div className="line" id="line1"></div>
                                                    <div className="line" id="line2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-sl-area">
                                <div className="bigger-title">Stop Loss</div>
                                <div className="row">
                                    <div className="column">
                                        <div className="profit-usdt colorShort">{positionDirection === 0 ? "-" : ""}
                                            {positionType === 0 ?

                                                <>
                                                    {Number(((entryLimit - stopLimit) / (entryLimit)) * (size)).toFixed(2)}
                                                </>
                                                :
                                            
                                                <>
                                                    {Number(((price - stopLimit) / (price)) * (size)).toFixed(2)}
                                                </>

                                            }


                                            USDT</div>
                                        <div className="profit-split">
                                            <div className="title">
                                                Profit Split
                                            </div>
                                            <div className="challenge-finish-bar-area">
                                                <div>
                                                    Challenge'ın tamamlanmasına %8 Profit kaldı!
                                                </div>
                                                <div className="line-area">
                                                    <div className="line" id="line1"></div>
                                                    <div className="line" id="line2"></div>
                                                </div>
                                            </div>
                                            <div className="challenge-finish-bar-area">
                                                <div>
                                                    Challenge Başarısız!
                                                    Stop kısıtlamasının bitmesine -%3 kaldı!
                                                </div>
                                                <div className="line-area">
                                                    <div className="line" id="line1"></div>
                                                    <div className="line" id="line2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="button-area">

                            {positionType === 0 ?

                                <>
                                    {positionDirection === 0 ?
                                        <div className="button" onClick={(event) => {
                                            limitBuy(event);
                                            longStopLimit(event);
                                            longTakeProfit(event);

                                        }}>Buy/Long BTC</div>
                                        :
                                        <div className="button" onClick={(event) => {
                                            limitSell(event);
                                            shortStopLimit(event);
                                            shortTakeProfit(event);

                                        }}>Sell/Short BTC</div>

                                    }
                                </>

                                :

                                <>
                                    {positionDirection === 0 ?
                                        <div className="button" onClick={(event) => {
                                            marketBuy(event);
                                            longStopLimit(event);
                                            longTakeProfit(event);

                                        }}>Buy/Long BTC</div>
                                        :
                                        <div className="button" onClick={(event) => {
                                            marketSell(event);
                                            shortStopLimit(event);
                                            shortTakeProfit(event);

                                        }}>Sell/Short BTC</div>

                                    }
                                </>

                            }





                        </div>
                    </div>
                </div>
                <p onClick={onClose} className="close_popup">X</p>
            </div>

        </div>
    )
}

export default CalculatorPopup;