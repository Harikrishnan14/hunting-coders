import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Introduction</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi molestias mollitia sed ducimus obcaecati facilis! Minus dignissimos labore in suscipit perspiciatis voluptates eum quam architecto expedita? Consequuntur fugit perspiciatis, ex numquam dolores laboriosam optio modi esse expedita debitis est possimus nemo, recusandae vel repellendus? Adipisci.</p>
            <h2 className={styles.heading}>Services Offered</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, neque libero? Fugiat sint possimus quidem odio totam, quo vitae architecto natus commodi eos aliquid, a perferendis sequi dolore ab. Rem, rerum officiis. Tempora, necessitatibus. Ducimus provident necessitatibus, velit facere eveniet reiciendis recusandae atque quia distinctio.</p>
            <p>We offer the following services</p>
            <ul className={styles.list}>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
            </ul>
            <h2 className={styles.heading}>Contact Us</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sint nemo eum natus illo. Minima labore cumque nobis, ea consequatur consectetur ipsum odit ratione ex fugit odio quae corrupti a laborum atque nostrum laudantium eum ad beatae. Architecto soluta repudiandae, magni laudantium quam commodi eaque.</p>
        </div>
    )
}

export default About
