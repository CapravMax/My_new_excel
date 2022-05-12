import {useState} from 'react';
import NavBar from 'components/NavBar'
import clsx from 'clsx';
import styles from './style.module.scss'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(x => !x)

    return (
        <div className={clsx(styles['header'])}>
            <a href="#" className={clsx(styles['header__logo'])}>b-go</a>
            <NavBar toggle={toggle} isOpen={isOpen} />
            <div className={clsx(styles['menu'])}><span className={clsx(styles['menu__text'], {[styles['open']]: isOpen})} onClick={toggle}>menu</span><span className={clsx(styles['menu__btn'],{[styles['open']]: isOpen})} onClick={toggle}></span></div>
        </div>
    );
};

export default Header;