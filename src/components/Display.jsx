import styles from './Display.module.css';



function Display({displayValue}){
    return(
            
            <input  className={styles.inputBox} type="text" value={displayValue} readOnly />
        
    )
}

export default Display;