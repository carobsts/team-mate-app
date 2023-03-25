import { FC } from 'react'; 
import TitleSection from '../../../common/title-section/TitleSection';
import Tabs from '../../../common/tabs/Tabs';
import ChampionshipList from './subcomponents/ChampionshipsList';
import CreateChampionship from './subcomponents/CreateChampionship';
import './styles.css';
import StillWorking from '../../../common/still-working/StillWorking';

interface ChampionshopUpProps {};

const ChampionshopUp: FC<ChampionshopUpProps> = (
    props: ChampionshopUpProps
) => {

    const data1 = [
        {
            name: 'Listado',
            Component: <ChampionshipList/>
        },
        {
            name: 'Gestión de campeonatos',
            Component: <CreateChampionship/>
        },
        {
            name: 'Histórico',
            Component: <StillWorking/>
        }
    ];

    return (
        <section className='ChampionshipUpComponent__container--wrapper'>
            <TitleSection title='Campeonatos'/>
            <Tabs data={data1}/>
        </section>
    )
};

export default ChampionshopUp;