import React from "react"
import bitcoin from "../img/bitcoin.png";
import star from "../img/star.png";
import searchIcon from "../img/search.png"
import { useState } from "react";
import { useEffect } from "react";
import ethereum from "../img/ethereum.png";
import bnb from "../img/bnb.png";
import { Link } from "react-router-dom";

export default function Markets() {

    const [price, setPrice] = useState();
    const [changePercentage, setChangePercentage] = useState();
    const [ethPrice, setEthPrice] = useState();
    const [ethChangePercentage, setEthChangePercentage] = useState();
    const [bnbPrice, setBnbPrice] = useState();
    const [bnbChangePercentage, setBnbChangePercentage] = useState();



    useEffect(() => {
        const socket = new window.WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            const number = Number(data.c);
            const fixedNumber = number.toFixed(1);
            setPrice(fixedNumber);
            setChangePercentage(data.P);
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
            setEthChangePercentage(data.P);
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
            setBnbChangePercentage(data.P);
        };

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // websocket bağlantısını kapatın.
        return () => socket.close();
    }, []);


    return (
        <section className="markets">
            <div className="row">
                <div className="title-area">
                    <div className="title">Markets</div>
                    <div classname="button">Markets Overview</div>
                </div>
                <div className="table-area">
                    <div className="column">
                        <div className="table-title">
                            Highlight Coin
                        </div>
                        <div className="table">
                            <ul>
                                <li>
                                    <div className="pair">
                                        <img src={bitcoin} alt="btc logo" />
                                        <div>BTC</div>
                                    </div>
                                    <div className="price">${price}</div>
                                    <div className="gain">{changePercentage}%</div>
                                </li>
                                <li>
                                    <div className="pair">
                                        <img src={ethereum} alt="btc logo" />
                                        <div>ETH</div>
                                    </div>
                                    <div className="price">${ethPrice}</div>
                                    <div className="gain">{ethChangePercentage}%</div>
                                </li>
                                <li>
                                    <div className="pair">
                                        <img src={bnb} alt="btc logo" />
                                        <div>BNB</div>
                                    </div>
                                    <div className="price">${bnbPrice}</div>
                                    <div className="gain">{bnbChangePercentage}%</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="column">
                        <div className="table-title">
                            Top Gainers
                        </div>
                        <div className="table">
                            <ul>
                                <li>
                                    <div className="pair">
                                        <img src={bitcoin} alt="btc logo" />
                                        <div>BTC</div>
                                    </div>
                                    <div className="price">${price}</div>
                                    <div className="gain">{changePercentage}%</div>
                                </li>
                                <li>
                                    <div className="pair">
                                        <img src={ethereum} alt="btc logo" />
                                        <div>ETH</div>
                                    </div>
                                    <div className="price">${ethPrice}</div>
                                    <div className="gain">{ethChangePercentage}%</div>
                                </li>
                                <li>
                                    <div className="pair">
                                        <img src={bnb} alt="btc logo" />
                                        <div>BNB</div>
                                    </div>
                                    <div className="price">${bnbPrice}</div>
                                    <div className="gain">{bnbChangePercentage}%</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="column">
                        <div className="table-title">
                            Top Volume
                        </div>
                        <div className="table">
                            <ul>
                                <li>
                                    <div className="pair">
                                        <img src={bitcoin} alt="btc logo" />
                                        <div>BTC</div>
                                    </div>
                                    <div className="price">${price}</div>
                                    <div className="gain">{changePercentage}%</div>
                                </li>
                                <li>
                                    <div className="pair">
                                        <img src={ethereum} alt="btc logo" />
                                        <div>ETH</div>
                                    </div>
                                    <div className="price">${ethPrice}</div>
                                    <div className="gain">{ethChangePercentage}%</div>
                                </li>
                                <li>
                                    <div className="pair">
                                        <img src={bnb} alt="btc logo" />
                                        <div>BNB</div>
                                    </div>
                                    <div className="price">${bnbPrice}</div>
                                    <div className="gain">{bnbChangePercentage}%</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="column">
                        <div className="table-title">
                            Most Traded in Ribu
                        </div>
                        <div className="table">
                            <ul>
                                <li>
                                    <div className="pair">
                                        <img src={bitcoin} alt="btc logo" />
                                        <div>BTC</div>
                                    </div>
                                    <div className="price">${price}</div>
                                    <div className="gain">{changePercentage}%</div>
                                </li>
                                <li>
                                    <div className="pair">
                                        <img src={ethereum} alt="btc logo" />
                                        <div>ETH</div>
                                    </div>
                                    <div className="price">${ethPrice}</div>
                                    <div className="gain">{ethChangePercentage}%</div>
                                </li>
                                <li>
                                    <div className="pair">
                                        <img src={bnb} alt="btc logo" />
                                        <div>BNB</div>
                                    </div>
                                    <div className="price">${bnbPrice}</div>
                                    <div className="gain">{bnbChangePercentage}%</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="choose-bar">
                    <div>
                        <img src={star} alt="star icon" />
                        <div>Favorites</div>
                    </div>
                    <div>
                        <img src={searchIcon} alt="search icon" />
                        <input type="text" placeholder="Search Coin Name" />
                    </div>
                </div>
                <div className="coin-table-area">
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>
                                    <div>
                                        1h
                                    </div>
                                    <div>
                                        4h
                                    </div>
                                    <div>
                                        24h
                                    </div>
                                    <div>
                                        Change
                                    </div>
                                </td>
                                <td>24h Volume</td>
                                <td>Market Cap</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="symbol-image">
                                        <img src={bitcoin} alt="bitcoin icon" />
                                    </div>
                                    <div className="symbol-ticker">
                                        BTC
                                    </div>
                                    <div className="symbol-full-name">
                                        Bitcoin
                                    </div>
                                </td>
                                <td>
                                    ${price}
                                </td>
                                <td>
                                    {changePercentage}
                                </td>
                                <td>
                                    19,732.13M
                                </td>
                                <td>
                                    $346,418.04M
                                </td>
                                <td>
                                    <Link to="/exchange">
                                        <div>Trade</div>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="symbol-image">
                                        <img src={ethereum} alt="ethereum icon" />
                                    </div>
                                    <div className="symbol-ticker">
                                        ETH
                                    </div>
                                    <div className="symbol-full-name">
                                        Ethereum
                                    </div>
                                </td>
                                <td>
                                    ${ethPrice}
                                </td>
                                <td>
                                    {ethChangePercentage}
                                </td>
                                <td>
                                    19,732.13M
                                </td>
                                <td>
                                    $346,418.04M
                                </td>
                                <td>
                                    <Link to="/exchange">
                                        <div>Trade</div>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="symbol-image">
                                        <img src={bnb} alt="bnb icon" />
                                    </div>
                                    <div className="symbol-ticker">
                                        BNB
                                    </div>
                                    <div className="symbol-full-name">
                                        Binance Coin
                                    </div>
                                </td>
                                <td>
                                    ${bnbPrice}
                                </td>
                                <td>
                                    {bnbChangePercentage}
                                </td>
                                <td>
                                    19,732.13M
                                </td>
                                <td>
                                    $346,418.04M
                                </td>
                                <td>
                                    <Link to="/exchange">
                                        <div>Trade</div>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="symbol-image">
                                        <img src={bitcoin} alt="bitcoin icon" />
                                    </div>
                                    <div className="symbol-ticker">
                                        BTC
                                    </div>
                                    <div className="symbol-full-name">
                                        Bitcoin
                                    </div>
                                </td>
                                <td>
                                    $19.000
                                </td>
                                <td>
                                    +0.17%
                                </td>
                                <td>
                                    19,732.13M
                                </td>
                                <td>
                                    $346,418.04M
                                </td>
                                <td>
                                    <Link to="/exchange">
                                        <div>Trade</div>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="symbol-image">
                                        <img src={bitcoin} alt="bitcoin icon" />
                                    </div>
                                    <div className="symbol-ticker">
                                        BTC
                                    </div>
                                    <div className="symbol-full-name">
                                        Bitcoin
                                    </div>
                                </td>
                                <td>
                                    $19.000
                                </td>
                                <td>
                                    +0.17%
                                </td>
                                <td>
                                    19,732.13M
                                </td>
                                <td>
                                    $346,418.04M
                                </td>
                                <td>
                                    <Link to="/exchange">
                                        <div>Trade</div>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="symbol-image">
                                        <img src={bitcoin} alt="bitcoin icon" />
                                    </div>
                                    <div className="symbol-ticker">
                                        BTC
                                    </div>
                                    <div className="symbol-full-name">
                                        Bitcoin
                                    </div>
                                </td>
                                <td>
                                    $19.000
                                </td>
                                <td>
                                    +0.17%
                                </td>
                                <td>
                                    19,732.13M
                                </td>
                                <td>
                                    $346,418.04M
                                </td>
                                <td>
                                    <Link to="/exchange">
                                        <div>Trade</div>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="symbol-image">
                                        <img src={bitcoin} alt="bitcoin icon" />
                                    </div>
                                    <div className="symbol-ticker">
                                        BTC
                                    </div>
                                    <div className="symbol-full-name">
                                        Bitcoin
                                    </div>
                                </td>
                                <td>
                                    $19.000
                                </td>
                                <td>
                                    +0.17%
                                </td>
                                <td>
                                    19,732.13M
                                </td>
                                <td>
                                    $346,418.04M
                                </td>
                                <td>
                                    <div>Trade</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="symbol-image">
                                        <img src={bitcoin} alt="bitcoin icon" />
                                    </div>
                                    <div className="symbol-ticker">
                                        BTC
                                    </div>
                                    <div className="symbol-full-name">
                                        Bitcoin
                                    </div>
                                </td>
                                <td>
                                    $19.000
                                </td>
                                <td>
                                    +0.17%
                                </td>
                                <td>
                                    19,732.13M
                                </td>
                                <td>
                                    $346,418.04M
                                </td>
                                <td>
                                    <Link to="/exchange">
                                        <div>Trade</div>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}