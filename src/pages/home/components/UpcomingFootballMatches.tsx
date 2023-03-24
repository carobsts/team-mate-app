import { FC } from 'react';
import CardItem from '../../../common/cardItem/CardItem';
import './styles.css';

const matches: { name: string, date: string }[] = [
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

interface UpcomingFootballMatchesProps {
};

const UpcomingFootballMatches: FC<UpcomingFootballMatchesProps> = (
    props: UpcomingFootballMatchesProps
) => {
    
    function getStyle(idx: number, elements: any[]) {
        return idx !== (elements.length-1) 
        ? { marginBottom: 10 } : { marginBottom: 0 }
    };

    return (
        <div className='UpcomingFootballMatches__container--wrapper'>
            { matches.map((match, idx) => 
                <CardItem styles={{ ...getStyle(idx, matches), borderLeft: '6px solid #478610' }}>
                    <div className='UpcomingFootballMatches__container--item'>
                        <h2> { match.name } </h2>
                        <p> { match.date } </p>
                    </div>
                </CardItem>
            )}
        </div>
    )
};

export default UpcomingFootballMatches;