import { Edit } from '@mui/icons-material';
import { FC } from 'react';
import CardItem from '../../../common/cardItem/CardItem';
import './styles.css';

const matches: { name: string, date: string, end: boolean }[] = [
    {
        name: 'Taladro Fem vs. A1',
        date: '01/01/2023 | 20:00',
        end: false
    },
    {
        name: 'Taladro Fem vs. A2',
        date: '02/02/2023 | 21:00',
        end: true
    },
    {
        name: 'Taladro Fem vs. A3',
        date: '03/03/2023 | 17:00',
        end: true
    }
];

interface UpcomingFootballMatchesProps {
    editMode?: boolean
};

const UpcomingFootballMatches: FC<UpcomingFootballMatchesProps> = (
    props: UpcomingFootballMatchesProps
) => {

    const { editMode } = props;
    
    function getStyle(idx: number, elements: any[]) {
        return idx !== (elements.length-1) 
        ? { marginBottom: 10 } : { marginBottom: 0 }
    };

    function renderEndChip() {
        return (
            <div className='UpcomingFootballMatches__container--chip--inactive'>
                Finalizado
            </div>
        )
    };

    function renderNoEndChip() {
        return (
            <div className='UpcomingFootballMatches__container--chip--active'>
                Por jugarse
            </div>
        )
    };

    return (
        <div className='UpcomingFootballMatches__container--wrapper'>
            { matches.map((match, idx) => 
                <CardItem styles={{ ...getStyle(idx, matches), borderLeft: '6px solid #478610' }}>
                    <div className='UpcomingFootballMatches__container--item'>
                        <h2> { match.name } </h2>
                        <p> { match.date } </p>
                        <div className='UpcomingFootballMatches__container--chip'>
                            <p> { match.end ? renderEndChip() : renderNoEndChip() } </p>
                        </div>
                    </div>
                    { editMode && 
                        <div className='UpcomingFootballMatches__container--editIcon'>
                            <Edit/>
                        </div>
                    }
                </CardItem>
            )}
        </div>
    )
};

export default UpcomingFootballMatches;