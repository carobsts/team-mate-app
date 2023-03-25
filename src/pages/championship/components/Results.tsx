import { Button } from '@mui/material';
import { FC, useState } from 'react'; 
import ResultsTable from '../../../common/results-table/ResultsTable';
import Championship from '../../home/components/Championship';
import FootballMatches from '../../home/components/UpcomingFootballMatches';
import ResultItem from '../subcomponents/ResultItem';
import './styles.css';

interface ResultsProps {};

const Results: FC<ResultsProps> = (
    props: ResultsProps
) => {

    const [ show, setShow ] = useState<boolean>(); 

    function getStyle(idx: number, elements: any[]) {
        return idx !== (elements.length-1) 
        ? { marginBottom: 10 } : { marginBottom: 0 }
    };

    const data = [
        {
            result: '0 - 0',
            contra: 'V1',
            date: 'Martes 23/03 - 20:00'
        },
        {
            result: '0 - 1',
            contra: 'V2',
            date: 'Martes 27/03 - 21:00'
        },
        {
            result: '0 - 0',
            contra: 'V3',
            date: 'Martes 30/02 - 17:00'
        }
    ];

    return (
        <section className='ResultsComponent__container--wrapper'>
            <div>
                <h1> Torneo actual </h1>
                <Championship>
                    <p className='ResultsComponent__container--date'>
                        01/03/2022 - 30/03/2022
                    </p>
                </Championship>
            </div>
            { show &&
                <div className='ResultsComponent__container--footballMatches'>
                    <h3> Partidos del campeonato </h3>
                    <FootballMatches/>
                </div>
            }
            <div className='ResultsComponent__container--button'>
                <Button
                onClick={() => setShow(!show)}
                className='ResultsComponent__button--decline'
                variant="outlined"> 
                    { show ? 'Ocultar partidos' : '+ Ver partidos' } 
                </Button>
            </div>
            <div className='ResultsComponent__container--resultsTable'>
                <h1> Resultados </h1>
                <ResultsTable style={{ marginBottom: 20 }}/>
                { data.map((result, idx) => 
                    <ResultItem style={getStyle(idx, data)} item={result}/>    
                )}
            </div>
        </section>
    )
};

export default Results;