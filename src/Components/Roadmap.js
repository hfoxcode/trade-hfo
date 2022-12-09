import React, { useState } from "react"
import LockIcon from "../img/lock.png"
import QuizIcon from "../img/quiz.png"
import EducationPopup from "./EducationPopup"
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import Quiz from "./Quiz";
import Confetti from "../img/confetti.png";
import PartyPopper from "../img/party-popper.png";
import Quiz2Icon from "../img/quiz_2_icon.png";

export default function Roadmap() {
    const [openEducationPopup, setOpenEducationPopup] = useState(false);
    const [stepActive, setStepActive] = useState(0);
    const [roadmapStep, setRoadmapStep] = useState(1);
    const [whichStep, setWhichStep] = useState(1);


    const EducationPopup = ({ open, onClose }) => {
        if (!open) return null

        return (
            <div className="overlay">
                <div onClick={(e) => {
                    e.stopPropagation()
                }} className="popup_container">
                    <p onClick={onClose} className="close_popup">X</p>
                </div>

                {whichStep === 1 ?
                    <YouTube
                        videoId="b16dxXK1uHk"
                        onStateChange={(e) => checkElapsedTime(e)}
                    />
                    : whichStep === 2 ?

                        <div className="congrats-card">
                            <div className="title">Tebrikler</div>
                            <div className="card-bottom">
                                <div className="bottom-title">1. aşamayı tamamladın.</div>
                                <div className="image"><img src={PartyPopper}></img></div>
                                <div className="description">
                                    <div className="row">

                                        <div className="description-bar-title">İlerleme Durumun</div>
                                        <div className="description-bar">%60</div>
                                    </div>

                                </div>
                            </div>
                            <div onClick={() => setWhichStep(3)} className="button">Next</div>


                        </div>

                        : whichStep === 3 ?
                            <YouTube
                                videoId="m2BD4rih4wU"
                                onStateChange={(e) => checkElapsedTime(e)}
                            />
                            : whichStep === 4 ?

                                <div className="congrats-card">
                                    <div className="title">Şimdi Quiz Zamanı</div>
                                    <div className="card-bottom">
                                        <div className="bottom-title">Öğrendiklerini pekiştirmek için Quiz'e başla!</div>
                                        <div className="image"><img src={Quiz2Icon}></img></div>
                                        <div className="description">
                                            <div className="row">

                                                <div className="description-bar-title">İlerleme Durumun</div>
                                                <div className="description-bar">%60</div>
                                            </div>

                                        </div>
                                    </div>
                                    <div onClick={() => setWhichStep(5)} className="button">Next</div>


                                </div>

                                : whichStep === 5 ?
                                    <div className="quiz-area">
                                        <iframe name='proprofs' id='proprofs' width='800px' height='700px' frameborder="0" marginwidth="0" marginheight="0" src='https://www.proprofs.com/quiz-school/ugc/story.php?title=mzyxnjm1mazcjj&id=3618552&ew=430'></iframe>
                                    </div>

                                    : whichStep === 6 ?

                                        <div className="congrats-card">
                                            <div className="title">Tebrikler! Eğitimi tamamladın.</div>
                                            <div className="card-bottom">
                                                <div className="bottom-title">Şimdi hemen challenge aşamasına geçerek trade etmeye başlayabilirsin!</div>
                                                <div className="image"><img src={Quiz2Icon}></img></div>
                                                <div className="description">
                                                    <div className="row">

                                                        <div className="description-bar-title">İlerleme Durumun</div>
                                                        <div className="description-bar">%60</div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="button">Challenge</div>


                                        </div>

                                        : null}



            </div>
        )
    }

    const checkElapsedTime = (e) => {
        const duration = e.target.getDuration();
        const currentTime = e.target.getCurrentTime();
        if (currentTime / duration > 0.99) {
            if (whichStep === 2) {
                setWhichStep(3);
            } else if (whichStep === 1) {
                setRoadmapStep(2);
                setWhichStep(2);
            } else if (whichStep === 3) {
                setWhichStep(4);
            }

            console.log(roadmapStep);

        }
    };



    return (
        <section className="roadmap">
            <div className="title">İlk Adım: Eğitimi Tamamla!</div>
            <div className="roadmap-container">



                <div className="row" >
                    <div className="box" onMouseEnter={() => setStepActive(1)} onMouseLeave={() => setStepActive(0)} onClick={() => {
                        setOpenEducationPopup(true);
                    }

                    }>

                        {stepActive === 0 ?
                            <div></div>
                            : stepActive === 1 ?

                                <div className="step-description">
                                    Technical Analysis 101
                                </div>
                                : null
                        }
                        <div className="step-count">
                            1
                        </div>


                    </div>

                    <EducationPopup open={openEducationPopup} onClose={() => setOpenEducationPopup(false)} />



                    <div className="line-area">
                        <div className="line2">

                        </div>
                    </div>
                    <div className="box" onMouseEnter={() => setStepActive(2)} onMouseLeave={() => setStepActive(0)} onClick={() => {
                        setOpenEducationPopup(true);
                    }


                    }>
                        {roadmapStep === 2 ?
                            <div className="step-count">
                                2
                            </div>
                            : roadmapStep === 1 ?
                                <div className="image-container step-count">
                                    <img src={LockIcon} alt="lock icon" />
                                </div>
                                : null
                        }

                        {stepActive === 0 ?
                            <div></div>
                            : stepActive === 2 ?

                                <div className="step-description">
                                    Trend Çizgileri Nedir?
                                </div>
                                : null
                        }



                    </div>
                    <div className="line-area">
                        <div className={roadmapStep === 2 ? "line2  bgcolorwhite" : "line2"}>

                        </div>
                    </div>




                    <div className="box" onMouseEnter={() => setStepActive(3)} onMouseLeave={() => setStepActive(0)} onClick={() => {
                        setOpenEducationPopup(true);
                    }


                    }>
                        {roadmapStep === 3 ?
                            <div className="step-count">
                                3
                            </div>
                            : roadmapStep === 1 || 2 ?
                                <div className="image-container step-count borderPurple">
                                    <img src={LockIcon} alt="lock icon" />
                                </div>
                                : null
                        }

                        {stepActive === 0 ?
                            <div></div>
                            : stepActive === 3 ?

                                <div className="step-description">
                                    Quiz 1 : Teknik Analiz 101
                                </div>
                                : null
                        }



                    </div>
                </div>
                <div className="horizontal-line-area">
                    <div className="horizontal-line"></div>
                </div>
                <div className="row">
                    <div className="box" onClick={() => setWhichStep(6)}>
                        <div className="image-container">
                            <img src={LockIcon} alt="lock icon" />
                        </div>
                    </div>
                    <div className="line-area">
                        <div className="line2">

                        </div>
                    </div>
                    <div className="box">
                        <div className="image-container">
                            <img src={LockIcon} alt="lock icon" />
                        </div>
                    </div>
                    <div className="line-area">
                        <div className="line2">

                        </div>
                    </div>
                    <div className="box">
                        <div className="image-container">
                            <img src={LockIcon} alt="lock icon" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}