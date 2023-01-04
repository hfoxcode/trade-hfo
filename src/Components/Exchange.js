import React, { useEffect, useState } from 'react';
import { AdvancedChart } from "react-tradingview-embed";
import bitcoin from "../img/bitcoin.png"
import OrderBook from './OrderBook';
import takeProfitIcon from "../img/take-profit.png";
import calculatorIcon from "../img/calculator.png";
import CalculatorPopup from '../Components/CalculatorPopup';
// import TakeProfitPopup from '../Components/TakeProfitPopup';
import PnlPopup from "../Components/PnlPopup";
import resize from "../img/resize.png";
import axios from 'axios';
import ws from "ws";
import PositionsData from './PositionsData';
import PriceBar from './PriceBar';
import UserInfo from './UserInfo';
import TradeArea from './TradeArea';
import BottomHeader from './BottomHeader';
import OrdersData from './OrdersData';


export default function Exchange() {

    const [positionType, setPositionType] = useState(0);
    const [positionDirection, setPositionDirection] = useState(0);

    const [openCalculatorPopup, setOpenCalculatorPopup] = useState(false);
    // const [openTakeProfitPopup, setOpenTakeProfitPopup] = useState(false);
    const [openPnlPopup, setOpenPnlPopup] = useState(false);
    const [userId, setUserId] = useState('48');
    const [realBalance, setRealBalance] = useState();
    const [leverage, setLeverage] = useState();
    const [userData, setUserData] = useState();
    const [positionsPage, setPositionsPage] = useState(1);


    const [pair, setPair] = useState(1);
    const [size, setSize] = useState(0.1);

    const [price, setPrice] = useState(0);

    // useEffect(() => {
    //     const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');

    //     socket.onmessage = event => {
    //         console.log('Received data:', event.data);
    //         const data = JSON.parse(event.data);
    //         setPrice(data.c);
    //     };

    //     // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
    //     // websocket bağlantısını kapatın.
    //     return () => socket.close();
    // }, []);


    // const getUser = async () => {
    //     try {
    //         const response = await axios.get('https://ribu-backend.civitaseterna.com/User/' + userId);
    //         const userData = response.data;


    //         setUserData(userData);

    //     } catch (error) {
    //         // Bir hata oluştuysa burada işleyebilirsiniz.


    //     }

    //     // getData fonksiyonunu her 1000 milisaniye (yani 1 saniye) bir çalıştırın.
    //     const interval = setInterval(getUser, 5000);

    //     // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
    //     // interval değişkenini sıfırlayın.
    //     return () => clearInterval(interval);
    // }
    //     useEffect(() => {
    //   getUser()
    //     }, []);

    //     console.log(userData);

    //     const [positionsData, setPositionsData] = useState([]);

    // GET POSITIONS DATA







    const [widgetProps, setWidgetProps] = useState({
        theme: "dark",
        symbol: "BINANCE:BTCUSDT",
        allow_symbol_change: false,
        toolbar_bg: "#17181e",
        height: 572,
        width: 907,
        backgroundColor: "#17181e"
    });

    useEffect(() => {
        // widgetProps prop'unu değiştirirken bileşenin yeniden render edilmesini önleyin
        setWidgetProps({
            ...widgetProps,
            symbol: "BINANCE:BTCUSDT"
        });
    }, []);




    return (
        <section className="exchange">
           <BottomHeader/>
            <section className="inside-container">
                <div className="outside-column">
                    <PriceBar />
                    <div className="row">
                        <div className="inside-column">
                            <AdvancedChart
                                widgetProps={widgetProps}
                            />
                        </div>
                        <div className="inside-column">
                            <OrderBook />
                        </div>
                    </div>
                    <div className="row">
                        <div className="positions-table-header">
                            <ul className="navs">
                                <li className={positionsPage === 1 ? "colorYellow" : null} onClick={() => setPositionsPage(1)}>Açık Pozisyonlar(0)</li>
                                <li className={positionsPage === 2 ? "colorYellow" : null} onClick={() => setPositionsPage(2)}>Açık Emirler</li>
                                <li className={positionsPage === 3 ? "colorYellow" : null} onClick={() => setPositionsPage(3)}>Emir Geçmişi</li>
                                <li className={positionsPage === 4 ? "colorYellow" : null} onClick={() => setPositionsPage(4)}>Trade Geçmişi</li>
                            </ul>
                        </div>
                        <div className="positions-table-area">
                            {positionsPage === 1 ?
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Sembol</td>
                                            <td>Boyut</td>
                                            <td>Giriş Fiyatı</td>
                                            <td>Mark Price</td>
                                            <td>Challenge Liq Fiyatı</td>
                                            <td>PNL(ROE %)</td>
                                            <td>Close All Positions</td>
                                            <td>TP/SL for Position</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <PositionsData />
                                    </tbody>
                                </table>
                                : positionsPage === 2 ?
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>Pair</td>
                                                <td>Limit</td>
                                                <td>Size</td>
                                                <td>Direction</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <OrdersData />
                                        </tbody>
                                    </table>
                                    : positionsPage === 3 ?
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Time</td>
                                                    <td>Symbol</td>
                                                    <td>Type</td>
                                                    <td>Side</td>
                                                    <td>Price</td>
                                                    <td>Amount</td>
                                                    <td>Filled</td>
                                                    <td>Trigger Conditions</td>
                                                    <td>TP/SL</td>
                                                    <td>Cancel All</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <PositionsData />
                                            </tbody>
                                        </table>
                                        :
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Time</td>
                                                    <td>Symbol</td>
                                                    <td>Side</td>
                                                    <td>Price</td>
                                                    <td>Quantity</td>
                                                    <td>Role</td>
                                                    <td>Realized Profile</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <PositionsData />
                                            </tbody>
                                        </table>


                            }

                        </div>
                    </div>
                </div>
                <div className="outside-column">
                    <TradeArea />
                    <UserInfo userId={userId} />
                </div>
            </section>
        </section>
    )
}
