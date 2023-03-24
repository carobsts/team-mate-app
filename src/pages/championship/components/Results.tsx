import { FC } from 'react'; 
import Championship from '../../home/components/Championship';
import ResultItem from '../subcomponents/ResultItem';
import './styles.css';

interface ResultsProps {};

const Results: FC<ResultsProps> = (
    props: ResultsProps
) => {

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
                <Championship/>
            </div>
            <div>
                <h1> Resultados </h1>
                { data.map((result, idx) => 
                    <ResultItem style={getStyle(idx, data)} item={result}/>    
                )}
            </div>
        </section>
    )
};

export default Results;