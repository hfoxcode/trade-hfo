import React from "react"
import EducationIcon from "../img/education_icon.png"
import QuizIcon from "../img/quiz_icon.png"
import CongratsIcon from "../img/congrats_icon.png"


export default function Beginner() {
    return (
        <section className="beginner">
            <div className="title">
                Beginner Roadmap
            </div>
            <div className="description padding">
                If you are new in trading, you can start from here.
            </div>
            <div className="icon-area-container">
                <div className="icons">
                    <div className="number">
                        01
                    </div>
                    <div className="icon">
                        <img src={EducationIcon} alt="education icon" />
                    </div>
                    <div className="title">
                        Education
                    </div>
                    <div className="description">
                        Click here and watch the educational contents.
                    </div>
                </div>
                <div className="icons">
                    <div className="number">
                        02
                    </div>
                    <div className="icon">
                        <img src={QuizIcon} alt="quiz icon" />
                    </div>
                    <div className="title">
                        Quiz
                    </div>
                    <div className="description">
                        Click here and solve the quizzes prepared for you.
                    </div>
                </div>
                <div className="icons">
                    <div className="number">
                        03
                    </div>
                    <div className="icon">
                        <img src={CongratsIcon} alt="congrats icon" />
                    </div>
                    <div className="title">
                        Congratulations!
                    </div>
                    <div className="description">
                        Now you area a challenger! Select a package for yourself. Click here to see packages.
                    </div>
                </div>
            </div>
            <section className="challenge-table">
                <div className="table-container">
                    <div className="row1-container">
                        <div className="row-1">
                            <div className="area-1">
                                <h4>10.000$</h4>
                                <h4>25.000$</h4>
                                <h4>100.000$</h4>
                            </div>
                            <div className="area-2">
                                <h4>Normal</h4>
                                <h4>Aggressive</h4>
                            </div>
                        </div>
                    </div>


                    <div className="row-2">
                        <table>
                            <tbody>
                                <tr>
                                    <div className="titlex">Trading Period</div>
                                    <div className="content-area">
                                        <td>30 Days</td>
                                        <td>60 Days</td>
                                        <td>indefinite</td>
                                    </div>
                                </tr>
                                <tr>
                                    <div className="titlex">Minimum Trading Days</div>
                                    <div className="content-area">
                                        <td>10 Days</td>
                                        <td>10 Days</td>
                                        <td>X</td>
                                    </div>
                                </tr>
                                <tr>
                                    <div className="titlex">Maximum Daily Loss</div>
                                    <div className="content-area">
                                        <td>$500</td>
                                        <td>$500</td>
                                        <td>$500</td>
                                    </div>
                                </tr>
                                <tr>
                                    <div className="titlex">Maximum Loss</div>
                                    <div className="content-area">
                                        <td>$1000</td>
                                        <td>$1000</td>
                                        <td>$1000</td>
                                    </div>
                                </tr>
                                <tr>
                                    <div className="titlex">Profit Target</div>
                                    <div className="content-area">
                                        <td>$1000</td>
                                        <td>$1000</td>
                                        <td>X</td>
                                    </div>
                                </tr>
                                <tr>
                                    <div className="titlex">Refundable Fee</div>
                                    <div className="content-area">
                                        <td>$100</td>
                                        <td>Free</td>
                                        <td>refund</td>
                                    </div>
                                </tr>
                            </tbody>
                        </table>
                        <div className="button-area">
                            <div className="button">
                                BUY
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </section>

    )
}