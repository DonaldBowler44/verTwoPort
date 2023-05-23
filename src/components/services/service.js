import { useState } from 'react';
import './service.css';
import "./service.css";
// import ServCircle from './servCircle';

function Service() {
    const [currentClass, setCurrentClass] = useState('');

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    function rollDice() {
        const randNum = getRandomInt(1, 7);
        const showClass = 'show-' + randNum;

        if (currentClass) {
            setCurrentClass('');
        }

        setCurrentClass(showClass);
    }

    return (
        <div className="servContainer">
        <div className="servBox">
        <h1 className='hservice'>Services Provided</h1>
        <div className="scene">
            <div className={`cube ${currentClass}`}>
                <div className="cube__face cube__face--1">React + Redux</div>
                <div className="cube__face cube__face--2">Flask + Python</div>
                <div className="cube__face cube__face--3">Android + Java</div>
                <div className="cube__face cube__face--4">NodeJS + SQL</div>
                <div className="cube__face cube__face--5">C + Bash</div>
                <div className="cube__face cube__face--6">Github</div>
            </div>

            <button className="rollBtn" onClick={rollDice}>
                Press to Roll
            </button>
        </div>
        </div>
    </div>
    );
}

export default Service;