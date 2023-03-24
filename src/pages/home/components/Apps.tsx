import { FC } from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import './styles.css';

const FONT_SIZE: number = 50;

const apps: { color: string, icon: any }[] = [
    {
        color: '#377109',
        icon: <SportsSoccerIcon sx={{ fontSize: FONT_SIZE }} className='Apps__icon'/>
    },
    {
        color: '#478610',
        icon: <EmojiEventsIcon sx={{ fontSize: FONT_SIZE }} className='Apps__icon'/>
    },
    {
        color: '#447b0c',
        icon: <CheckroomIcon sx={{ fontSize: FONT_SIZE }} className='Apps__icon'/>
    }
];

interface AppsProps {};

const Apps: FC<AppsProps> = () => {
    return (
        <section className='Apps__container--wrapper'>
            { apps.map(a => 
                <div key={a.color} style={{  backgroundColor: a.color }}>
                    { a.icon }
                </div>
            )}
        </section>
    )
};

export default Apps;