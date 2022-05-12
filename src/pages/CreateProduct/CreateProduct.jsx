import {useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {PRODUCT} from 'GraphQL/Queries'

import Form from 'components/Form'
import Button from 'components/Button';
import Input from 'components/Input';

import clsx from 'clsx'
import styles from './style.module.scss'

const CreateProduct = ({offsetY}) => {
    const {error, loading, data} = useQuery(PRODUCT)
    useEffect(()=>{}, [data])
    return (
        <div className={clsx(styles['product'])}>
            <div className={clsx(styles['block__content'], styles['content1'])}>
                {!loading && (
                    <>
                        <h2>{data.page.product_creation_content.block1.title}</h2>
                        <h4>{data.page.product_creation_content.block1.subtitle}</h4>
                        <ul className={clsx((styles['block__list']))}>
                            {data.page.product_creation_content.block1.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                    </>
                )}

            </div>
            <div className={clsx(styles['block__img'], styles['img1'])} style={{transform: `translateY(-${offsetY * 0.3}px)`}}>
                    {!loading &&  (
                        <img src={data.page.product_creation_content.block1.image.sourceUrl} alt="" />
                    )}
            </div>

            <div className={clsx(styles['block__img'], styles['img2'])} style={{transform: `translateY(-${(offsetY - 870) * 0.3}px)`}}>
                    {!loading &&  (
                        <img src={data.page.product_creation_content.block2.image.sourceUrl} alt="" />
                    )}
            </div>
            <div className={clsx(styles['block__content'], styles['content2'])}>
                {!loading && (
                    <>
                        <h3>{data.page.product_creation_content.block2.title}</h3>
                        <ul className={clsx((styles['block__list']))}>
                            {data.page.product_creation_content.block2.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                        <h4>{data.page.product_creation_content.block2.form.title}</h4>
                        <Form>
                            <Input placeholder='Имя'/>
                            <Input placeholder='Контакт' />
                            <Input placeholder='Город' />
                            <Button>Отправить</Button>
                        </Form>
                    </>
                )}
            </div>

            <div className={clsx(styles['block__img'], styles['img3'])} style={{transform: `translateY(-${(offsetY - 1800) * 0.3}px)`}}>
                {!loading &&  (
                    <img src={data.page.product_creation_content.block3.image.sourceUrl} alt="" />
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content3'])}>
                {!loading && (
                    <>
                        <h3>{data.page.product_creation_content.block3.title}</h3>
                        <ul className={clsx((styles['block__list']))}>
                            {data.page.product_creation_content.block3.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                        <h4>{data.page.product_creation_content.block3.form.title}</h4>
                        <Form>
                            <Input placeholder='Имя'/>
                            <Input placeholder='Контакт' />
                            <Input placeholder='Город' />
                            <Button>Отправить</Button>
                        </Form>
                    </>
                )}
            </div>

            <div className={clsx(styles['block__img'], styles['img4'])} style={{transform: `translateY(-${(offsetY - 2550) * 0.3}px)`}}>
                {!loading &&  (
                    <img src={data.page.product_creation_content.block4.image.sourceUrl} alt="" />
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content4'])}>
                {!loading && (
                    <>
                        <h3>{data.page.product_creation_content.block4.title}</h3>
                        <ul className={clsx((styles['block__list']))}>
                            {data.page.product_creation_content.block4.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                        <h4>{data.page.product_creation_content.block4.form.title}</h4>
                        <Form>
                            <Input placeholder='Имя'/>
                            <Input placeholder='Контакт' />
                            <Input placeholder='Город' />
                            <Button>Отправить</Button>
                        </Form>
                    </>
                )}
            </div>
        </div>
    );
};

export default CreateProduct;