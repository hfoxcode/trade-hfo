import axios from "axios";
import React, { useEffect, useRef } from "react"
import { useState } from "react";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

const UserInfo = () => {
    const [userData, setUserData] = useState(null);
    const [userId,setUserId] = useState();

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
                setUserData(response.data);


            } catch (error) {
                // Bir hata oluştuysa burada işleyebilirsiniz.
            }
        }



        const interval = setInterval(getUser, 1000);

        // Komponentin kaldırılacağı zaman (örneğin, bir sayfadan çıkıldığında),
        // interval değişkenini sıfırlayın.
        return () => clearInterval(interval);
    }, [userId]);
    
  
    const getUser = async () => {
      try {
        const response = await axios.get(
          `https://ribu-backend.civitaseterna.com/User/${userId}` 
        );
        const userData = response.data;
  
        setUserData(userData);
      } catch (error) {
        // Bir hata oluştuysa burada işleyebilirsiniz.
      }
    };
  
    // getUser fonksiyonunu her 5 saniyede bir çalıştırın.
    const interval = useRef();
    useEffect(() => {
      interval.current = setInterval(getUser, 1000);
      return () => clearInterval(interval.current);
    }, []);

    return (

        <>
            <div className="info-area">
                <div className="info">
                    <h5>Balance:</h5>
                    {userData && <p>${Number(userData.unRealBalance).toFixed(2)}</p>}
                </div>
                <div className="info">
                    <h5>Challenge Durumu:</h5>
                    {userData && <p>{userData.challenge === 1 ? "Discover" : userData.challenge === 2 ? "Approve" : "Ribu Trader"}</p>}
                </div>
                <div className="info">
                    <h5>Aylık Hedef:</h5>
                    {userData && <p>%{10 - userData.monthlyPnL} kaldı!</p>}
                </div>
                <div className="info">
                    <h5>Günlük Zarar Sınırı:</h5>
                    {userData &&<p>%{5 - userData.dailyPnL} kaldı!</p>}
                </div>
                <div className="info">
                    <h5>Aylık Zarar Sınırı:</h5>
                    {userData &&<p>%{10 + userData.monthlyPnL} kaldı!</p>}
                </div>
                <div className="info">
                    <h5>Leaderboard:</h5>
                    <p>17.Sıradasın!</p>
                </div>
                <div className="info">
                    <h5>Account PNL:</h5>
                    {userData &&<p>%{(userData.pnL * 100).toFixed(3)}</p>}
                </div>
            </div>
        </>

    )
}

export default UserInfo;