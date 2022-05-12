import { useState, useEffect } from 'react';
import {useQuery} from '@apollo/client'
import {PARTNER} from 'GraphQL/Queries'
import Input from 'components/Input';
import Button from 'components/Button';
import Form from 'components/Form';

import clsx from 'clsx';
import styles from'./style.module.scss'

const Partnyor = ({offsetY}) => {
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const changeName = (e) => setName(prev => e.target.value) 
    const changeContact = (e) => setContact(prev => e.target.value) 

    const {error, loading, data} = useQuery(PARTNER)

    useEffect(() => {}, [data])
    return (
        <div className={clsx(styles['partners'])}>
            <div className={clsx(styles['block__content'], styles['content1'])}>
                {!loading && (
                    <>
                        <h2>{data.page.partnership_content.block1.title}</h2>
                        <h3>{data.page.partnership_content.block1.subtitle}</h3>
                        <p>{data.page.partnership_content.block1.form.title}</p>
                        <Form className={clsx(styles['form'])}>
                            <Input value={name} onChange={changeName} placeholder='Имя'/>
                            <Input value={contact} onChange={changeContact} placeholder='Контакт' />
                            <Button>Отправить</Button>
                        </Form>
                    </>
                )}
            </div>
            <div className={clsx(styles['block__img'], styles['img1'])} style={{transform: `translateY(-${offsetY * 0.3}px)`}}>
                {!loading &&  (
                    <img src={data.page.partnership_content.block1.image.sourceUrl} alt="" />
                )} 
            </div>
        </div>
    );
};

export default Partnyor;