import { FC } from 'react'; 
import './StillWorking.css';
import BuildIcon from '@mui/icons-material/Build';

interface StillWorkingProps {}; 

const StillWorking: FC<StillWorkingProps> = () => {
    return (
        <section className='StillWorking__container--wrapper'>
            <div>
                <BuildIcon sx={{ fontSize: 50, color: '#478610' }} />
                <p> Sección en construcción </p>
            </div>
        </section>
    )
};

export default StillWorking;