import { FC } from 'react';
import { browserTitles } from '../../common/routes/browserTitles';
import useTitle from '../../hooks/useTitle';
import './Home.css';
import Apps from './components/Apps';
import ImgHeader from './components/ImgHeader';
import Championship from './components/Championship';
import UpcomingFootballMatches from './components/UpcomingFootballMatches';
import Utils from './components/Utils';
import { sectionsTitles } from '../../utils/sectionsTitles.home.enum';

const sections: { sectionTitle: string, Component: any }[] = [
    {
        sectionTitle: sectionsTitles.YOUR_ACCESSES,
        Component: <Apps/>
    },
    {
        sectionTitle: sectionsTitles.CURRENT_CHAMPIONSHIP,
        Component: <Championship/>
    },
    {
        sectionTitle: sectionsTitles.NEXT_MATCHES,
        Component: <UpcomingFootballMatches/> 
    },
    {
        sectionTitle: sectionsTitles.UTILS,
        Component: <Utils/>
    }
];

interface HomeProps {}; 

const Home: FC<HomeProps> = () => {
    useTitle(browserTitles.home.root);
    return (
        <section>
            <ImgHeader/>
            { sections.map(section => 
                <div key={section.sectionTitle} className='Home__sections--wrapper'>
                    <h1> { section.sectionTitle } </h1>
                    { section.Component }
                </div>
            )}
        </section>
    )
};

export default Home;