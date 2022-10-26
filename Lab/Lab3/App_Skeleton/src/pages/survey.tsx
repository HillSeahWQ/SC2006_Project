import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import { QuestionT, Answer } from '../application/customTypes';

import Navbar from '../components/Navbar';
import SurveyQuestion from '../components/SurveyQuestion';

import styles from './survey.module.scss';

const Survey: React.FC<{}> = () => {

    const history = useHistory();    

    class Question implements QuestionT {
        question: string;
        isEndpoint: boolean;
        answers: Array<Answer>;

        constructor(question: string, isEndpoint: boolean, answers: Array<Answer>) {
            this.question = question;
            this.isEndpoint = isEndpoint;
            this.answers = answers;
        }
    }

    const question1 = new Question('Are you new to anime?', false, [
        {text: 'Yes', link: 2}, 
        {text: 'No', link: 3}
    ]);

    const question2 = new Question('Which kind of anime are you looking for?', false, [
        {text: 'Adventure', link: 201}, 
        {text: 'SciFi', link: 202}, 
        {text: 'Action', link: 203}, 
        {text: 'Drama', link: 204}
    ]);
    const question201 = new Question('What flavor are you looking for?', true, [
        {text: 'Something like Avatar', link: 5114},
        {text: 'Samurais and hip-hop', link: 205},
        {text: 'Guns and psychos', link: 889}
    ]);
    const question202 = new Question('What flavor are you looking for?', true, [
        {text: 'Classic space western', link: 1},
        {text: 'Psychological cyberpunk', link: 13601},
        {text: 'Mind games and mechas', link: 1575}
    ]);
    const question203 = new Question('What flavor are you looking for?', true, [
        {text: 'Modern superheroes', link: 21459},
        {text: 'Humanity\'s last stand', link: 16498},
        {text: 'Beautiful animation', link: 101922}
    ]);
    const question204 = new Question('What flavor are you looking for?', true, [
        {text: 'Highschool is hard', link: 20954},
        {text: 'Adult life is hard', link: 101571},
        {text: 'Dying is hard', link: 20931}
    ]);

    const question3 = new Question('Which genre are you looking for?', false, [
        {text: 'Adventure/fantasy', link: 301},
        {text: 'SciFi', link: 302},
        {text: 'Drama', link: 303},
        {text: 'Psychological', link: 304}
    ]);

    const question301 = new Question('What kind of adventure?', false, [
        {text: 'An epic adventure', link: 30101},
        {text: 'Something fast paced', link: 30102}
    ]);
    const question30101 = new Question('What flavor of epic?', true, [
        {text: 'Viking epic', link: 101348},
        {text: 'Sword epic', link: 6594},
        {text: 'Isekai epic', link: 108465},
        {text: 'Battle royale', link: 10087}
    ]);
    const question30102 = new Question('Which flavor?', true, [
        {text: 'Mind games and fan service', link: 19815},
        {text: 'Edgy alternate WWII with magic', link: 21613},
        {text: 'Non stop insanity', link: 98460}
    ]);

    const question302 = new Question('How deep you want to get man?', false, [
        {text: 'I want something fun', link: 30201},
        {text: 'Make me think', link: 30202},
        {text: 'I just wanna get hype man', link: 30203}
    ]);
    const question30201 = new Question('What kind of fun?', true, [
        {text: 'Goofy fun', link: 20057},
        {text: 'Dumb deep fun', link: 227},
        {text: 'Bill Nye fun', link: 105333}
    ]);
    const question30202 = new Question('What do you like thinking about?', true, [
        {text: 'Transhumanism', link: 43},
        {text: 'Time travel', link: 9253},
        {text: 'Solipsism and depression', link: 30},
        {text: 'Uhhhh', link: 790}
    ]);
    const question30203 = new Question('What kind of hype?', true, [
        {text: 'Terminators fighting terminators', link: 128546},
        {text: 'Edgy hype', link: 20623},
        {text: 'Good animation hype', link: 6675},
        {text: 'Max hype', link: 2001}
    ]);

    const question303 = new Question('What kind of drama?', false, [
        {text: 'Something light', link: 30301},
        {text: 'Something a bit heavy', link: 30302}
    ]);

    const question30301 = new Question('What do you find beautiful in life?', false, [
        {text: 'Youth', link: 3030101},
        {text: 'Helping others', link: 3030102},
        {text: 'Accidental fatherhood', link: 3030103}
    ]);
    const question3030101 = new Question('What\'s your vibe?', true, [
        {text: 'Small seaside town', link: 16067},
        {text: '70\'s jazz scene', link: 12531},
        {text: 'Fantasy world', link: 5420}
    ]);
    const question3030102 = new Question('How much romance?', true, [
        {text: 'Light romance', link: 101291},
        {text: 'No romance', link: 457},
        {text: 'Major harem overtones but wholesome', link: 5081}
    ]);
    const question3030103 = new Question('How accidental?', true, [
        {text: 'More like voluntary', link: 10162},
        {text: 'Someone please take this kid', link: 100077}
    ]);

    const question30302 = new Question('Which kind of drama?', false, [
        {text: 'Tightly scripted mystery', link: 3030201},
        {text: 'Life being hard', link: 3030202}
    ]);

    const question3030201 = new Question('What kind of mystery?', true, [
        {text: 'Tarantino style', link: 128547},
        {text: 'Gang wars', link: 6746},
        {text: 'What\'s the nature of a killer?', link: 19},
        {text: 'Zootopia but written honestly', link: 107660}
    ]);
    const question3030202 = new Question('What part of life is hard?', true, [
        {text: 'Work is hard', link: 101571},
        {text: 'Aristocracy is hard', link: 239},
        {text: 'Prison is hard', link: 6114},
        {text: 'Going outside is hard', link: 1210}
    ]);

    const question304 = new Question('What are you looking for?', false, [
        {text: 'I want to think', link: 30401},
        {text: 'I want stress', link: 30402},
        {text: 'I want genre deconstruction', link: 30403},
        {text: 'I want a more traditional story', link: 30404}
    ]);

    const question30401 = new Question('What do you want to think about?', true, [
        {text: 'The internet', link: 339},
        {text: 'Sociology', link: 486},
        {text: 'Nature', link: 457},
        {text: 'The human subconscious', link: 13125}
    ]);

    const question30402 = new Question('Is the stress external or internal?', false, [
        {text: 'External', link: 3040201},
        {text: 'Internal', link: 3040202}
    ]);

    const question3040201 = new Question('What kind of stress gets to you?', true, [
        {text: 'Time running out', link: 20661},
        {text: 'Gambling', link: 3002},
        {text: 'Being prey', link: 101759}
    ]);
    const question3040202 = new Question('Who\'s out to get you man?', true, [
        {text: 'Some organization\'s out to get me', link: 1210},
        {text: 'My friend\'s are out to get me', link: 934},
        {text: 'I\'m out to get me', link: 437},
        {text: 'I\'m out to get someone and I don\'t like it', link: 570}
    ])

    const question30403 = new Question('Which genre are you after?', true, [
        {text: 'Mecha', link: 30},
        {text: 'Magical Girl', link: 9756},
        {text: 'Harem/Fanservice', link: 5081}
    ]);
    const question30404 = new Question('What kind of story?', true, [
        {text: 'Dark fantasy adventure', link: 97986},
        {text: 'Action in a mysterious setting', link: 98707},
        {text: 'Slowburning mystery', link: 19}
    ])

    const surveyQuestions = new Map<number, Question>([
        [1, question1], //new or not

        [2, question2], //which genre (new to anime)

        [201, question201], //adventure
        [202, question202], //scifi
        [203, question203], //action
        [204, question204], //drama

        [3, question3], //which genre (not new to anime)

        [301, question301], //adventure/fantasy

        [30101, question30101], //epics
        [30102, question30102], //fast paced

        [302, question302], //scifi

        [30201, question30201], //deep
        [30202, question30202], //fun
        [30203, question30203], //hype
        
        [303, question303], //drama

        [30301, question30301], //light drama

        [3030101, question3030101], //youth
        [3030102, question3030102], //helping others
        [3030103, question3030103], //fatherhood

        [30302, question30302], //heavy drama

        [3030201, question3030201], //mystery
        [3030202, question3030202], //life

        [304, question304], //psychology

        [30401, question30401], //for thinking

        [30402, question30402], //thrillers
        [3040201, question3040201], //external threat
        [3040202, question3040202], //internal threat

        [30403, question30403], //deconstructions
        [30404, question30404] //traditional stories
    ]);

    const [ currentQuestion, setCurrentQuestion ] = useState<QuestionT>(question1);

    const questionHandlers = {
        handleLink: (link: number): void => {
            if (currentQuestion.isEndpoint) {
                history.push(`/entry/${link}`);
            } else {
                setCurrentQuestion(surveyQuestions.get(link)!);
            }
        }
    };

    return (
        <main className={styles.survey}>

            <Helmet>
                <html lang="en" />
                <meta name="description" content="Try our brief multi-question survey to find your next anime, whether you\'re new or looking for hidden gems." />
                <title>Anireka | Recommendation Survey</title>
            </Helmet>

            <Navbar />

            <SurveyQuestion 
                currentQuestion={currentQuestion}
                handleLink={questionHandlers.handleLink}
            />
            
        </main>
    )
};

export default Survey;