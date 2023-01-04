import React from "react"
import { useState } from "react";

export default function Faq() {

    const [answersVisible, setAnswersVisible] = useState({});

    // Function to toggle the visibility of an answer
    const toggleAnswer = (question) => {
        setAnswersVisible({
            ...answersVisible,
            [question]: !answersVisible[question],
        });
    };

    return (
        <section className="faq">
            <div className="row">
                <div className="title">Frequently Asked Questions</div>
                <div className="search-bar">
                    <input type="text" name="search" value="search" />
                </div>
            </div>
            <div className="row">
                <dl>
                    <dt className="question" onClick={() => toggleAnswer('react')}>What is Ribu?</dt>
                    <dd className="answer" style={{ display: answersVisible['react'] ? 'block' : 'none' }}>
                        Ribu is a platform.
                    </dd>
                    <dt className="question" onClick={() => toggleAnswer('how')}>How does Ribu work?</dt>
                    <dd className="answer" style={{ display: answersVisible['how'] ? 'block' : 'none' }}>
                        Ribu allows us trading.
                    </dd>
                    <dt className="question" onClick={() => toggleAnswer('why')}>Why should I use Ribu?</dt>
                    <dd className="answer" style={{ display: answersVisible['why'] ? 'block' : 'none' }}>
                        Ribu helps you trade good.
                    </dd>
                </dl>
            </div>
        </section>
    )
}