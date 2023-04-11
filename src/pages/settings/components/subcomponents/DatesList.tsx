import { Edit } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FC, useState } from 'react'; 
import { getStyle } from '../../../../utils/getStyleForMargin';
import Championship from '../../../home/components/Championship';
import FootballMatches from '../../../home/components/UpcomingFootballMatches';
import './styles.css';

interface DatesListProps {};

const DatesList: FC<DatesListProps> = (
    props: DatesListProps
) => {

    return (
        <section className='ChampionshipListComponent__container--wrapper'>
            <FootballMatches editMode={true}/>
        </section>
    )
};

export default DatesList;