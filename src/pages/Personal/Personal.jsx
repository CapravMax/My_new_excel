import { useEffect } from 'react';
import {useQuery} from '@apollo/client'
import {STAFF} from 'GraphQL/Queries'

import Form from 'components/Form';
import Input from 'components/Input';
import Button from 'components/Button';

import clsx from 'clsx';
import styles from './style.module.scss'

const Personal = ({offsetY}) => {
    const {error, loading, data} = useQuery(STAFF)

    useEffect(() => {}, [data])
    return (
        <div className={clsx(styles['personal'])}>
            <div className={clsx(styles['block__content'], styles['content1'])}>
                {!loading && (
                    <>
                        <h2>{data.page.staff_content.block1.title}</h2>
                        <h3>{data.page.staff_content.block1.subtitle}</h3>
                    </>
                )}

            </div>
            <div className={clsx(styles['block__img'], styles['img1'])} style={{transform: `translateY(-${offsetY * 0.3}px)`}}>
                {!loading &&  (
                    <img src={data.page.staff_content.block1.image.sourceUrl} alt="" />
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content2'])}>
                {!loading && (
                    <>
                        <h3>{data.page.staff_content.block2.title}</h3>
                        <ul className={clsx(styles['block__list'])}>
                            {data.page.staff_content.block2.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>

                        <p>{data.page.staff_content.block2.paragraph1}</p>
                    </>
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content3'])}>
                {!loading && (
                    <>
                        <h4>{data.page.staff_content.block2.form.title}</h4>
                        <Form className={clsx(styles['form'])}>
                            <Input placeholder='Имя'/>
                            <Input placeholder='Контакт'/>
                            <Button>Отправить</Button>
                        </Form>
                    </>
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content4'])}>
                {!loading && (
                    <>
                        {data.page.staff_content.block3.title.split('\n').map(x => <h3>{x}</h3>)} 
                        <ul className={clsx(styles['block__list'])}>
                            {data.page.staff_content.block3.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                    </>
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content5'])}>
                {!loading && (
                    <>
                        <h3>{data.page.staff_content.block4.title}</h3>
                        <p>{data.page.staff_content.block4.paragraph1}</p>
                        <p>{data.page.staff_content.block4.paragraph2}</p>
                        <h4>{data.page.staff_content.block4.form.title}</h4>
                        <Form className={clsx(styles['form'])}>
                            <Input placeholder='Имя'/>
                            <Input placeholder='Контакт' />
                            <Button>Отправить</Button>
                        </Form>
                    </>
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content6'])}>
                {!loading && (
                    <>
                        <h3>{data.page.staff_content.block5.title}</h3>
                        <p>{data.page.staff_content.block5.paragraph1}</p>
                        <ul className={clsx(styles['block__list'])}>
                            {data.page.staff_content.block5.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                    </>
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content7'])}>
                {!loading && (
                    <>
                        <h4>{data.page.staff_content.block5.form.title}</h4>
                        <Form className={clsx(styles['form'])}>
                            <Input placeholder='Имя'/>
                            <Input placeholder='Контакт' />
                            <Button>Отправить</Button>
                        </Form>
                    </>
                )}
            </div>


            <div className={clsx(styles['block__content'], styles['content8'])}>
                {!loading && (
                    <>
                        <h3>{data.page.staff_content.block6.title}</h3>
                        <ul className={clsx(styles['block__list'])}>
                            {data.page.staff_content.block6.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                    </>
                )}
            </div>

            <div className={clsx(styles['block__content'], styles['content9'])}>
                {!loading && (
                    <>
                        <h4>{data.page.staff_content.block6.form.title}</h4>
                        <Form className={clsx(styles['form'])}>
                            <Input placeholder='Имя'/>
                            <Input placeholder='Контакт' />
                            <Button>Отправить</Button>
                        </Form>
                    </>
                )}
            </div>

            <div className={clsx(styles['block__content'], styles['content10'])}>
                {!loading && (
                    <>
                        <h3>{data.page.staff_content.block7.title}</h3>
                        <ul className={clsx(styles['block__list'])}>
                            {data.page.staff_content.block7.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                    </>
                )}

            </div>
            <div className={clsx(styles['block__content'], styles['content11'])}>
                {!loading && (
                    <>
                        <h4>{data.page.staff_content.block7.form.title}</h4>
                        <Form className={clsx(styles['form'])}>
                            <Input placeholder='Имя'/>
                            <Input placeholder='Контакт' />
                            <Button>Отправить</Button>
                        </Form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Personal;