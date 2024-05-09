interface ProgressBarProps {
    duration: number
    initialTime: number
}

const ProgessBar = ({ duration, initialTime }: ProgressBarProps) => {
    if (!initialTime) return null;
    
    return (
        <progress
            id='progress-bar'
            max={100}
            value={(duration / initialTime) * 100}
        />
    )
}

export default ProgessBar;