import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article.module.css'

export default ({ data, position }) => (
  <article>
    <div className={styles.articleHero}>
      <div className={styles.articleTitleBackground}>
        <h3 className={styles.articleTitle}>{data.title}</h3>
      </div>
      <img src={data.image.file.url} alt="" />
    </div>
    <div className={styles.articleDescBackground}>
      <p className={styles.articleDesc}>{data.description.description}</p>
    </div>
  </article>
)
