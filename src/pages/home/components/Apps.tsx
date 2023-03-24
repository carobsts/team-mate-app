import { FC } from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SettingsIcon from '@mui/icons-material/Settings';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../common/routes/paths';

const FONT_SIZE: number = 50;

const apps: { color: string, icon: any, path: string }[] = [
    {
        color: '#377109',
        icon: <SportsSoccerIcon sx={{ fontSize: FONT_SIZE }} className='Apps__icon'/>,
        path: paths.training.root
    },
    {
        color: '#478610',
        icon: <EmojiEventsIcon sx={{ fontSize: FONT_SIZE }} className='Apps__icon'/>,
        path: ''
    },
    {
        color: '#447b0c',
        icon: <SettingsIcon sx={{ fontSize: FONT_SIZE }} className='Apps__icon'/>,
        path: ''
    }
];

interface AppsProps {};

const Apps: FC<AppsProps> = () => {

    const history = useNavigate(); 

    return (
        <section className='Apps__container--wrapper'>
            { apps.map(a => 
                <div 
                onClick={() => history(a.path) }
                key={a.color} style={{  backgroundColor: a.color }}>
                    { a.icon }
                </div>
            )}
        </section>
    )
};

export default Apps;