import { FC } from 'react';
import { browserTitles } from '../../common/routes/browserTitles';
import useTitle from '../../hooks/useTitle';
import './Home.css';
import Apps from './components/Apps';
import ImgHeader from './components/ImgHeader';
import Championship from './components/Championship';
import UpcomingFootballMatches from './components/UpcomingFootballMatches';
import Utils from './components/Utils';

interface HomeProps {}; 

const Home: FC<HomeProps> = () => {
    useTitle(browserTitles.home.root);
    return (
        <section>
            <ImgHeader/>
            <div className='Home__sections--wrapper'>
                <h1> Tus accesos </h1>
                <Apps/>
            </div>
            <div className='Home__sections--wrapper'>
                <h1> Torneo actual </h1>
                <Championship/>
            </div>
            <div className='Home__sections--wrapper'>
                <h1> Próximos partidos </h1>
                <UpcomingFootballMatches/>
            </div>
            <div className='Home__sections--wrapper'>
                <h1> Responsables de utilería </h1>
                <Utils/>
            </div>
        </section>
    )
};

export default Home;