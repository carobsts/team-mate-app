import { FC } from 'react';
import CardItem from '../../../common/cardItem/CardItem';
import './styles.css';

interface UpcomingFootballMatchesProps {
};

const UpcomingFootballMatches: FC<UpcomingFootballMatchesProps> = (props: UpcomingFootballMatchesProps) => {
    const e = [
        {
            name: 'Taladro Fem vs. A1',
            date: '01/01/2023'
        },
        {
            name: 'Taladro Fem vs. A2',
            date: '02/02/2023'
        },
        {
            name: 'Taladro Fem vs. A3',
            date: '03/03/2023'
        }
    ];

    function getStyle(idx: number, elements: any[]) {
        return idx !== (elements.length-1) 
        ? { marginBottom: 10 } : { marginBottom: 0 }
    };

    return (
        <div className='UpcomingFootballMatches__container--wrapper'>
            { e.map((el, idx) => 
                <CardItem styles={{ ...getStyle(idx, e), borderLeft: '6px solid #478610' }}>
                    <div className='UpcomingFootballMatches__container--item'>
                        <h2> { el.name } </h2>
                        <p> { el.date } </p>
                    </div>
                </CardItem>
            )}
        </div>
    )
};

export default UpcomingFootballMatches;