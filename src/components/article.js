import React from 'react'

import styles from './article.module.css'

export default ({ data, position }) => (
  <div className={styles.divOuter}>
    <div class={styles.div1}>
      <div className={styles.articleHero}>
        <div className={styles.articleTitleBackground}>
          <h3 className={styles.articleTitle}>{data.title}</h3>
        </div>
        <img className={styles.articleImage} src={data.image.file.url} alt="" />
      </div>
    </div>
    <div class={styles.div2}>
      <div className={styles.articleDescBackground}>
        <p className={styles.articleDesc}>{data.description.description}</p>
      </div>
    </div>
  </div>
)