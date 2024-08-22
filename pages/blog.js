import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'
import InfiniteScroll from 'react-infinite-scroll-component'

const Blog = (props) => {

    const [blogs, setBlogs] = useState(props.allBlogs)
    const [count, setCount] = useState(2)

    const fetchMoreData = async () => {
        let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 4}`)
        setCount(count + 4)
        let data = await d.json()
        setBlogs(data)
    }

    return (
        <div className={styles.container}>

            <main className={styles.main}>


                <InfiniteScroll
                    dataLength={blogs.length}
                    next={fetchMoreData}
                    hasMore={props.allCont !== blogs.length}
                    loader={<h4>Loading...</h4>}
                    height={"75vh"}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {blogs.map((item, id) => (
                        <Link href={`/blogpost/${item.slug}`} className={styles.blogs}>
                            <div className={styles.blogItem} key={id}>
                                {/* <Link href={`/blogpost/${item.slug}`}> */}
                                <h3 className={styles.blogItemh3}>{item.title}</h3>
                                {/* </Link> */}
                                <p className={styles.blogItemP}>{item.content.substr(0, 250)}...</p>
                            </div>
                        </Link>
                    ))}
                </InfiniteScroll>

            </main >

        </div >
    )
}

export async function getStaticProps(context) {
    let data = await fs.promises.readdir('blogdata/');
    let allCont = data.length
    let allBlogs = [];
    for (let index = 0; index < 4; index++) {
        const item = data[index];
        let myFile = await fs.promises.readFile(`blogdata/${item}`, 'utf-8');
        allBlogs.push(JSON.parse(myFile));
    }
    return {
        props: { allBlogs, allCont },
    };
}


export default Blog
