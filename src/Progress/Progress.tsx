import { useEffect } from 'react'

import ProgressBar from '../ProgressBar'
import CurrentTime from '../CurrentTime'

interface ProgressProps {
    duration: number
    initialTime: number
    handleReset: () => void
    isPaused: boolean
    minutes: number
    seconds: number
    setMinutes: React.Dispatch<React.SetStateAction<number>>
    setSeconds: React.Dispatch<React.SetStateAction<number>>
    setDuration: React.Dispatch<React.SetStateAction<number>>
}

const Progress = ({
    duration,
    handleReset,
    initialTime,
    isPaused,
    minutes,
    seconds,
    setMinutes,
    setSeconds,
    setDuration,
}: ProgressProps) => {
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (initialTime && !isPaused) {
            interval = setInterval(() => {
                setDuration((prev) => {
                    const newDuration = prev - 1
                    if (newDuration === 0) {
                        clearInterval(interval);
                        handleReset();
                        window.alert('Timer complete!');
                    }

                    return newDuration
                })
              }, 1000);
        }

        return () => clearInterval(interval);
    }, [isPaused])

    return (
        <>
            <ProgressBar initialTime={initialTime} duration={duration} />
            <CurrentTime
                duration={duration}
                minutes={minutes}
                seconds={seconds}
                setMinutes={setMinutes}
                setSeconds={setSeconds}
            />
        </>
    )
}

export default Progress;