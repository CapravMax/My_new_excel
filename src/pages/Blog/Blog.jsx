import {useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {POST, BLOG} from 'GraphQL/Queries'
import { useParams } from 'react-router-dom';

import GridCards from 'components/GridCards';

import clsx from 'clsx';
import styles from'./style.module.scss'
const Blog = ({offsetY}) => {
    const {error, loading, data} = useQuery(BLOG)
    useEffect(()=>{}, [data])
    const {id} = useParams()
    return (
        <div className={clsx(styles['blog'])}>
            {!loading && (
                <>
                    <h2 className={clsx(styles['blog__title'])}>{data.page.blogs_content.title}</h2>
                    <p className={clsx(styles['blog__content'])}>
                        <a 
                            className={clsx(styles['link'])} 
                            href={data.page.blogs_content.link.url}
                        >
                            {data.page.blogs_content.link.text}
                        </a>
                    </p>
                    <GridCards data={!loading ? data.posts.edges.slice(0, 8).reduce((acc, {node}) => ([...acc, node]), []) : []} media/>
                </>
            )}
            
        </div>
    );
};

export default Blog;