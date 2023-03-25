import { Button } from '@mui/material';
import { FC, useState } from 'react'; 
import Input from '../../../../common/input/Input';
import './styles.css';

interface CreatePlayerProps {};

const CreatePlayer: FC<CreatePlayerProps> = () => {

    const [ fullname, setFullname ] = useState<string>(''); 
    const [ phone, setPhone ] = useState<number|undefined>(); 
    const [ email, setEmail ] = useState<string>(''); 

    return (
        <section className='CreatePlayerComponent__container--wrapper'>
            <h1> Agregar jugador/a </h1>
            <Input
            label='Nombre y apellido:'
            value={fullname}
            type='text'
            onChange={setFullname}
            />
            <Input
            label='Teléfono:'
            value={phone}
            type='number'
            onChange={setPhone}
            />
            <Input
            label='Correo electrónico:'
            value={email}
            type='email'
            onChange={setEmail}
            />
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

export default CreatePlayer;