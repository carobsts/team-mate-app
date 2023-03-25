import { FC } from 'react';
import './Input.css';

interface InputProps {
    value: any;
    type: string;
    onChange: (e: any) => void;
    label: string
};

const Input: FC<InputProps> = (
    props: InputProps
) => {

    const {
        value,
        type,
        onChange,
        label
    } = props;

    return (
        <div className='InputComponent__container--wrapper'>
            <label> { label }</label>
            <input
            className='InputComponent__inputStyle'
            value={value}
            type={type}
            onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
};

export default Input;