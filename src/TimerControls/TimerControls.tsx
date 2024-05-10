import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import SvgIcon from '@mui/material/SvgIcon';

import './TimerControls.css'

interface TimerControlsProps {
    handleAddTime: () => void
    handleReset: () => void
    handlePlayOrPause: () => void
    isPaused: boolean
}

const TimerControls = ({ handleAddTime, handleReset, handlePlayOrPause, isPaused }: TimerControlsProps) => {
    const playPauseButtonAriaLabel = isPaused ? 'Start timer' : 'Pause timer';

    return (
        <div className='controlsContainer'>
            <button
                aria-label='Add one minute'
                onClick={handleAddTime}
                className='buttonStyles otherControls'
            >
                +1:00
            </button>
            <button
                className='buttonStyles'
                onClick={handlePlayOrPause}
                aria-label={playPauseButtonAriaLabel}
            >
                {isPaused ? (
                    <SvgIcon color='primary' fontSize='large' component={PlayCircleFilledRoundedIcon} />
                ) : (
                    <SvgIcon color='primary' fontSize='large' component={PauseCircleFilledRoundedIcon} />
                )}
            </button>

            <button onClick={handleReset} className='buttonStyles otherControls'>
                Reset
            </button>
        </div>
    )
}

export default TimerControls;