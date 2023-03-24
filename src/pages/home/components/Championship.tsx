import { FC } from 'react';
import CardItem from '../../../common/cardItem/CardItem';
import './styles.css';

interface ChampionshipProps {
};

const Championship: FC<ChampionshipProps> = (props: ChampionshipProps) => {
    return (
        <div className='Championship__container--wrapper'>
            <CardItem>
                <div className='Championship__container--item'>
                    <div>
                        <p> Torneo Imperial </p>
                        <p> Au Córdoba - Juárez Celman, Córdoba </p>
                    </div>
                    <div>
                        <div>
                            <img 
                            src="https://i.ibb.co/rtF9T8k/327313527-589641299678690-1529717078110057676-n.jpg" 
                            alt='Logo'/>
                        </div>
                    </div>
                </div>
            </CardItem>
        </div>
    )
};

export default Championship;