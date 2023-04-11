import { FC } from 'react';
import './RadioButton.css';

interface RadioButtonProps {
    checked?: boolean;
    option: string;
    onClick: (option: string) => void;
};

const RadioButton: FC<RadioButtonProps> = (
    props: RadioButtonProps
) => {

    const {
        checked,
        option,
        onClick
    } = props;

    return (
        <div 
        onClick={() => onClick(option) }
        className='RadioButtonComponent__container--wrapper'>
            <div className='RadioButtonComponent__radioButton'>
                { checked && <div className='RadioButtonComponent--checked'></div> }
            </div>
            <div className='RadioButtonComponent__container--label'>
                <p> { option } </p>
            </div>
        </div>
    )
};

export default RadioButton;