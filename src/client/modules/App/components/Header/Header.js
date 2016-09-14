import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// Import Style
import styles from './Header.css'

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/" >MERN Startup Project</Link>
        </h1>
        {
          props.isActive
            ? <a className={styles['add-post-button']} href="#" role="button" onClick={props.toggleAddPost}>Adicionar Post</a>
            : null
        }
      </div>
    </div>
  )
}

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default Header
