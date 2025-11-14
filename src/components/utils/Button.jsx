import styles from '../../styles/button.module.css'

export default function Button(props) {
    return (
        <a href={props.href} className={styles.button}>{props.children}</a>
    )
}