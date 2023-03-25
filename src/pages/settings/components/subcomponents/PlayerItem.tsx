import { Email } from '@mui/icons-material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { FC } from 'react'; 
import CardItem from '../../../../common/cardItem/CardItem';
import './styles.css';

interface PlayerItemProps {
    style: any;
    item: any
}; 

const PlayerItem: FC<PlayerItemProps> = (
    props: PlayerItemProps
) => {

    const {
        style,
        item
    } = props;

    return (
        <CardItem styles={{
            ...style,
            borderRight: `6px solid #478610`
        }}>
            <div className='PlayerItemComponent__container--wrapper'>
                <p> { item.name } </p>
                <p> <PhoneAndroidIcon sx={{ fontSize: 14, marginRight: 0.5 }}/> { item.phone } </p>
                <p> <Email sx={{ fontSize: 14, marginRight: 0.5 }}/> { item.email } </p>
            </div>
        </CardItem>
    )
};

export default PlayerItem;