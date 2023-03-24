import { FC, useState } from 'react'; 
import CardItem from '../../../common/cardItem/CardItem';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import './styles.css';

interface DatesProps {
    history: any[]
};

const Dates: FC<DatesProps> = (props: DatesProps) => {
    
    const {
        history
    } = props;

    const [ acept, setAcept ] = useState<boolean>(false);
    const [ deny, setDeny ] = useState<boolean>(false);

    const ATTENDED_COLOR: string = '#478610';
    const NO_ATTENDED_COLOR: string = '#e62e1b';

    function getStyle(idx: number, elements: any[]) {
        return idx !== (elements.length-1) 
        ? { marginBottom: 10 } : { marginBottom: 0 }
    };

    return (
       <section className='DatesComponent__container--wrapper'>
            <div>
                <h1> Próxima Fecha </h1>
                <CardItem styles={{ border: `1px solid ${ATTENDED_COLOR}` }}>
                    <div className='Dates__container--firstItem'>
                        <div>
                            <h2> Taladro Fem vs. V1 </h2>
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
                            className='Dates__button--confirm' 
                            variant="contained"> 
                                Voy
                            </Button>
                            <Button 
                            onClick={() => {
                                setAcept(false);
                                setDeny(true);
                            }}
                            className='Dates__button--decline'
                            variant="outlined"> 
                                No voy 
                            </Button>
                        </div>
                    </div>
                </CardItem>
            </div>
            <div>
                <h1> Fechas anteriores </h1>
                { history.map((el, idx) =>
                    <CardItem styles={{ ...getStyle(idx, history), 
                    borderLeft: `6px solid ${el.attended ? ATTENDED_COLOR : NO_ATTENDED_COLOR}` }}>
                        <div className='Dates__container--item'>
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

export default Dates;