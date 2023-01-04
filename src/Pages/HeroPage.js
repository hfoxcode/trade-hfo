import React from "react"
import HeroContainer from "../Components/HeroContainer"
import ChallengeDesk from "../Components/ChallengeDesk"
import ChallengeSteps from "../Components/ChallengeSteps"
import Confidence from "../Components/Confidence"
import HowRibuDoingThis from "../Components/HowRibuDoingThis"
import AnimationComp from "../Components/AnimationComp"
import TradingObjectives from "../Components/TradingObjectives"

export default function HeroPage() {
    return (
        <>
            <HeroContainer />
            <ChallengeDesk />
            <TradingObjectives/>
            <ChallengeSteps />
        </>

    )
}