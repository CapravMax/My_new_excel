import { useRef, useEffect } from "react";
import {useQuery} from '@apollo/client'
import {TEAM} from 'GraphQL/Queries'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import GridCards from 'components/GridCards';

import clsx from 'clsx'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from'./style.module.scss'
import SwiperWrapStyle from './SwiperWrapStyle'

const Komanda = () => {
    const swiperNavPrevRef = useRef(null)
    const swiperNavNextRef = useRef(null)
    const params = {
        // ContainerEl: 'section',
        // WrapperEl: 'section',
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            clickable: true
        },
        navigation: {
            prevEl: swiperNavPrevRef.current,
            nextEl: swiperNavNextRef.current,
        },
        modules: [Pagination, Navigation],
        onInit: (swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current
            swiper.params.navigation.nextEl = swiperNavNextRef.current
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
        },
    }
    const {error, loading, data} = useQuery(TEAM)

    useEffect(() => {}, [data])

    return !loading ? (
        <div className={clsx(styles['comands'])}>
            <h2 className={clsx(styles['title'])}>{data.page.team_content.title}</h2>
            <div className={clsx(styles['cards'])}>
                
                {data.teamMembers.nodes.slice(0, 3).map(({title, featuredImage, id})=> (
                    <div className={clsx(styles['cards__item'])} key={id}>
                        <span className={clsx(styles['cards__title'])}>{title}</span>
                        <img src={featuredImage.node.sourceUrl} alt="" width={200} height={550}/>
                    </div>
                ))}
            </div>
            <div className={clsx(styles['slider'])}>
                <h3>{data.page.team_content.sliderTitle}</h3>
                <SwiperWrapStyle>
                    <div className={clsx(styles['slider__container'])}>

                        <Swiper
                        {...params}
                        className="mySwiper"
                        >
                            {data.teamMembers.nodes.map(({title, featuredImage, id}) => (
                                <SwiperSlide key={id}>
                                    <div className={clsx(styles['slide'])}>
                                        <span className={clsx(styles['slide__title'])}>{title}</span>
                                        <img src={featuredImage.node.sourceUrl} alt="" width={200} height={300} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="slider-arrow arrow-prev" ref={swiperNavPrevRef} />
                        <div className="slider-arrow arrow-next" ref={swiperNavNextRef} />
                    </div>
                </SwiperWrapStyle>
                
            </div>
            <h2 className={clsx(styles['gtitle'])}>{data.page.team_content.perfomancesTitle}</h2>
            <GridCards className={clsx(styles['komanda__grid'])} data={!loading ? data.performances.nodes : []}/>
        </div>
    ) : null;
};

export default Komanda;