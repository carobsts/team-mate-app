import { FC } from 'react';
import './Select.css';

interface SelectProps {};

const Select: FC<SelectProps> = () => {
    return (
        <div className='SelectComponent__container--wrapper'>
            <label> Aca el select: </label>
            <select>
                <option> Uno </option>
                <option> Dos </option>
                <option> Tres </option>
            </select>
        </div>
    )
};

export default Select;