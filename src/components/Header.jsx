import styles from './Header.module.css'
import IgniteLogo from '../assets/Ignite-logo.svg'
import IgniteFeed from '../assets/Heading.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={IgniteLogo} alt="Logotipo do Ignite"/>
            <img src={IgniteFeed} alt="Ignite Feed"/>
        </header>
    )
}