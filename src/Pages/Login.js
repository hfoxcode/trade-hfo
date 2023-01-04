import React, { useEffect, useRef, useState } from "react"
import Logo from "../img/Logo.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Button from "../Components/Button";
import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";


// const [username, setusername] = useState("");
// const [password, setpassword] = useState("");
// const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
// const users = [{ username: "Jane", password: "testpassword" }];
// const handleSubmit = (e) => {
// e.preventDefault()
// const account = users.find((user) => user.username === username);
// if (account && account.password === password) {
// setauthenticated(true)
// localStorage.setItem("authenticated", true);
// }
// };
// return (
// <div>
// <p>Welcome Back</p>
// <form onSubmit={handleSubmit}>
// <input
// type="text"
// name="Username"
// value={username}
// onChange={(e) => setusername(e.target.value)}
// />
// <input
// type="password"
// name="Password"
// onChange={(e) => setpassword(e.target.value)}
// />
// <input type="submit" value="Submit" />
// </form>
// </div>
// )


export default function Login() {



    const [loginPosts, setLoginPosts] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);
    const [userInfo, setUserInfo] = useState();
    const [userToken, setUserToken] = useState();
    const [status, setStatus] = useState();
    const [errorx, setErrorx] = useState();

    const client = axios.create({
        baseURL: "https://ribu-backend.civitaseterna.com"
    });





    // useEffect(() => {
    //   AllUsers();
    // }, []);

    // const AllUsers = async () => {
    //   const response = await getUsers();
    //   console.log(response.data);
    //   setUser(response.data);
    // };

    function handleLogin(e) {
        console.log(username);
        console.log(password);
        e.preventDefault();
        const fetchPost = async () => {
            // let response = await client.post('/api/Auth/Login?username=' + username + '&password=' + password);
            // setLoginPosts(response.data);
            client.post('/api/Auth/Login?username=' + username + '&password=' + password)
                .then((res) => {
                    console.log(res.data);
                    const token = res.data.token;
                    const user = jwtDecode(token);
                    setStatus(res.data.status);
                    const cookies = new Cookies();
                    cookies.set('token', token, { path: '/' });

                    setUserToken(token);
                    setUser(user);
                    console.log(user);

                }).catch((error) => {
                    console.log(error);
                    setErrorx(error);
                })






        };
        fetchPost();






    }

    function handleNavigate() {
        window.location.replace("/index.html");
    }





    // Pacman


    // useEffect(() => {
    //     const fetchPost = async () => {
    //         let response = await client.get('/User/2');
    //         setUserInfo(response.data);
    //     };
    //     fetchPost();
    // });

    console.log(user);
    console.log(userInfo);

    console.log(status);




    // console.log(loginPosts);

    // const handleLogin = (username, password) => {
    //     return axios
    //         .post('/api/Auth/Login?username=' + username + '&password=' + password)
    //         .then((response) => {
    //             if (response.data.username) {
    //                 localStorage.setItem("user", JSON.stringify(response.data));
    //             }

    //             return response.data;
    //         });
    // };



    console.log(loginPosts);




    return (
        <section className="login-page">
            <nav>
                <form>
                    <select className="select-language">
                        <option value="tr">Türkçe</option>
                        <option value="en">English</option>
                    </select>
                </form>
            </nav>
            <div className="login-page-container">
                <div className="logo-area">
                    <img src={Logo} alt="jacfold logo" />
                    <div>Ribu - <i>"Jumping across the Creek for Traders"</i></div>
                </div>
                <div className="form-area">
                    <div className="title">
                        Sign in to your account
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="textbox-area">
                            <input type="username" name="username" id="username" placeholder="Username" value={username}
                                onChange={(e) => setUsername(e.target.value)} />

                            <input type="password" name="password" id="password" placeholder="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="checkbox-area">
                            <div className="remember-me-checkbox">
                                <input type="checkbox" id="correct" name="correct" value="Correct" />
                                <label for="remember-me"> Remember me </label>
                            </div>
                            <div className="forgot-password-area">
                                Forgot Password?
                            </div>
                        </div>

                        <div className="login-area">
                            <input type="submit" name="submit" id="submit" class="Sing In" value="Sign In" />
                        </div>

                    </form>

                    <div className="new-user-area">
                        <div>New User?</div>
                        <div><Link to="sign-up">
                            <u>Register</u>
                        </Link></div>
                    </div>

                    {status === true ? handleNavigate() : errorx ? <>USER INFO ERROR</> : null}


                </div>
            </div>


        </section>


    )
}