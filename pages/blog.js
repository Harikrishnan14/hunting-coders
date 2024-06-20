import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
    return (
        <div className={styles.container}>

            <main className={styles.main}>

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
                </div>

                <div className={styles.blogItem}>
                    <Link href='/blogpost/learn-javascript'>
                        <h3>NextJs From Scratch</h3>
                    </Link>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut error ratione voluptatum vero quasi odio!</p>
                </div>

            </main>

        </div>
    )
}

export default Blog
