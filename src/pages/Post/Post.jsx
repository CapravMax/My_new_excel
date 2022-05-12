import {useEffect, useRef} from 'react'
import {useQuery} from '@apollo/client'
import {POST} from 'GraphQL/Queries'
// import YandexShare from 'react-yandex-share';

import { useParams } from 'react-router-dom';

import clsx from 'clsx';
import styles from'./style.module.scss'
const Post = ({offsetY}) => {
    let {id} = useParams();
    const {error, loading, data} = useQuery(POST, {
        variables: {
            id: id
        }
    })
    
    useEffect(()=>{}, [data])
    console.log(data)
    return !loading ? (
        <div className={clsx(styles['post'])}>
            <div className={clsx(styles['post__wrapcontent'])}>
                <h2>{data.post.title}</h2>
                <div className={clsx(styles['post__content'])} dangerouslySetInnerHTML={{__html: data.post.content }} />
            </div>
        </div>
    ) : null;
};

export default Post;
