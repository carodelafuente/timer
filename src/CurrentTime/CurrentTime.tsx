import { useState } from 'react'

interface CurrentTimeProps {
    setInitialTime: React.Dispatch<React.SetStateAction<number>>
}

const CurrentTime = ({ setInitialTime }: CurrentTimeProps) => {
    const [inputValue, setInputValue] = useState(0);

    const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInitialTime((prev) => prev + parseInt(e.target.value));
      };

    const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const minutesInSeconds = parseInt(e.target.value) * 60;
        setInitialTime((prev) => prev + minutesInSeconds);
    };

    const convertToTimeFormat = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };

    return (
        <>
        <label htmlFor='progress-bar'>{convertToTimeFormat(inputValue)} (mm:ss)</label> 
        <input type='number' min={0} onChange={handleMinutesChange} />
        <input type='number' min={0} onChange={handleSecondsChange} />
        </>
    )
}

export default CurrentTime;