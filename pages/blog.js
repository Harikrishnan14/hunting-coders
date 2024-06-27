import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json()
        }).then((parsed) => {
            setBlogs(parsed)
        })
    }, [])

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

                {/* <div className={styles.blogItem}>
                    <Link href='/blogpost/learn-javascript'>
                        <h3>NextJs From Scratch</h3>
                    </Link>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut error ratione voluptatum vero quasi odio!</p>
                </div>

                <div className={styles.blogItem}>
                    <Link href='/blogpost/learn-javascript'>
                        <h3>NextJs From Scratch</h3>
                    </Link>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut error ratione voluptatum vero quasi odio!</p>
                </div>

                <div className={styles.blogItem}>
                    <Link href='/blogpost/learn-javascript'>
                        <h3>NextJs From Scratch</h3>
                    </Link>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut error ratione voluptatum vero quasi odio!</p>
                </div> */}

            </main >

        </div >
    )
}

export default Blog
