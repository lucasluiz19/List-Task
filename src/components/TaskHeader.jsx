import styles from "./TaskHeader.module.css";


export function TaskHeader(){
    return(
        <div className={styles.contentTasks}>
            <div className={styles.taskCount}>
                <span>
                    <p className={styles.createdTasks}>Tarefas criadas</p>
                    <p className={styles.taskCountInfo}> 5</p>
                </span>
                <span>
                    <p className={styles.completedTasks}>Concluídas</p>
                    <p className={styles.taskCountInfo}>2 de 5</p>
                </span>
            </div>
            <div className={styles.taskInformation}>

            </div>
        </div>
    )
}