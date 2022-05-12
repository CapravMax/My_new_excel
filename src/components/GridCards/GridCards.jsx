import {Link} from 'react-router-dom'
import clsx from 'clsx';
import styles from './style.module.scss';

const GridCards = ({data, className, media=false}) => {
    return data ? (
        <div className={clsx(styles['cards'], styles['blog__grid'], {[className]: className})}>
            {
            data.map(({title, id, featuredImage}, i) => 
                <div 
                    key={id} 
                    className={clsx(styles['card__item'], styles[`item${i + 1}`])} 
                    style={{background: `url(${featuredImage.node.sourceUrl}) noRepeat`, backgroundSize: 'cover'}}
                >   
                    {media ? (<Link to={`/blog/${id}`}><span className={clsx(styles['card__title'])}>{title}</span></Link>) : (<span className={clsx(styles['card__title'])}>{title}</span>)}
                    
                </div>)}
        </div>
    ) : (
        <div className={clsx(styles['cards'], {[className]: className})}>
            <div className={clsx(styles['card__item'], styles['item1'])}><span className={clsx(styles['card__title'])}>Новый тренд продаж</span></div>
            <div className={clsx(styles['card__item'], styles['item2'])}><span className={clsx(styles['card__title'])}>Конференция Digital Marketing</span></div>
            <div className={clsx(styles['card__item'], styles['item3'])}><span className={clsx(styles['card__title'])}>Digital Day Belarus</span></div>
            <div className={clsx(styles['card__item'], styles['item4'])}><span className={clsx(styles['card__title'])}>Digital Marketing</span></div>
            <div className={clsx(styles['card__item'], styles['item5'])}><span className={clsx(styles['card__title'])}>Digital Day Belarus</span></div>
            <div className={clsx(styles['card__item'], styles['item6'])}><span className={clsx(styles['card__title'])}>Конференция «Маркетинг без пыли»</span></div>
            <div className={clsx(styles['card__item'], styles['item7'])}><span className={clsx(styles['card__title'])}>Конференция «Маркетинг»</span></div>
            <div className={clsx(styles['card__item'], styles['item8'])}><span className={clsx(styles['card__title'])}>Преимущества emailмаркетинга</span></div>
        </div>
    );
};

export default GridCards;