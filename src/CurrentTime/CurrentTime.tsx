import { useState } from 'react'

import './CurrentTime.css'

interface CurrentTimeProps {
    duration: number
    minutes: number
    seconds: number
    setMinutes: React.Dispatch<React.SetStateAction<number>>
    setSeconds: React.Dispatch<React.SetStateAction<number>>
}

const CurrentTime = ({
    duration,
    minutes,
    seconds,
    setMinutes,
    setSeconds,
}: CurrentTimeProps) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSeconds(parseInt(e.target.value))
      };

    const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinutes(parseInt(e.target.value))
    };

    const convertToTimeFormat = (seconds: number) => {
        const min = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const sec = `${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`

        return {
            min,
            sec
        }
    };

    const onFocus = () => {
        setIsEditing(true)
    }

    const onBlur = () => {
        setIsEditing(false)
    }
    
    const minutesFormatted = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsFormatted = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return (
        <>
        <div className='inputsContainer'>
            {isEditing ? (
            <input
                className='numberInput'
                type='number'
                min={0}
                onChange={handleMinutesChange}
                maxLength={2}
                value={minutesFormatted}
                onFocus={onFocus}
                onBlur={onBlur}
                />
            ) : (
                <button
                    className='timeDisplayButton'
                    onClick={() => setIsEditing(true)}
                >
                    {duration ? convertToTimeFormat(duration).min : minutesFormatted}
                </button>
            )}
            <span className='colon'>:</span>
            {isEditing ? (
                <input
                className='numberInput'
                type='number'
                min={0}
                maxLength={2}
                onChange={handleSecondsChange}
                value={secondsFormatted}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            ) : (
                <button
                        className='timeDisplayButton'
                        onClick={() => setIsEditing(true)}
                    >
                        {duration ? convertToTimeFormat(duration).sec : secondsFormatted}
                </button>
            )}
        </div>
        </>
    )
}

export default CurrentTime;