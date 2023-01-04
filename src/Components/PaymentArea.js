import React, { useState } from "react"
import { Form, Link } from "react-router-dom";
import paymentBackgroundImage from "../img/payment-credit-card-icon.png";
import MetamaskLogo from "../img/MetaMask-Logo.png"
import axios from "axios";
import { useEffect } from "react";
import Cookies from "universal-cookie"
import jwtDecode from "jwt-decode";


export default function PaymentArea() {
    const [activePage, setActivePage] = useState(false);
    const [userId, setUserId] = useState();

    const client = axios.create({
        baseURL: "https://ribu-backend.civitaseterna.com"
    });

    useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get('token');


        if (token) {
            const user = jwtDecode(token);
            console.log(user.name);
            setUserId(user.name);
            // Make the Axios request inside the setUserId callback
        }
    }, []);


    function handleChallengeUpgrade() {
        axios.post(`https://ribu-backend.civitaseterna.com/User/UserChallengeLvlUp?userId=${userId}`)
          .then(response => {
            console.log(response);
            // Burada, istek başarılı bir şekilde tamamlandığında yapılacak işlemleri yazabilirsiniz.
            // Örneğin, kullanıcının zorluk seviyesi yükseltilmişse, bunu kullanıcıya bildirebilirsiniz.
          })
          .catch(error => {
            console.log(error);
            // Burada, istek sırasında bir hata oluştuğunda yapılacak işlemleri yazabilirsiniz.
            // Örneğin, hata mesajını kullanıcıya gösterebilir veya hata loglamak isteyebilirsiniz.
          });
      }


    return (
        <section className="payment-area">
            <div className="column">
                <div className="row">
                    <div className="title">Payments</div>
                    <div className="description">
                        <div className="buttons-area">
                            <div className="button" onClick={() => setActivePage(false)}>Pay with Credit Card</div>
                            <div className="button" onClick={() => setActivePage(true)}>Pay with Crypto</div>
                        </div>
                        <div className="image-area">

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-area">
                        {activePage === false ?
                            <form >


                                <div className="input-area">

                                    {/* onChange={handle()}     {...register("email")}  */}
                                    <input type="text" name="credit-card-number" placeholder="Credit Card Number" />

                                    <input type="text" name="expiration-date" placeholder="Expiration Date" />

                                    <input type="text" className="width250px" name="cvc-cvv" placeholder="CVC/CCV" />
                                </div>

                                <div className="checkbox-area">
                                    <div className="firstCheckbox">
                                        {/* onChange={handle()} */}
                                        <input type="checkbox" id="agree" name="agree" value="Agree" />
                                        <label htmlFor="agree"> I agree to the processing of personal data according to Privacy policy. </label>
                                    </div>
                                    <div className="firstCheckbox">
                                        <input type="checkbox" id="correct" name="correct" value="Correct" />
                                        <label htmlFor="correct"> I acknowledge my name is correct and corresponds to the government issued identification. </label>
                                    </div>

                                </div>

                                {/* {errors.exampleRequired && <span>This field is required</span>} */}

                                <div className="sign-up-area">
                                    <Link to="/user-dashboard">
                                        <input type="submit" name="submit" class="Sing Up" value="Pay Now" onClick={() => handleChallengeUpgrade()} />
                                    </Link>

                                </div>


                            </form>
                            :

                            <>
                                <div className="metamask-logo">
                                    <img src={MetamaskLogo} alt="metamask logo" />

                                </div>
                                <div className="button width164px fja" onClick={() => handleChallengeUpgrade()}>
                                    <Link to="/user-dashboard" >
                                        Pay with Metamask
                                    </Link>
                                </div>
                            </>

                        }

                    </div>
                </div>
            </div>
        </section>
    )
}