import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import SvgIcon from '@mui/material/SvgIcon';

import './TimerControls.css'

interface TimerControlsProps {
    handlePlayOrPause: () => void
    isPaused: boolean
    setPaused: React.Dispatch<React.SetStateAction<boolean>>
}

const TimerControls = ({ handlePlayOrPause, isPaused, setPaused }: TimerControlsProps) => {
    return (
        <div className='controlsContainer'>
            <button className='buttonStyles otherControls'>
                +1:00
            </button>
            <button className='buttonStyles' onClick={handlePlayOrPause}>
                {isPaused ? (
                    <SvgIcon color='primary' fontSize='large' component={PlayCircleFilledRoundedIcon} />
                ) : (
                    <SvgIcon color='primary' fontSize='large' component={PauseCircleFilledRoundedIcon} />
                )}
            </button>

            <button className='buttonStyles otherControls'>
                Reset
            </button>
        </div>
    )
}

export default TimerControls;