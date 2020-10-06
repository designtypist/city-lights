import React from 'react'

import styles from './article.module.css'

class Article extends React.Component {
  render() {
    const title = this.props.data.title
    const imageUrl = this.props.data.image.file.url
    const description = this.props.data.description.description
    const position = this.props.position
    const positionHeroSection = position === 'left' ? styles.leftArticleHeroSection : styles.rightArticleHeroSection
    const positionDescSection = position === 'left' ? styles.leftArticleDescSection : styles.rightArticleDescSection
    const positionDescSectionText = position === 'left' ? styles.leftArticleDescText : styles.rightArticleDescText
 
    return (
      <div className={styles.articleSection}>
        <div className={styles.articleHeroSection + ' ' + positionHeroSection}>
          <h3 className={styles.articleHeroTitle}>{title}</h3>
          <img className={styles.articleHeroImage} src={imageUrl} alt="" />
        </div>
        <div className={styles.articleDescSection + ' ' + positionDescSection} >
          <p className={styles.articleDescText + ' ' + positionDescSectionText}>
            {description}
          </p>
        </div>
      </div>
    )
  }
}

export default Article