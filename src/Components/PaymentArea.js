import React, { useState } from "react"
import { Form } from "react-router-dom";
import paymentBackgroundImage from "../img/payment-credit-card-icon.png";
import MetamaskLogo from "../img/MetaMask-Logo.png"

export default function PaymentArea() {
    const [activePage, setActivePage] = useState(false);
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

                                    <input type="text" name="cvc-cvv" placeholder="CVC/CCV" />
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
                                    <input type="submit" name="submit" class="Sing Up" value="Pay Now" />
                                </div>


                            </form>
                            :

                            <>
                                <div className="metamask-logo">
                                    <img src={MetamaskLogo} alt="metamask logo"/>

                                </div>
                                <div className="button width164px fja">
                                    Pay with Metamask
                                </div>
                            </>

                        }

                    </div>
                </div>
            </div>
        </section>
    )
}