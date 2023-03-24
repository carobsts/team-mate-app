import { FC } from 'react';
import './Championship.css';
import Tabs from '../../common/tabs/Tabs';
import Dates from './components/Dates';
import Results from './components/Results';
import StillWorking from '../../common/still-working/StillWorking';

const data1 = [
    {
        title: 'Taladro Fem vs. V2',
        attended: false,
        date: '20/01/2023 - 19:00'
    },
    {
        title: 'Taladro Fem vs. V3',
        attended: true,
        date: '29/01/2023 - 20:30'
    },
    {
        title: 'Taladro Fem vs. V4',
        attended: true,
        date: '10/01/2023 - 20:00'
    }
];

interface ChampionshipProps {}; 

const ChampionshipPage: FC<ChampionshipProps> = (
    props: ChampionshipProps
) => {

    const data = [
        {
            name: 'Fechas',
            Component: <Dates history={data1}/>
        },
        {
            name: 'Resultados',
            Component: <Results/>
        },
        {
            name: 'Histórico',
            Component: <StillWorking/>
        }
    ];

    return (
        <section className='Championship__container--wrapper'>
            <h1> Campeonato </h1>
            <Tabs data={data}/>
        </section>
    )
};

export default ChampionshipPage;