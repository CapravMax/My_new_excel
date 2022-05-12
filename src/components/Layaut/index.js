import Header from 'components/Header';
import Footer from "components/Footer";

// import "./../App.scss";
import clsx from "clsx";
import styles from './style.module.scss'



function Layaut({children, offsetY}) {

    return (
    <div className={clsx(styles['wrapper'])}>
        <div className="b-go" style={{
        backgroundPosition: `left 50px top ${60 - offsetY / 10}px`
        }}
        />
        <Header />
        <div className={clsx(styles['main-content'])}>{children}</div>
        <Footer />
    </div>
    );
}

export default Layaut;
