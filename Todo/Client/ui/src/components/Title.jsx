import styles from './style/title.module.css';

function Title({title}){
    return(
        <>
        <p className={styles.title}>{title}</p>
        </>
    )
}

export {Title};