import CircularProgress from '@mui/material/CircularProgress';

import './ProgressBar.css'

interface ProgressBarProps {
    duration: number
    initialTime: number
}

const ProgressBar = ({ duration, initialTime }: ProgressBarProps) => {
    return (
        <div className='progressBar'>
            <CircularProgress
                variant='determinate'
                value={(duration / initialTime) * 100}
            />
        </div>
    )
}

export default ProgressBar;