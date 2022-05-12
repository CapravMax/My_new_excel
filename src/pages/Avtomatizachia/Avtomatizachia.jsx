import { useEffect } from 'react';
import {useQuery} from '@apollo/client'
import {AUTOMATIZATION} from 'GraphQL/Queries'

import clsx from 'clsx';
import styles from './style.module.scss'

const Avtomatizachia = ({offsetY}) => {
    const {error, loading, data} = useQuery(AUTOMATIZATION)

    useEffect(() => {}, [data])
    return (
        <div className={clsx(styles.avtomatizachia)}>
            <div className={clsx(styles['block__content'], styles['content1'])}>
                {!loading && (
                    <>
                        <h2>{data.page.automatization_content.block1.title}</h2>
                        <p>{data.page.automatization_content.block1.subtitle.split('\n').map((x, key) => <span key={key}>{x}</span>)}</p>
                    </>
                )}
            </div>
            <div className={clsx(styles['block__img'], styles['img1'])} style={{transform: `translateY(-${offsetY * 0.3}px)`}}>
                {!loading &&  (
                        <img src={data.page.automatization_content.block1.image.sourceUrl} alt="" />
                )} 
            </div>
            <div className={clsx(styles['block__content'], styles['content2'])}>
                {!loading &&  (
                        <>
                            <h3>{data.page.automatization_content.block2.title}</h3>
                            <ul className={clsx(styles['block__list'])}>
                                {data.page.automatization_content.block2.list1.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                            </ul>
                            <ul className={clsx(styles['block__list'])}>
                                {data.page.automatization_content.block2.list2.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                            </ul>
                            <h4><a href={data.page.automatization_content.block2.link.url}>{data.page.automatization_content.block2.link.text}</a></h4>
                        </>
                )} 
            </div>
            <div className={clsx(styles['block__content'], styles['content3'])}>
                {!loading &&  (
                        <>
                            <h3>{data.page.automatization_content.block3.title}</h3>
                            <ul className={clsx(styles['block__list'])}>
                                {data.page.automatization_content.block3.list1.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                            </ul>
                            <p>{data.page.automatization_content.block3.paragraph1}</p>
                            <ul className={clsx(styles['block__list'])}>
                                {data.page.automatization_content.block3.list2.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                            </ul>
                            <p>{data.page.automatization_content.block3.paragraph2}</p>
                            <p>{data.page.automatization_content.block3.paragraph3}</p>
                        </>
                )} 
            </div>
        </div>
    );
};

export default Avtomatizachia;