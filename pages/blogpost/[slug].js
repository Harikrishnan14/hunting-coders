import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs'

const Slug = (props) => {

    const [blog, setBlog] = useState(props.blog)

    function createMarkup(content) {
        return { __html: content }
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.Blogh1}>{blog && blog.title}</h1>
                <hr />
                {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
            </main >
        </div >
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-node' } },
            { params: { slug: 'how-to-learn-react' } },
        ],
        fallback: true,
    };
}

export async function getStaticProps(context) {

    const { slug } = context.params

    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    return {
        props: { blog: JSON.parse(myBlog) },
    }
}


export default Slug
