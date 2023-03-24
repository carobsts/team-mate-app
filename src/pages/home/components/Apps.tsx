import { FC } from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import './styles.css';

interface AppsProps {};

const Apps: FC<AppsProps> = () => {

    const apps = [
        {
            color: '#377109',
            icon: <SportsSoccerIcon sx={{ fontSize: 50 }} className='Apps__icon'/>
        },
        {
            color: '#478610',
            icon: <EmojiEventsIcon sx={{ fontSize: 50 }} className='Apps__icon'/>
        },
        {
            color: '#447b0c',
            icon: <CheckroomIcon sx={{ fontSize: 50 }} className='Apps__icon'/>
        }
    ];
    return (
        <section className='Apps__container--wrapper'>
            { apps.map(a => 
                <div style={{  backgroundColor: a.color }}>
                    { a.icon }
                </div>
            )}
        </section>
    )
};

export default Apps;