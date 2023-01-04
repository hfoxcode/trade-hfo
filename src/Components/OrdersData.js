import axios from "axios";
import jwtDecode from "jwt-decode";
import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "universal-cookie";

export default function OrdersData() {
    
    const [userId,setUserId] = useState();
    const [ordersData,setOrdersData] = useState();

    useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserId(decodedToken.name);
        }
    
        const getOrdersData = async () => {
            const result = await axios.get(`https://ribu-backend.civitaseterna.com/api/Orders/AllUserOrders/${userId}`);
            setOrdersData(result.data);
        };
    
        getOrdersData();
    
    }, [userId]);

    return (
        <section className="open-orders">
        {ordersData && ordersData.map((item, index) => (
          <>
            <tr key={item.pair === 1 ? "BTCUSDT" : item.pair === 2 ? "ETHUSDT" : item.pair === 3 ? "BNBUSDT" : null}>
              <td>{item.pair === 1 ? "BTCUSDT" : item.pair === 2 ? "ETHUSDT" : item.pair === 3 ? "BNBUSDT" : null}</td>
              <td className={item.type === "LONG" ? "colorGreen width75" : "colorShort width75"}>{item.limit} USDT</td>
              <td className="width54">{Number(item.size).toFixed(2)}</td>
              <td className="width54">{item.type}</td>
            </tr>
          </>
        ))}
      </section>
    )
}