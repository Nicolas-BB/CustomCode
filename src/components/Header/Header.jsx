import styles from '../../styles/header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.ul}>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Clientes</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}