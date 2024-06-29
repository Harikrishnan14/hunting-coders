import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

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

export async function getServerSideProps(context) {
    let data = await fetch('http://localhost:3000/api/blogs')
    let allBlogs = await data.json()
    return {
        props: { allBlogs },
    }
}


export default Blog
