import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import upArrow from "../img/up-arrow.png"
import flag from "../img/flag.png"



export default function OrderBook() {
    
    return (
        <section className="orderbook">
            <div className="orderbook-table-header">
                <div className="title">
                    Emir Defteri
                </div>
            </div>
            <div className="amount-selector-area">
                <div className="amount-dropdown">
                    0.5
                </div>
            </div>
            <div className="orderbook-table-area">
                <table className="sell-table">
                    <thead>
                        <tr>
                            <td>Fiyat(USDT)</td>
                            <td>Miktar(BTC)</td>
                            <td>Toplam(BTC)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bgcolor1515">
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr>
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr className="bgcolor1515">
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr>
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr className="bgcolor1515">
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr>
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr className="bgcolor1515">
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr>
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr className="bgcolor1515">
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                    </tbody>
                </table>
                <div className="table-price-area">
                    <div className="div-title">
                        <div className="column">
                            <div className="arrow">
                                <img src={upArrow} alt="up arrow icon" />
                            </div>
                            <div className="price-title">
                                16,731.00
                            </div>
                        </div>

                        <div className="column">
                            <div className="best-ask-bid-icon">
                                <img src={flag} alt="flag icons" />
                            </div>
                            <div className="best-ask-bid">
                                16,731.00
                            </div>
                        </div>
                    </div>
                </div>
                <table className="buy-table">
                    <tbody>
                        <tr className="bgcolor1515">
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr>
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr className="bgcolor1515">
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr>
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr className="bgcolor1515">
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr>
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr className="bgcolor1515">
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr>
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                        <tr className="bgcolor1515">
                            <td>16,733.50</td>
                            <td>8.369</td>
                            <td>44.636</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}