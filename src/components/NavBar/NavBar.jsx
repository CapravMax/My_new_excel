import {useId, useEffect, useState} from 'react';
import {useQuery} from '@apollo/client'
import {ROUTES} from 'GraphQL/Queries'

import { Link } from "react-router-dom";
import './NavBar.scss'
import clsx from "clsx";
import styles from "../Header/style.module.scss";

const NavBar = ({toggle, isOpen}) => {
    const id = useId()
    const [drop, setDrop] = useState(false)
    const {error, loading, data} = useQuery(ROUTES)
    console.log(drop)
    useEffect(() => {}, [data])
    return !loading ? (
        <div className="navigation">

            <nav className={`navbar${isOpen? ' open' : ''}`}>
                <ul className={`navbar__list${isOpen? ' open' : ''}`}>
                    {
                        data.menu.menuItems.nodes.map(({label, path, childItems}, i) => 
                        <li key={id + i} className={`navbar__item${drop? ' drop' : ''}`} onClick={()=> childItems.nodes.length && setDrop(x => !x)}>
                            {childItems.nodes.length ? (
                                <>
                                    <span>{label}<Arrow/></span>
                                    <ul className='navbar__sublist'>
                                        {childItems.nodes.map(({label, path}, i) => <li key={id + i} className={`navbar__subitem${drop ? ' drop' : ''}`}><Link to={path}>{label}</Link></li>)}
                                    </ul>
                                </>
                            ) : <Link to={path} key={i}>{label}</Link>}
                        </li>)
                    }
                </ul>
            </nav>
        </div>
    ) : null;
};
export default NavBar;

const Arrow = () => <span className="arrow" />