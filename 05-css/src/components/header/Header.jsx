import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header}>
        <h3 className={styles.logo}>Guru</h3>
        <button>Login</button>
    </div>
  )
}

export default Header
