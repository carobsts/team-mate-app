import { Button } from '@mui/material';
import { FC, useState } from 'react'; 
import { getStyle } from '../../../../utils/getStyleForMargin';
import Championship from '../../../home/components/Championship';
import FootballMatches from '../../../home/components/UpcomingFootballMatches';
import './styles.css';

interface ChampionshipListProps {};

const ChampionshipList: FC<ChampionshipListProps> = (
    props: ChampionshipListProps
) => {

    const [ show, setShow ] = useState<boolean>(false); 

    const dates = [
        {
            date: '01/03/2022 - 30/03/2022'
        },
        {
            date: '01/03/2022 - 30/03/2022'
        }
    ];

    return (
        <section className='ChampionshipListComponent__container--wrapper'>
            <h1> Campeonato actual </h1>
            <Championship>
                <p className='ChampionshipListComponent__container--date'>
                    01/03/2022 - 30/03/2022
                </p>
            </Championship>
            { show &&
                <div className='ChampionshipListComponent__container--footballMatches'>
                    <h3> Partidos del campeonato </h3>
                    <FootballMatches/>
                </div>
            }
            <div className='ChampionshipListComponent__container--button'>
                <Button
                onClick={() => setShow(!show)}
                className='ChampionshipListComponent__button--decline'
                variant="outlined"> 
                    { show ? 'Ocultar partidos' : '+ Ver partidos' } 
                </Button>
            </div>
            <h1> Campeonatos anteriores </h1>
            { dates.map((championship, idx) => 
                <div 
                style={{ ...getStyle(idx, dates)}}
                key={championship.date}>
                    <Championship>
                        <p className='ChampionshipListComponent__container--date'>
                            { championship.date }
                        </p>
                    </Championship>
                </div>
            )}
        </section>
    )
};

export default ChampionshipList;