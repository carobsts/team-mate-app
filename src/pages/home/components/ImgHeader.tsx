import { FC } from 'react';
import praying_field from '../../../assets/10600327_41290.jpg';
import './styles.css';

interface ImgHeaderProps {};

const ImgHeader: FC<ImgHeaderProps> = () => {
    return (
        <div className='Home__container--img'>
            <div>
                <div></div>
                <img src={praying_field} alt='Campo_de_juego'/>
            </div>
        </div>
    )
};

export default ImgHeader;