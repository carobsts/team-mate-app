import { FC } from 'react'; 
import PlayerItem from './subcomponents/PlayerItem';
import './styles.css';
import TitleSection from '../../../common/title-section/TitleSection';
import { getStyle } from '../../../utils/getStyleForMargin';
import Tabs from '../../../common/tabs/Tabs';
import CreatePlayer from './subcomponents/CreatePlayer';

interface PlayersProps {};

const Players: FC<PlayersProps> = (
    props: PlayersProps
) => {

    const data = [
        {
            name: 'Carolina Bustos',
            phone: '3564622916',
            email: 'bsts.carolina@gmail.com'
        },
        {
            name: 'Sofía Gentile',
            phone: '3564622916',
            email: 'bsts.carolina@gmail.com'
        },
        {
            name: 'Valentina Marti',
            phone: '3564622916',
            email: 'bsts.carolina@gmail.com'
        },
        {
            name: 'María Sol Malisani',
            phone: '3564622916',
            email: 'bsts.carolina@gmail.com'
        },
        {
            name: 'Guadalupe Vocos',
            phone: '3564622916',
            email: 'bsts.carolina@gmail.com'
        },
        {
            name: 'Carolina Bustos',
            phone: '3564622916',
            email: 'bsts.carolina@gmail.com'
        },
        {
            name: 'Sofía Gentile',
            phone: '3564622916',
            email: 'bsts.carolina@gmail.com'
        },
        {
            name: 'Valentina Marti',
            phone: '3564622916',
            email: 'bsts.carolina@gmail.com'
        },
        {
            name: 'María Sol Malisani',
            phone: '3564622916',
            email: 'bsts.carolina@gmail.com'
        },
        {
            name: 'Guadalupe Vocos',
            phone: '3564622916',
            email: 'bsts.carolina@gmail.com'
        }
    ];

    function cp() {
        return (
            <>
                <p> Se registran <b>{data.length}</b> jugadores/as. </p>
                <div className='PlayersComponent__container--itemsContainer'>
                    { data.map((player, idx) => 
                        <PlayerItem 
                        item={player}
                        style={getStyle(idx, data)} />
                    )}
                </div>
            </>
        )
    }; 

    const data1 = [
        {
            name: 'Listado',
            Component: cp()
        },
        {
            name: 'Gestión de jugadores/as',
            Component: <CreatePlayer/>
        },
        // {
        //     name: 'Histórico',
        //     Component: <StillWorking/>
        // }
    ];

    return (
        <section className='PlayersComponent__container--wrapper'>
            <TitleSection title='Jugadores/as'/>
            <Tabs data={data1}/>
        </section>
    )
};

export default Players;