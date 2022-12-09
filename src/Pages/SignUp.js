// import React, {useState} from "react"
// import Logo from "../img/Logo.png";
// import { useForm } from "react-hook-form";
// import Axios from "axios"

// // YOLA IKNA EDILENLERLE DEGIL, BEDELI ODENENLERLE CIKILIR.!
// // BEDEL IS LOADING...


// export default function SignUp() {
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     // const onSubmit = data => console.log(data);
//     const url ="xxx"

//     const [data,setData] = useState({
//         name: "",
//         firstname: "",
//         lastname: "",
//         email: ""
        
//     })

//     async function onSubmit(event) {
//         event.preventDefault();
//         Axios.post(url, {
//             firstname: data.firstname,
//             lastname: data.lastname,
//             userid: data.userid,
//             email: data.email
//         })
//             .then(res => {
//                 console.log(res.data)
//             })
        
        
//     }

//     async function handle(event) {
//         const newdata = {...data};
//         newdata[event.target.id] = event.target.value;
//         setData(newdata);
//         console.log(newdata);
//     }


//     return (
//         <section className="SignIn">
//             <div className="sign-in-page-header">
//                 <img src={Logo} alt="jacfold logo" />
//                 <div>Ribu - <i>"Jumping across the Creek for Traders"</i></div>
//             </div>

//             <div className="sign-in-page-body">
//                 <div className="sign-in-container">
//                     <div className="row1">
//                         Sign Up
//                     </div>
//                     <div className="row2">
//                         <div className="description">
//                             Enter your details to create your account:
//                         </div>
//                         <div className="form-area">
//                             <form onSubmit={(event) => onsubmit(event)}>

//                                 <div className="input-area">
//                                     <select onChange={handle(event)} name="selecttitle" placeholder="Select Title" {...register("selecttitle")}>
//                                         <option value="mr">Mr.</option>
//                                         <option value="mrs">Mrs.</option>
//                                         <option value="ms">Ms.</option>
//                                         <option value="mx">Mx.</option>
//                                     </select>

//                                     <input type="text" onChange={handle()} name="firstname" placeholder="First Name" {...register("firstname")} />

//                                     <input type="text" onChange={handle()} name="lastname" placeholder="Last Name" {...register("lastname")} />

//                                     <input type="email" onChange={handle()} name="email" placeholder="Email" {...register("email")} />

//                                     <input type="text" onChange={handle()} name="phonenumber" placeholder="Phone Number" {...register("phonenumber", { minLength: 12, maxLength: 12 })} />

//                                     <select name="selectyourcontient" onChange={handle()} placeholder="Select Your Continent" {...register("selectyourcontinent")}>
//                                         <option value="turkey">Turkey</option>
//                                         <option value="europe">Europe</option>
//                                         <option value="usa">USA</option>
//                                         <option value="asia">Asia</option>
//                                         <option value="africa">Africa</option>
//                                         <option value="australia">Australia</option>
//                                     </select>
//                                 </div>

//                                 <div className="checkbox-area">
//                                     <div className="firstCheckbox">
//                                         <input type="checkbox" onChange={handle()} id="agree" name="agree" value="Agree" />
//                                         <label for="agree"> I agree to the processing of personal data according to Privacy policy. </label>
//                                     </div>
//                                     <div className="firstCheckbox">
//                                         <input type="checkbox" onChange={handle()} id="correct" name="correct" value="Correct" />
//                                         <label for="correct"> I acknowledge my name is correct and corresponds to the government issued identification. </label>
//                                     </div>

//                                 </div>

//                                 {errors.exampleRequired && <span>This field is required</span>}

//                                 <div className="sign-up-area">
//                                     <input type="submit"  name="submit" class="Sing Up" value="Sign Up" />
//                                 </div>


//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </section>
//     )
// }