import clsx from 'clsx';
import styles from './style.module.scss';

const Form = ({children, className}) => {
    return (
        <div className={clsx(styles['form'], {[className]: className})}>
            {children}
        </div>
    );
};

export default Form;