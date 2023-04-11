import { Button } from '@mui/material';
import { FC, useState } from 'react'; 
import Input from '../../../../common/input/Input';
import Select from '../../../../common/select/Select';
import './styles.css';

interface CreateDateProps {};

const CreateDate: FC<CreateDateProps> = () => {

    const [ fullname, setFullname ] = useState<string>(''); 
    const [ date, setDate ] = useState<number|undefined>(); 
    const [ hour, setHour ] = useState<string>(''); 

    return (
        <section className='CreatePlayerComponent__container--wrapper'>
            <h1> Agregar partido </h1>
            <Input
            label='Oponente:'
            value={fullname}
            type='text'
            onChange={setFullname}
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
            <Select/>
            <div>
                <Button
                className='CreatePlayerComponent__button--confirm' 
                variant="contained"> 
                    Agregar
                </Button>
                <Button 
                className='CreatePlayerComponent__button--decline'
                variant="outlined"> 
                    Cancelar
                </Button>
            </div>
        </section>
    )
};

export default CreateDate;