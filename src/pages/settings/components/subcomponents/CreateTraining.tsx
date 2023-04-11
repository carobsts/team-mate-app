import { Button } from '@mui/material';
import { FC, useState } from 'react'; 
import Input from '../../../../common/input/Input';
import RadioButton from '../../../../common/radio-button/RadioButton';
import './styles.css';

interface CreateTrainingProps {};

const CreateTraining: FC<CreateTrainingProps> = () => {

    const [ training, setTraining ] = useState<string>();
    const [ trainingType, setTrainingType ] = useState<string>('Entrenamiento');
    const [ date, setDate ] = useState<any>(new Date()); 
    const [ hour, setHour ] = useState<any>(); 
    const [ site, setSite ] = useState<string>('');

    return (
        <section className='CreateTrainingComponent__container--wrapper'>
            <h1> Crear entrenamiento/amistoso </h1>
            <div>
                <div className='CreateTrainingComponent__trainingType--radioButtons'>
                    <label> Tipo de encuentro: </label>
                    <RadioButton 
                    onClick={setTrainingType}
                    checked={trainingType === 'Entrenamiento'} option='Entrenamiento'/>
                    <RadioButton 
                    onClick={setTrainingType}
                    checked={trainingType === 'Amistoso'} option='Amistoso'/>
                </div>
                <Input
                label={trainingType === 'Entrenamiento' ? 'Entrenamiento:' : 'Versus:'} 
                value={training}
                type='text'
                onChange={setTraining}
                />
                <Input
                label='Fecha:'
                value={date}
                type='date'
                onChange={setDate}
                />
                <Input
                label='Hora:'
                value={hour}
                type='time'
                onChange={setHour}
                />
                <Input
                label='Lugar:'
                value={site}
                type='text'
                onChange={setSite}
                />
                <div className='CreateTrainingComponent__statusType--radioButtons'>
                    <label> Estado: </label>
                    <RadioButton onClick={() => console.log()} checked option='A realizarse'/>
                    <RadioButton onClick={() => console.log()} option='Realizado'/>
                    <RadioButton onClick={() => console.log()} option='Suspendido'/>
                </div>
            </div>
            <div>
                <Button
                className='CreateTrainingComponent__button--confirm' 
                variant="contained"> 
                    Guardar
                </Button>
                <Button 
                className='CreateTrainingComponent__button--decline'
                variant="outlined"> 
                    Cancelar
                </Button>
            </div>
        </section>
    )
};

export default CreateTraining;