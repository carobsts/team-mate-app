import { FC } from 'react'; 
import TitleSection from '../../../common/title-section/TitleSection';
import Tabs from '../../../common/tabs/Tabs';
import ChampionshipList from './subcomponents/ChampionshipsList';
import CreateChampionship from './subcomponents/CreateChampionship';
import './styles.css';
import StillWorking from '../../../common/still-working/StillWorking';
import DatesList from './subcomponents/DatesList';
import CreateDate from './subcomponents/CreateDate';

interface DatesUpProps {};

const DatesUp: FC<DatesUpProps> = (
    props: DatesUpProps
) => {

    const data1 = [
        {
            name: 'Listado',
            Component: <DatesList/>
        },
        {
            name: 'Gestión de partidos',
            Component: <CreateDate/>
        }
    ];

    return (
        <section className='DatesUpComponent__container--wrapper'>
            <TitleSection title='Partidos'/>
            <Tabs data={data1}/>
        </section>
    )
};

export default DatesUp;