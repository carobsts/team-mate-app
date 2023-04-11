import { FC } from 'react'; 
import TitleSection from '../../../common/title-section/TitleSection';
import Tabs from '../../../common/tabs/Tabs';
import ChampionshipList from './subcomponents/ChampionshipsList';
import CreateChampionship from './subcomponents/CreateChampionship';
import './styles.css';
import StillWorking from '../../../common/still-working/StillWorking';
import TrainingUpList from './subcomponents/TrainingUpList';
import TrainingMatchesUpList from './subcomponents/TrainingMatchesUpList';
import CreateTraining from './subcomponents/CreateTraining';

interface TrainingUpProps {};

const TrainingUp: FC<TrainingUpProps> = (
    props: TrainingUpProps
) => {

    const data1 = [
        {
            name: 'Entrenamientos',
            Component: <TrainingUpList/>
        },
        {
            name: 'Amistosos',
            Component: <TrainingMatchesUpList/>
        },
        {
            name: 'Gestión',
            Component: <CreateTraining/>
        }
    ];

    return (
        <section className='TrainingUpComponent__container--wrapper'>
            <TitleSection title='Entrenamientos y amistosos'/>
            <Tabs data={data1}/>
        </section>
    )
};

export default TrainingUp;