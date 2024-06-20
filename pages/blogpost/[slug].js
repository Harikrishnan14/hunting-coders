import { useRouter } from 'next/router'
import React from 'react'
import styles from '../../styles/BlogPost.module.css'

const Slug = () => {

    const router = useRouter()
    const { slug } = router.query

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Title of the page {slug}</h1>
                <hr />
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, aliquid tempore nobis temporibus id voluptatibus cumque laborum dolorem officiis? Architecto hic cupiditate libero quas deleniti.
                </div>

            </main>
        </div>
    )
}

export default Slug
