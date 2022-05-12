import {useId, useEffect} from 'react';
import { Link } from "react-router-dom";
import {useQuery} from '@apollo/client'
import {ROUTES} from 'GraphQL/Queries'

import clsx from 'clsx';
import styles from './style.module.scss'

const Footer = () => {
    const id = useId()
    const {error, loading, data} = useQuery(ROUTES)
    // console.log(data.menu.menuItems.nodes)
    return (
        <div className={clsx(styles['footer'])}>
            <div className={clsx(styles['footer__logo'])}>b-go</div>
            <ul className={clsx(styles['navbar__list'])}>
                {
                    !loading && data.menu.menuItems.nodes.map(({label, path, childItems}, i) => 
                    <li key={id + i} className={clsx(styles['navbar__item'])}>
                        {childItems.nodes.length ? (
                            <>
                                <span>{label}<i className={clsx(styles['arrow'])} /></span>
                                <ul className={clsx(styles['navbar__sublist'])}>
                                    {childItems.nodes.map(({label, path}, i) => <li key={id + i} className={clsx(styles['navbar__subitem'])}><Link to={path}>{label}</Link></li>)}
                                </ul>
                            </>
                        ) : <Link to={path} key={id + i}>{label}</Link>}
                    </li>)
                }
            </ul>
            <div className={clsx(styles['contacts'])}>
                { !loading && (
                    <>
                        <span>{data.menu.contacts.phone}</span>
                        <span>{data.menu.contacts.email}</span>
                    </>
                )}
            </div>
        </div>
    );
};

export default Footer;



// import { Link } from "react-router-dom";
// import './NavBar.scss'

// const NavBar = ({toggle, isOpen}) => {
//     const id = useId()
//     const {error, loading, data} = useQuery(ROUTES)

//     useEffect(() => {}, [data])
//     return !loading ? (
//         <div className="navigation">
//             {/* <div className="logo">B-GO</div> */}
//             <nav className={`navbar${isOpen? ' open' : ''}`}>
                
//             </nav>
//         </div>
//     ) : null;
// };
// export default NavBar;

