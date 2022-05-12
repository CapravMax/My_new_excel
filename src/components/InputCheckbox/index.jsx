import {useState} from 'react'
import clsx from 'clsx'
import styles from './style.module.scss'

const InputCheckbox = ({children, disabled}) => {
    // const name = useInput(value, true)
    const [value, setValue] = useState(false)
    const toggled = ({target: {checked}}) => setValue(checked)
    return (
        <label className={clsx(styles['check'])}>
            <input className={clsx(styles['check__input'])} type="checkbox" checked={value} disabled={disabled} onChange={toggled} />
            <span className={clsx(styles['check__box'])}></span>
            {children}
        </label>
    );
};

export default InputCheckbox;