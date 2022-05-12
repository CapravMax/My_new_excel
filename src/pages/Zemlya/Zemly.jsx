import {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client'
import {EARTH} from 'GraphQL/Queries'
import Input from 'components/Input';
import Button from 'components/Button';
import InputCheckbox from 'components/InputCheckbox';
import Form from 'components/Form';

import clsx from 'clsx'
import styles from './style.module.scss'

const Zemly = ({offsetY}) => {
    const {error, loading, data} = useQuery(EARTH)

    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const changeName = (e) => setName(prev => e.target.value) 
    const changeContact = (e) => setContact(prev => e.target.value) 
    useEffect(()=>{}, [data])
    return (
        <div className={clsx(styles['zemlya'])}>
            <div className={clsx(styles['block__img'], styles['img1'])} style={{transform: `translateY(-${offsetY * 0.3}px)`}}>
                {!loading &&  (
                        <img src={data.page.earth_content.image.sourceUrl} alt="" />
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content1'])}>
                {!loading && (
                    <>
                        <Form className={clsx(styles['form'])}>
                            {Object.entries(data.page.earth_content.form).filter(key => /checkbox/.test(key)).map(([_, value], key) => <InputCheckbox key={key}>{value}</InputCheckbox>)}
                            <Input value={name} onChange={changeName} placeholder='Имя'/>
                            <Input value={contact} onChange={changeContact} placeholder='Контакт' />
                            <Button>Отправить</Button>
                        </Form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Zemly;