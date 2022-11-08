import React from 'react';
import { QuestionT } from '../application/customTypes';

import styles from './SurveyQuestion.module.scss';

interface Props {
    currentQuestion: QuestionT;
    handleLink: (link: number) => void;
}

const SurveyQuestion: React.FC<Props> = ({ currentQuestion, handleLink }) => {

    const answerButtons = (): Array<JSX.Element> => {
        return currentQuestion.answers.map((el, index) => (
            <button
                key={`answer-${index}`}
                onClick={() => handleLink(el.link)}
            >
                {el.text}
            </button>
        ));
    };

    return (
        <div className={styles.question}>
            <div className={styles.title}>
                <h2>{currentQuestion.question}</h2>
            </div>

            <div className={styles.answers}>
                { answerButtons() }
            </div>
        </div>
    )
};

export default SurveyQuestion;