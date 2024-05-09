import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import SvgIcon from '@mui/material/SvgIcon';

interface TimerControlsProps {
    isPaused: boolean
    setPaused: React.Dispatch<React.SetStateAction<boolean>>
}

const TimerControls = ({ isPaused, setPaused }: TimerControlsProps) => {
    const handlePlayOrPause = () => {
        setPaused(prev => !prev)
    }

    return (
        <>
        <button onClick={handlePlayOrPause}>
            {isPaused ? (
                <SvgIcon component={PlayCircleFilledRoundedIcon} />
            ) : (
                <SvgIcon component={PauseCircleFilledRoundedIcon} />
            )}
        </button>
        </>
    )
}

export default TimerControls;