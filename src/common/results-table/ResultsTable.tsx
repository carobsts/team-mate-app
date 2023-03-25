import { FC } from 'react'; 
import './ResultsTable.css';

interface ResultsTableProps {
    style: any;
};

const ResultsTable: FC<ResultsTableProps> = (
    props: ResultsTableProps
) => {

    const { style } = props;

    return (
        <section style={style} className='ResultsTableComponent__container--wrapper'>
            <div>
                <b> PT </b>
                <p> 10 </p>
            </div>
            <div>
                <b> PJ </b>
                <p> 10 </p>
            </div>
            <div>
                <b> PG </b>
                <p> 7 </p>
            </div>
            <div>
                <b> PE </b>
                <p> 1 </p>
            </div>
            <div>
                <b> PP </b>
                <p> 2 </p>
            </div>
        </section>
    )
};

export default ResultsTable;