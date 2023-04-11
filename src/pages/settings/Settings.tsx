import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FC } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { paths } from '../../common/routes/paths';
import './Settings.css';

interface SettingsProps {}; 

const Settings: FC<SettingsProps> = () => {

    const data: { title: string, path: string, color: string }[] = [
        {
            title: 'Alta de jugadores/as',
            path: paths.settings.football_player_creation,
            color: '#377109'
        },
        {
            title: 'Alta de entrenamientos/amistosos',
            path: paths.settings.training_creation,
            color: '#478610'
        },
        {
            title: 'Alta de campeonatos',
            path: paths.settings.championship_creation,
            color: '#447b0c'
        },
        {
            title: 'Alta de partidos',
            path: paths.settings.dates_creation,
            color: '#377109'
        },
        {
            title: 'Alta de responsables de utilería',
            path: paths.settings.utils_creation,
            color: '#478610'
        }  
    ];

    const navigate = useNavigate(); 

    return (
        <section className='Settings__container--wrapper'>
            <h1> Configuraciones </h1>
            <div>
                { data.map(button => 
                    <div 
                    onClick={() => navigate(button.path) }
                    style={{ backgroundColor: button.color }}
                    key={button.title}>
                        <p> { button.title } </p>
                        <ArrowForwardIosIcon/>
                    </div>
                )}
            </div>
        </section>
    )
};

export default Settings;