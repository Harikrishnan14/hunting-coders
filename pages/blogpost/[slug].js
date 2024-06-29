import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/BlogPost.module.css'

const Slug = (props) => {

    const [blog, setBlog] = useState(props.Blog)

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

export async function getServerSideProps(context) {

    const { slug } = context.query

    let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
    let Blog = await data.json()

    return {
        props: { Blog },
    }
}


export default Slug
