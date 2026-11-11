import styles from './Header.module.css'
import Nav from '../Nav/Nav'

function Header({ articleCount }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>
            React Blog
          </h1>

          <p className={styles.counter}>
            Статей: {articleCount}
          </p>
        </div>

        <Nav />
      </div>
    </header>
  )
}

export default Header