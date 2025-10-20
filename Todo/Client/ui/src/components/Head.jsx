
import styles from './style/head.module.css';
function Head({name}){
    return(
        <>
        <p className={styles.head}>{name}</p>
        </>
    )
}

export {Head};