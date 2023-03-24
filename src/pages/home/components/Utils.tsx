import { FC } from 'react';
import './styles.css';

interface UtilsProps {
};

const Utils: FC<UtilsProps> = (props: UtilsProps) => {
    return (
        <div className='Utils__container--wrapper'>
            <div>
                <h2>Actualmente</h2>
                <p> Caro B. </p>
            </div>
            <div>
                <h2>Proximamente</h2>
                <p> Sofi G. </p>
            </div>
        </div>
    )
};

export default Utils;