import {useState,useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {ANALITIKA} from 'GraphQL/Queries'

import { Swiper, SwiperSlide } from "swiper/react";

import Form from 'components/Form';
import InputCheckbox from 'components/InputCheckbox';
import Input from 'components/Input';
import Button from 'components/Button';

import clsx from "clsx";

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./style.module.scss";
import SwiperWrapStyle from './SwiperWrapStyle'

const Analitika = ({offsetY}) => {
    const {error, loading, data} = useQuery(ANALITIKA)
    
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const changeName = (e) => setName(prev => e.target.value) 
    const changeContact = (e) => setContact(prev => e.target.value) 
    useEffect(() => {
    },[data]);
    return (
        <div className={clsx(styles['analitika'])}>
            <div className={clsx(styles['block__content'], styles['content1'])}>
                {!loading && (
                    <>
                        <h2>{data.page.analytics_content.block1.title}</h2>
                        <h3>{data.page.analytics_content.block1.subtitle}</h3>
                        <div className={clsx(styles['slider-container'])}>
                            <SwiperWrapStyle >
                                <Swiper
                                    direction={"vertical"}
                                    pagination={{
                                    
                                    clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {Object.entries(data.page.analytics_content.block1.slider).filter(key => /slide/.test(key)).map(([_, value], key) => <SwiperSlide key={key}><p dangerouslySetInnerHTML={{
                                        __html: value
                                    }}/></SwiperSlide>)}
                                </Swiper>
                            </SwiperWrapStyle>
                            
                        </div>
                    </>
                )}
                
            </div>
            <div 
                className={clsx(styles['block__img'], styles['img1'])} 
                style={{transform: `translateY(-${offsetY * 0.3}px)`}}
            >
                {!loading &&  (
                        <img src={data.page.analytics_content.block1.image.sourceUrl} alt="" />
                )}
            </div>
            <div 
                className={clsx(styles['block__img'], styles['img2'])} 
            >
                {!loading &&  (
                        <img src={data.page.analytics_content.form.image.sourceUrl} alt="" />
                )}
            </div>
            <div className={clsx(styles['block__content'], styles['content2'])}>
                {!loading && (
                    <>
                        <h4>{data.page.analytics_content.form.title}</h4>
                        <Form className={clsx(styles['form'])}>
                            {Object.entries(data.page.analytics_content.form).filter(key => /checkbox/.test(key)).map(([_, value], key) => <InputCheckbox key={key}>{value}</InputCheckbox>)}

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

export default Analitika;