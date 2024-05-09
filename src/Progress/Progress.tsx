import { useEffect } from 'react'

import ProgessBar from '../ProgessBar'
import CurrentTime from '../CurrentTime'

interface ProgressProps {
    duration: number
    initialTime: number
    setDuration: React.Dispatch<React.SetStateAction<number>>
    setInitialTime: React.Dispatch<React.SetStateAction<number>>
}

const Progress = ({ duration, initialTime, setDuration, setInitialTime }: ProgressProps) => {
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (initialTime) {
            interval = setInterval(() => {
                setDuration((prev) => {
                    const newDuration = prev - 1
                    if (newDuration === 0) {
                        clearInterval(interval)
                    }

                    return newDuration
                })
              }, 1000);
        }

        return () => clearInterval(interval);
    }, [initialTime])

    return (
        <>
            <ProgessBar initialTime={initialTime} duration={duration} />
            <CurrentTime setInitialTime={setInitialTime} />
        </>
    )
}

export default Progress;