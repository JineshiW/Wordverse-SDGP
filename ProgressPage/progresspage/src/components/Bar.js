import React, { useState } from 'react';
import './Bar.css';

export default function Bar() {
    const [quizResult, setQuizResult] = useState(null);
    const totalQuestions = 10;

    const handleSubmit = () => {
        const result = calculateResult();
        setQuizResult(result);
    };

    const calculateProgress = () => {
        if (quizResult !== null) {
            return (quizResult / totalQuestions) * 100;
        } else {
            return 0;
        }
    };

    const calculateResult = () => {
        return Math.floor(Math.random() * totalQuestions) + 1;
    };
    return(
        <div>
            <div className="progress-container">
                <div className="progress-bar" style={{width:'${calculateProgress()}%'}}></div>
            </div>
        </div>
    );
}
