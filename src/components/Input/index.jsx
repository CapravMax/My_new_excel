import {useInput} from 'hooks'
import clsx from 'clsx';
import styles from './style.module.scss'

const Input = ({placeholder, value, onChange}) => {
    const name = useInput(value, true)
    return (
        <label className={clsx(styles['form__label'])}>
            <input className={clsx(styles['form__input'])} type="text" placeholder={placeholder || ''} {...name} />
        </label>
    );
};

export default Input;