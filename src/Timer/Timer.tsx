import { useState } from 'react'

import Header from '../Header';
import Progress from '../Progress';
import TimerControls from '../TimerControls';

import './Timer.css';

const Timer = () => {
    const [initialTime, setInitialTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0); 
    const [isPaused, setPaused] = useState<boolean>(true);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    const handlePlayOrPause = () => {
        if (!seconds && !minutes) return;

        setPaused(prev => !prev);

        if (isPaused && initialTime === 0) {
            const initialValueCalculated = (minutes ? minutes * 60 : 0) + (seconds ? seconds : 0)
            setInitialTime(initialValueCalculated);
            setDuration(initialValueCalculated)
        }
    }

    const handleAddTime = () => {
        setMinutes((prev) => prev + 1);
        setDuration(prev => prev + 60);
        setInitialTime(prev => prev + 60);
    }

    const handleReset = () => {
        setInitialTime(0);
        setDuration(0);
        setMinutes(0);
        setSeconds(0);
        setPaused(true);
    }

    return (
        <div className='timerContainer'>
            <Header />
            <Progress
                duration={duration}
                handleReset={handleReset}
                initialTime={initialTime}
                isPaused={isPaused}
                setDuration={setDuration}
                minutes={minutes}
                seconds={seconds}
                setMinutes={setMinutes}
                setSeconds={setSeconds}
            />
            <TimerControls
                handleAddTime={handleAddTime}
                handleReset={handleReset}
                handlePlayOrPause={handlePlayOrPause}
                isPaused={isPaused}
            />
        </div>
    )
}

export default Timer;