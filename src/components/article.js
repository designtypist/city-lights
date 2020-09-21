import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article.module.css'

export default ({ title, image, description, position }) => (
  <article>
    <div className={styles.articleHero}>
      <div className={styles.articleTitleBackground}>
        <h3 className={styles.articleTitle}>{title}</h3>
      </div>
      <img src={image} alt="" />
    </div>
    <div className={styles.articleDescBackground}>
      <p className={styles.articleDesc}>{description}</p>
    </div>
  </article>
)
