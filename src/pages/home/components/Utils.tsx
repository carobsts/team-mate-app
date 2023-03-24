import { FC } from 'react';
import './styles.css';

const CURRENTLY: string = 'Actualmente';
const SOON: string = 'Próximamente';

const utilsData: { title: string, user: string }[] = [
    {
        title: CURRENTLY,
        user: 'Caro B.'
    },
    {
        title: SOON,
        user: 'Sofi G.'
    }
];

interface UtilsProps {
};

const Utils: FC<UtilsProps> = (props: UtilsProps) => {
    return (
        <div className='Utils__container--wrapper'>
            { utilsData.map(el =>
                <div>
                    <h2> { el.title } </h2>
                    <p> { el.user } </p>
                </div>
            )}
        </div>
    )
};

export default Utils;