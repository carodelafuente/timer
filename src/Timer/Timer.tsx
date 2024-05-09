import { useState } from 'react'

import Header from '../Header';
import Progress from '../Progress';
import TimerControls from '../TimerControls';

import './Timer.css';

const Timer = () => {
    const [initialTime, setInitialTime] = useState<number>(0) // in seconds
    const [duration, setDuration] = useState<number>(0); // in seconds
    const [isPaused, setPaused] = useState<boolean>(true);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    const handlePlayOrPause = () => {
        setPaused(prev => !prev);

        if (isPaused && initialTime === 0) {
            const initialValueCalculated = (minutes ? minutes * 60 : 0) + (seconds ? seconds : 0)
            setInitialTime(initialValueCalculated);
            setDuration(initialValueCalculated)
        }
    }

    return (
        <div className='timerContainer'>
            <Header />
            <Progress
                duration={duration}
                initialTime={initialTime}
                isPaused={isPaused}
                setDuration={setDuration}
                minutes={minutes}
                seconds={seconds}
                setMinutes={setMinutes}
                setSeconds={setSeconds}
            />
            <TimerControls
                handlePlayOrPause={handlePlayOrPause}
                isPaused={isPaused}
                setPaused={setPaused}
            />
        </div>
    )
}

export default Timer;