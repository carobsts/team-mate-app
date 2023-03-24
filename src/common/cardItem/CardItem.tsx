import { FC } from 'react';
import './CardItem.css';

interface CardItemProps {
    children: any;
    styles?: any;
};

const CardItem: FC<CardItemProps> = (props: CardItemProps) => {
    const { children, styles } = props;
    return (
        <div style={styles} className='CardItem__container--wrapper'>
            { children }
        </div>
    )
};

export default CardItem;