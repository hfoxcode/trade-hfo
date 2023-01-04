import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import payoutCertificates from "../img/tff-payout-certificates-image-container-area.png";

export default function Certificates() {
    const [activePage,setActivePage] = useState(1);
    return (
        <section className="certificates">
            <div className="column first-column">
                <div className="option">
                    <Link to="/user-dashboard">
                        Profile
                    </Link>
                </div>
                <div className="option">
                    <Link to="../roadmap">
                        Roadmap
                    </Link>
                </div>


                <div className="option">
                    <Link to="../intro-roadmap">
                        How To Start
                    </Link>
                </div>

                <div className="option">
                    <Link to="../certificates">
                        Certificates
                    </Link>
                </div>

                <div className="option">
                    <Link to="../statistics">Statistics</Link>
                </div>

                <div className="option">
                    <Link to="../leaderboard">Leaderboard</Link>
                </div>
            </div>
            <div className="certificates-container">
                <div className="button-area">
                    <div className={activePage === 1 ? "activeCertificatesPage" : "deactiveCertificatesPage"} onClick={() => setActivePage(1)}>
                        Passed Certificates
                    </div>
                    <div className={activePage === 2 ? "activeCertificatesPage" : "deactiveCertificatesPage"} onClick={() => setActivePage(2)}>
                        Payout Certificates
                    </div>
                    <div className={activePage === 3 ? "activeCertificatesPage" : "deactiveCertificatesPage"} onClick={() => setActivePage(3)}>
                        Leaderboard Certificates
                    </div>
                </div>
                <div className="certificates-area">
                    <img src={payoutCertificates} alt="payout certificates" />
                </div>
            </div>
        </section>
    )
}