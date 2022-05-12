import {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import {STRATEGII} from 'GraphQL/Queries'
import Input from 'components/Input'
import Button from 'components/Button'
import Form from 'components/Form';

import clsx from 'clsx';
import styles from './style.module.scss';

const Strategii = ({offsetY}) => {
    const {error, loading, data} = useQuery(STRATEGII)
    useEffect(()=>{}, [data])
    return (
        <div className={clsx(styles['strategii'])}>
            <div className={clsx(styles['block__content'], styles['content1'])}>
                {!loading && (
                    <>
                        <h2>{data.page.strategy_content.block1.title}</h2>
                        <p><p>{data.page.strategy_content.block1.paragraph1}</p></p>
                    </>
                )}
                
            </div>
            <div className={clsx(styles['block__img'], styles['img1'])} style={{transform: `translateY(-${offsetY * 0.3}px)`}}>
                {!loading &&  (
                        <img src={data.page.strategy_content.block1.image.sourceUrl} alt="" />
                )}    
            </div>
            <div className={clsx(styles['block__content'], styles['content2'])}>
                {!loading && (
                    <>
                        <h3>{data.page.strategy_content.block2.title}</h3>
                        <p>{data.page.strategy_content.block2.paragraph1}</p>
                        <ul className={clsx(styles['block__list'])}>
                            {data.page.strategy_content.block2.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                        <h4>{data.page.strategy_content.block2.form.title}</h4>
                        <Form className={clsx(styles['form'])}>
                            <Input placeholder='Имя'/>
                            <Input placeholder='Контакт'/>
                            <Button>Отправить</Button>
                        </Form>
                    </>
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content3'])}>
                {!loading && (
                    <>
                        <h3>{data.page.strategy_content.block3.title}</h3>
                        <p>{data.page.strategy_content.block3.paragraph1}</p>
                        <p>{data.page.strategy_content.block3.paragraph2}</p>
                        <p>{data.page.strategy_content.block3.paragraph3}</p>
                        <p>{data.page.strategy_content.block3.paragraph4}</p>
                    </>
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content4'])}>
                {!loading && (
                    <>
                        <h3>{data.page.strategy_content.block4.title}</h3>
                        <p>{data.page.strategy_content.block4.paragraph1}</p>
                        <p>{data.page.strategy_content.block4.paragraph2}</p>
                        <h4>{data.page.strategy_content.block4.form.title}</h4>
                        <Form className={clsx(styles['form'])}>
                            <Input placeholder='Имя'/>
                            <Input placeholder='Контакт'/>
                            <Button>Отправить</Button>
                        </Form>
                    </>
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content5'])}>
                {!loading && (
                    <>
                        <h3>{data.page.strategy_content.block5.title}</h3>
                        <p>{data.page.strategy_content.block5.paragraph1}</p>
                        <p>{data.page.strategy_content.block5.paragraph2}</p>
                        <p>{data.page.strategy_content.block5.paragraph3}</p>
                        <p>{data.page.strategy_content.block5.paragraph4}</p>
                        <p>{data.page.strategy_content.block5.paragraph5}</p>
                        <p>{data.page.strategy_content.block5.paragraph6}</p>
                    </>
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content6'])}>
                {!loading && (
                    <>
                        <h3>{data.page.strategy_content.block6.title}</h3>
                        <p>{data.page.strategy_content.block6.paragraph1}</p>
                        <p>{data.page.strategy_content.block6.paragraph1}</p>
                        <ul className={clsx(styles['block__list'])}>
                            {data.page.strategy_content.block6.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                    </>
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content7'])}>
                {!loading && (
                    <>
                        <h3>{data.page.strategy_content.block7.title}</h3>
                        <p>{data.page.strategy_content.block7.paragraph1}</p>
                        <p>{data.page.strategy_content.block7.paragraph2}</p>
                        <h4>{data.page.strategy_content.block7.form.title}</h4>
                        <Form className={clsx(styles['form'])}>
                            <Input placeholder='Имя'/>
                            <Input placeholder='Контакт'/>
                            <Button>Отправить</Button>
                        </Form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Strategii;