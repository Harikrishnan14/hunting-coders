import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/BlogPost.module.css'

const Slug = () => {

    const router = useRouter()

    const [blog, setBlog] = useState()

    useEffect(() => {
        if (!router.isReady) return;

        const { slug } = router.query
        fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a) => {
            return a.json()
        }).then((parsed) => {
            setBlog(parsed)
        })
    }, [router.isReady])


    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.Blogh1}>{blog && blog.title}</h1>
                <hr />
                <div>
                    {blog && blog.content}
                </div>

            </main>
        </div>
    )
}

export default Slug
