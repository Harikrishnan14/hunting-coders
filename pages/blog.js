import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'

const Blog = (props) => {

    const [blogs, setBlogs] = useState(props.allBlogs)

    return (
        <div className={styles.container}>

            <main className={styles.main}>
                {blogs.map((item, id) => (
                    <div className={styles.blogItem} key={id}>
                        <Link href={`/blogpost/${item.slug}`}>
                            <h3 className={styles.blogItemh3}>{item.title}</h3>
                        </Link>
                        <p className={styles.blogItemP}>{item.content.substr(0, 250)}...</p>
                    </div>
                ))}
            </main >

        </div >
    )
}

export async function getStaticProps(context) {
    let data = await fs.promises.readdir('blogdata/');
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        let myFile = await fs.promises.readFile(`blogdata/${item}`, 'utf-8');
        allBlogs.push(JSON.parse(myFile));
    }
    return {
        props: { allBlogs },
    };
}


export default Blog
