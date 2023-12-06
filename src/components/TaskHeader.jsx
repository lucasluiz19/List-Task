import styles from "./TaskHeader.module.css";


export function TaskHeader({contTask}){
    return(
        <div className={styles.contentTasks}>
            <div className={styles.taskCount}>
                <span>
                    <p className={styles.createdTasks}>Tarefas criadas</p>
                    <p className={styles.taskCountInfo}>{contTask}</p>
                </span>
                <span>
                    <p className={styles.completedTasks}>Concluídas</p>
                    <p className={styles.taskCountInfo}>{`${0} de ${contTask}`}</p>
                </span>
            </div>
            <div className={styles.taskInformation}>

            </div>
        </div>
    )
}