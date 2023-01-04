import React from "react"
import { useState } from "react";
import search from "../img/search.png";


const SelectCurrency = (props) => {
    const { open, onClose, item, price, ethPrice, bnbPrice } = props;
    if (!open) return null


    



    return (
        <div onClick={onClose} className="overlay-last">
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="popup_container">
                <div className="take-profit-popup">
                    <div className="header">
                        <div className="title">
                            Select Currency
                        </div>
                    </div>

                </div>
                <div className="table-container">
                    <div className="header-table">
                        <div className="search-area">
                            <div className="search-icon">
                                <img src={search} alt="search icon"/>
                            </div>
                            <div className="input-area">
                                <input type="text" value="search" placeholder="Search"/> 
                            </div>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Symbol</td>
                                    <td>Last Price</td>
                                    <td>24h%</td>
                                    <td>Vol.</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>BTCUSDT</td>
                                    <td>{price}</td>
                                    <td>-0.09%</td>
                                    <td>213981273981273981M</td>
                                </tr>
                                <tr>
                                    <td>ETHUSDT</td>
                                    <td>{price}</td>
                                    <td>-0.09%</td>
                                    <td>213981273981273981M</td>
                                </tr>
                                <tr>
                                    <td>BNBUSDT</td>
                                    <td>{price}</td>
                                    <td>-0.09%</td>
                                    <td>213981273981273981M</td>
                                </tr>
                                <tr>
                                    <td>SOLUSDT</td>
                                    <td>{price}</td>
                                    <td>-0.09%</td>
                                    <td>213981273981273981M</td>
                                </tr>
                                <tr>
                                    <td>AVAXUSDT</td>
                                    <td>{price}</td>
                                    <td>-0.09%</td>
                                    <td>213981273981273981M</td>
                                </tr>
                                <tr>
                                    <td>NEARUSDT</td>
                                    <td>{price}</td>
                                    <td>-0.09%</td>
                                    <td>213981273981273981M</td>
                                </tr>
                                <tr>
                                    <td>APEUSDT</td>
                                    <td>{price}</td>
                                    <td>-0.09%</td>
                                    <td>213981273981273981M</td>
                                </tr>
                                <tr>
                                    <td>FTMUSDT</td>
                                    <td>{price}</td>
                                    <td>-0.09%</td>
                                    <td>213981273981273981M</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p onClick={onClose} className="close_popup">X</p>
            </div>

        </div >
    )
}

export default SelectCurrency;