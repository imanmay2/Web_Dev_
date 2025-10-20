import styles from './style/heading.module.css';
function Heading({name}){
    return(
        <>
        <p className={styles.heading}>{name}</p>
        </>
    )
}

export {Heading};