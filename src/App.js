import React from "react"
import './App.css';
import ChallengeDesk from './Components/ChallengeDesk';
import Challenger from './Components/Challenger';
import ChallengeSteps from './Components/ChallengeSteps';
import Confidence from './Components/Confidence';
import Footer from './Components/Footer';
import Header from "./Components/Header"
import HeroContainer from "./Components/HeroContainer"
import BeginnerPage from './Pages/BeginnerPage';
import ChallengerPage from './Pages/ChallengerPage';
import HeroPage from './Pages/HeroPage';
import ProPage from './Pages/ProPage';
import Login from "./Pages/Login"
import AboutUs from "./Pages/AboutUsPage"

import {
  BrowserRouter as Router ,
  Route,
  Routes,
  Outlet
} from "react-router-dom";
import SignUp from './Pages/SignUp';
import HowItWorks from './Pages/HowItWorks';
import PostRequest from "./Components/PostRequest";
import Register from "./Pages/Register";
import Education from "./Components/Education";
import EducationPage from "./Pages/EducationPage";
import QuizPage from "./Pages/QuizPage";
import UserDashboardPage from "./Pages/UserDashboardPage";
import Roadmap from "./Components/Roadmap";
import IntroRoadmap from "./Components/IntroRoadmap";
import PaymentArea from "./Components/PaymentArea";
import Faq from "./Components/Faq";
import Pricing from "./Pages/Pricing";
import Leaderboard from "./Components/Leaderboard";
import HowItWorksDetailed from "./Components/HowItWorksDetailed";
import Markets from "./Components/Markets";
import Statistics from "./Components/Statistics";
import Blog from "./Components/Blog";
import Exchange from "./Components/Exchange";
import BuyChallenge from "./Components/BuyChallenge";
import ContactUs from "./Components/ContactUs";
import Certificates from "./Components/Certificates";
import ProfitSplitPage from "./Components/ProfitSplitPage";
import WhyRibuPage from "./Components/WhyRibuPage";
import BlogPage from "./Components/BlogPage";

function Layout() {
  return <div className='App'>
    <Header />
    <Outlet />
    <Footer />
  </div>
}

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HeroPage />} />
          <Route path="beginner" element={<BeginnerPage/>} />
          <Route path="challenger" element={<ChallengerPage/>}/>
          <Route path="pro" element={<ProPage/>}/>
          <Route path="login/sign-up" element={<SignUp/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="education" element={<EducationPage/>}/>
          <Route path="certificates" element={<Certificates/>}/>
          <Route path="education/quizzes" element={<QuizPage/>}/>
          <Route path="user-dashboard" element={<UserDashboardPage/>}/>
          <Route path="roadmap" element={<Roadmap/>}/>
          <Route path="profit-split-page" element={<ProfitSplitPage/>}/>
          <Route path="why-ribu" element={<WhyRibuPage/>}/>
          <Route path="intro-roadmap" element={<IntroRoadmap/>}/>
          <Route path="statistics" element={<Statistics/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="blog-page" element={<BlogPage/>}/>
          <Route path="pricing" element={<Pricing/>}/>
          <Route path="contact-us" element={<ContactUs/>}/>
          <Route path="markets" element={<Markets/>}/>
          <Route path="buy-challenge" element={<BuyChallenge/>}/>
          <Route path="leaderboard" element={<Leaderboard/>}/>
          <Route path="pro" element={<ProPage/>}/>
          <Route path="exchange" element={<Exchange/>}/>
          <Route path="payment-area" element={<PaymentArea/>}/>
          <Route path="how-it-works" element={<HowItWorks/>}/>
          <Route path="how-it-works-detailed" element={<HowItWorksDetailed/>}/>
          <Route path="faq" element={<Faq/>}/>
          <Route path="about-us" element={<AboutUs/>}/>
          <Route path="post-request" element={<PostRequest/>}/>
          <Route path="register-try-page" element={<Register/>}/>
          <Route path="*" element={"404"} />
        </Route>
      </Routes>
    </Router>




  );
}

export default App;
