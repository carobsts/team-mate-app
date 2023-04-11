import { FC } from 'react';
import { getStyle } from '../../../../utils/getStyleForMargin';
import { StatusColor } from '../../../../utils/statusColor.enum';
import './styles.css';
import Item from './TrainingUpItem';

const TrainingUpList: FC<any> = () => {

    const data1 = [
        {
            editMode: true,
            title: 'Entrenamiento con Gula',
            statusColor: StatusColor.TO_BE_DONE,
            date: '12/03/2022 | 20:30'
        },
        {
            title: 'Entrenamiento con Martín',
            statusColor: StatusColor.TO_BE_DONE,
            date: '12/03/2022 | 20:30',
            editMode: true
        }
    ];

    const data2 = [
        {
            editMode: true,
            title: 'Entrenamiento con Gula',
            statusColor: StatusColor.DONE,
            date: '12/03/2022 | 20:30'
        },
        {
            title: 'Entrenamiento con Martín',
            statusColor: StatusColor.SUSPENDED,
            date: '12/03/2022 | 20:30',
            editMode: true
        },
        {
            title: 'Entrenamiento con Martín',
            statusColor: StatusColor.DONE,
            date: '12/03/2022 | 20:30',
            editMode: true
        }
    ];

    return (
        <section className='TrainingUpList__container--wrapper'>
            <div className='TrainingUpList__trainingToBeDone--container'>
                <h1> Entrenamiento/s </h1>
                { data1.map((item, idx) => 
                    <Item
                    styles={getStyle(idx, data1)}
                    key={idx}
                    editMode={item.editMode}
                    item={item}
                    />
                )}
            </div>
            <div className='TrainingUpList__trainingDoned--container'>
                <h1> Entrenamientos anteriores </h1>
                { data2.map((item, idx) => 
                    <Item
                    styles={getStyle(idx, data2)}
                    key={idx}
                    item={item}
                    />
                )}
            </div>
        </section>
    )
};

export default TrainingUpList;