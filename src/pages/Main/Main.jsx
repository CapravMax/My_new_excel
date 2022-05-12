import { useEffect } from 'react';
import {useQuery} from '@apollo/client'
import {MAIN} from 'GraphQL/Queries'

import clsx from 'clsx';
import styles from'./style.module.scss'

const Main = ({offsetY}) => {
    const {error, loading, data} = useQuery(MAIN)
    useEffect(() => {
    },[data]);

    return (
        <>
            <main className={clsx(styles['main'])}>
                <div className={clsx(styles['block__content'], styles['content1'])}>
                    {!loading && (
                        <>
                            <h2>{data.page.content_on_main.block1.title}</h2>
                            <h3>{data.page.content_on_main.block1.subtitle}</h3>
                            <p>{data.page.content_on_main.block1.paragraph1}</p>
                            <p>{data.page.content_on_main.block1.paragraph2}</p>
                            <p>{data.page.content_on_main.block1.paragraph3}</p>
                        </>
                    )}
                </div>
                <div className={clsx(styles['block__img'], styles['img1'])} style={{transform: `translateY(-${offsetY * 0.3}px)`}}>
                    {!loading &&  (
                        <img src={data.page.content_on_main.block1.image.sourceUrl} alt="" />
                    )}
                </div>
        
                <div className={clsx(styles['block__content'], styles['content2'])}>
                    {!loading && (
                        <>
                            <p>{data.page.content_on_main.block2.paragraph1}</p>
                            <p>{data.page.content_on_main.block2.paragraph2}</p>
                            <ul className={clsx(styles['block__list'])}>
                                {data.page.content_on_main.block2.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                            </ul>
                            <p>{data.page.content_on_main.block1.paragraph3}</p>
                        </>
                    )}
                </div>
                <div className={clsx(styles['block__img'], styles['img2'])} style={{transform: `translateY(-${(offsetY - 700) * 0.3}px)`}}>
                    {!loading &&  (
                        <img src={data.page.content_on_main.block2.image.sourceUrl} alt="" />
                    )}
                </div>
            
                <div className={clsx(styles['grid'])}>
                    {!loading && Object.entries(data.page.content_on_main).filter(key => /service/.test(key)).map(([_, value]) => value).map(({title, description, image}, index)=>(
                        <div className={clsx(styles['grid__item'], styles[`grid__item--${index + 1}`])} key={index}>
                            <div className={clsx(styles['grid__wrap'])}>
                                <h3 className={clsx(styles['grid__title'])}>{title}</h3>
                                <ul className={clsx(styles['grid__list'], styles['list'])}>
                                    {description.split('\n').map((x, i) => <li key={i} className={clsx(styles['list__item'])}>{x}</li>)}
                                </ul>                                
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className={clsx(styles['block__content'], styles['content3'])}>
                    {!loading && (
                        <>
                            <h3>{data.page.content_on_main.block3.title}</h3>
                        </>
                    )}
                </div>
                <div className={clsx(styles['block__content'], styles['content4'])}>
                    {!loading && (
                        <>
                            <p>{data.page.content_on_main.block3.paragraph1}</p>
                            <p>{data.page.content_on_main.block3.paragraph2}</p>
                        </>
                    )}
                    
                </div>
                
            </main>
        </>
    );
};

export default Main;