import { Button } from '@mui/material';
import { FC, useState } from 'react'; 
import Input from '../../../../common/input/Input';
import './styles.css';

interface CreateChampionshipProps {};

const CreateChampionship: FC<CreateChampionshipProps> = () => {

    const [ fullname, setFullname ] = useState<string>(''); 
    const [ phone, setPhone ] = useState<number|undefined>(); 
    const [ email, setEmail ] = useState<string>(''); 

    return (
        <section className='CreateChampionshipComponent__container--wrapper'>
            <h1> Agregar campeonato </h1>
            <Input
            label='Nombre del campeonato:'
            value={fullname}
            type='text'
            onChange={setFullname}
            />
            <Input
            label='Dirección:'
            value={phone}
            type='text'
            onChange={setPhone}
            />
            <Input
            label='Desde:'
            value={email}
            type='date'
            onChange={setEmail}
            />
            <Input
            label='Hasta:'
            value={email}
            type='date'
            onChange={setEmail}
            />
            <div>
                <Button
                className='CreateChampionshipComponent__button--confirm' 
                variant="contained"> 
                    Agregar
                </Button>
                <Button 
                className='CreateChampionshipComponent__button--decline'
                variant="outlined"> 
                    Cancelar
                </Button>
            </div>
        </section>
    )
};

export default CreateChampionship;