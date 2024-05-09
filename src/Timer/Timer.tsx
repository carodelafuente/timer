import { useState, useEffect } from 'react'

import Header from '../Header';
import Progress from '../Progress';
import TimerControls from '../TimerControls';

const Timer = () => {
    const [initialTime, setInitialTime] = useState(0) // in seconds
    const [duration, setDuration] = useState(0); // in seconds
    const [isPaused, setPaused] = useState(true);

    useEffect(() => {
        if (initialTime) {
            setDuration(initialTime)
        }
    }, [initialTime])

    return (
        <>
            <Header />
            <Progress
                duration={duration}
                initialTime={initialTime}
                setDuration={setDuration}
                setInitialTime={setInitialTime}
            />
            <TimerControls
                isPaused={isPaused}
                setPaused={setPaused}
            />
        </>
    )
}

export default Timer;