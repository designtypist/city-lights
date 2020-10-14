import React from 'react'
import { Link } from 'gatsby'

import styles from './quote.module.css'

export default ({ quote }) => (
    <div className={styles.quote}>
        <h3 className={styles.quoteText}>{'"' + quote.text + '"'}</h3>
        { quote.link && quote.button && <Link className={styles.quoteButton} to={quote.link}>{ quote.button }</Link> }
    </div>
)
