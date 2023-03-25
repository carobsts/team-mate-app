import { FC } from 'react';
import './TitleSection.css'; 

interface TitleSectionProps {
    title: string
};

const TitleSection: FC<TitleSectionProps> = ({ title }) => {
    return (
        <div className='TitleSectionComponent__container--wrapper'>
            <h1> { title } </h1>
        </div>
    )
};

export default TitleSection;