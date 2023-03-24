import { FC, useState } from 'react';
import CardItem from '../../common/cardItem/CardItem';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import './Training.css';

const data = [
    {
        title: 'Entrenamiento con Gula',
        attended: false,
        date: '20/01/2023 - 19:00'
    },
    {
        title: 'Entrenamiento con Martín',
        attended: true,
        date: '29/01/2023 - 20:30'
    },
    {
        title: 'Entrenamiento con Martín',
        attended: true,
        date: '10/01/2023 - 20:00'
    }
];

interface TrainingProps {}; 

const Training: FC<TrainingProps> = (
    props: TrainingProps
) => {

    const [ acept, setAcept ] = useState<boolean>(false);
    const [ deny, setDeny ] = useState<boolean>(false);

    const ATTENDED_COLOR: string = '#478610';
    const NO_ATTENDED_COLOR: string = '#e62e1b';

    function getStyle(idx: number, elements: any[]) {
        return idx !== (elements.length-1) 
        ? { marginBottom: 10 } : { marginBottom: 0 }
    };

    return (
        <section className='Training__container--wrapper'>
            <h1> Entrenamientos </h1>
            <div>
                <h1> Próximo entrenamiento </h1>
                <CardItem styles={{ border: `1px solid ${ATTENDED_COLOR}` }}>
                    <div className='Training__container--firstItem'>
                        <div>
                            <h2> Entrenamiento con Gula </h2>
                            <p> 12/02/2023 - 19:00 </p>
                            { !acept && !deny && <p> (Pendiente de confirmación) </p> }
                            { acept && <p> (Confirmaste asistencia) </p> }
                            { deny && <p> (Confirmaste inasistencia) </p> }
                        </div>
                        <div>
                            <Button 
                            onClick={() => {
                                setAcept(true);
                                setDeny(false);
                            }}
                            className='Training__button--confirm' 
                            variant="contained"> 
                                Voy
                            </Button>
                            <Button 
                            onClick={() => {
                                setAcept(false);
                                setDeny(true);
                            }}
                            className='Training__button--decline'
                            variant="outlined"> 
                                No voy 
                            </Button>
                        </div>
                    </div>
                </CardItem>
            </div>
            <div>
                <h1> Entrenamientos anteriores </h1>
                { data.map((el, idx) =>
                    <CardItem styles={{ ...getStyle(idx, data), 
                    borderLeft: `6px solid ${el.attended ? ATTENDED_COLOR : NO_ATTENDED_COLOR}` }}>
                        <div className='Training__container--item'>
                            <div>
                                { el.attended ? <CheckIcon className='CheckIcon__icon--wrapper'/>
                                :  <CloseIcon className='CloseIcon__icon--wrapper'/> }
                            </div>
                            <div>
                                <h2> { el.title } </h2>
                                <p> { el.date } </p>
                                <p style={{ 
                                    marginTop: 5,
                                    marginBottom: 5,
                                    fontSize: 14,
                                    color: el.attended ? ATTENDED_COLOR : NO_ATTENDED_COLOR }}> 
                                    { el.attended ? 'Asistencia confirmada' : 'Inasistencia' } 
                                </p>
                            </div>
                        </div>
                    </CardItem>
                )}
            </div>
        </section>
    )
};

export default Training;