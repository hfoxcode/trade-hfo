import React from "react"
import { Link } from "react-router-dom"
import illustration1 from "../img/illustration1.png"

export default function HeroContainer() {

    return (
        <section className="hero-container">
            <div className="column-1">
                <div className="title-area">
                    <div className="hero-title">
                        ribu ile trade dünyasında
                    </div>
                    <div className="hero-description">
                        öğren, kanıtla, kazan
                    </div>
                </div>
                <div className="index-slogan-area">
                    <div className="slogan">
                        "Neque porro quisquam est qui dolorem ipsum quia dolornp sit amet, consectetur, adipisci velit..."
                    </div>

                    <Link to="how-it-works-detailed">
                        <div className="insideButton" id="insideBtn">
                            Keşfet
                        </div>
                    </Link>
                </div>


            </div>
            <div className="column2">
                <img src={illustration1} alt="illustration-1" />
            </div>

        </section>
    )
}