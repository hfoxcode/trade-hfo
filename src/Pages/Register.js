import React, { useEffect, useRef } from "react"
import axios from "axios"
import Logo from "../img/Logo.png"
import { redirect, useNavigate } from "react-router"
import DirectToLogin from "../Components/DirectToLogin"

export default function Register() {
    const username = useRef()
    const password = useRef()
    const startingBalance = useRef();

    const headers = {
        'Content-Type': 'text/plain'
    };

    const signUp = async function (data) {
        const str = `?username=${data.username}&password=${data.password}&startingBalance=10000`
        try {
            const response = await axios.post(
                "https://ribu-backend.civitaseterna.com/User" + str,
                { headers }
            );
            if(response.data.message === "User Added!") {
                window.location.replace("/login")
            }
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };
    const singUp = (e) => {
        e.preventDefault();
        let data = {
            username: username.current.value,
            password: password.current.value,
        }
        console.log(data);
        signUp(data)

    }
    return (
        <section className="SignIn">
            <div className="sign-in-area">
                <div className="sign-in-page-header">
                    <img src={Logo} alt="jacfold logo" />
                    <div>Ribu - <i>"Jumping across the Creek for Traders"</i></div>
                </div>

                <div className="sign-in-page-body">
                    <div className="sign-in-container">
                        <div className="row1">
                            Sign Up
                        </div>
                        <div className="row2">
                            <div className="description">
                                Enter your details to create your account:
                            </div>
                            <div className="form-area">
                                {/* onSubmit={(event) => onsubmit(event)} */}
                                <form >


                                    <div className="input-area">

                                        {/* onChange={handle()}     {...register("email")}  */}
                                        <input type="text" name="username" placeholder="Username" ref={username} />

                                        <input type="text" name="firstname" placeholder="First Name" />

                                        <input type="text" name="lastname" placeholder="Last Name" />

                                        <input type="email" name="email" placeholder="Email" />

                                        <input type="text" name="password" placeholder="Password" ref={password} />

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
                                        <input type="submit" name="submit" class="Sing Up" value="Sign Up" onClick={singUp} />
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}