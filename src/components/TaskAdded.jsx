import styles from "./TaskAdded.module.css"

export function TaskAdded({content}){
    return(
        <div className={styles.contentTask}>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.96428 1.85955C10.3765 1.85955 11.7571 2.27834 12.9313 3.06294C14.1056 3.84755 15.0208 4.96275 15.5612 6.2675C16.1017 7.57225 16.2431 9.00797 15.9676 10.3931C15.6921 11.7782 15.012 13.0505 14.0134 14.0491C13.0148 15.0478 11.7424 15.7278 10.3573 16.0033C8.9722 16.2789 7.53648 16.1375 6.23173 15.597C4.92697 15.0566 3.81178 14.1413 3.02717 12.9671C2.24257 11.7928 1.82378 10.4123 1.82378 9.00005C1.8311 7.10852 2.58574 5.29656 3.92326 3.95904C5.26079 2.62152 7.07275 1.86687 8.96428 1.85955ZM8.96428 0.272778C7.23972 0.279833 5.55592 0.797669 4.12543 1.76091C2.69494 2.72416 1.58191 4.08962 0.926831 5.68493C0.271755 7.28024 0.104012 9.03387 0.444777 10.7244C0.785541 12.415 1.61954 13.9667 2.84148 15.1837C4.06342 16.4006 5.61852 17.2283 7.31046 17.5621C9.00241 17.896 10.7553 17.7211 12.348 17.0595C13.9406 16.3979 15.3015 15.2793 16.2589 13.8449C17.2163 12.4105 17.7272 10.7246 17.7273 9.00005C17.7273 7.85096 17.5003 6.71318 17.0595 5.652C16.6187 4.59083 15.9727 3.62715 15.1585 2.81628C14.3443 2.00541 13.378 1.36331 12.315 0.926827C11.2521 0.490346 10.1134 0.268077 8.96428 0.272778Z" fill="#4EA8DE"/>
                </svg>
            </button>
            <p>{content}</p>
            <button>
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2021 9.98547H12.8716V15.5073H14.2021V9.98547Z" fill="#808080"/>
                    <path d="M11.4624 9.98547H10.1318V15.5073H11.4624V9.98547Z" fill="#808080"/>
                    <path d="M18.478 7.16712C18.4754 7.03061 18.4295 6.89846 18.3469 6.78975C18.2642 6.68104 18.1492 6.6014 18.0184 6.56232C17.9596 6.53782 17.8974 6.52252 17.8339 6.51696H14.2868C14.1525 6.07791 13.8808 5.69355 13.5117 5.42047C13.1426 5.14739 12.6956 5 12.2365 5C11.7774 5 11.3304 5.14739 10.9613 5.42047C10.5922 5.69355 10.3205 6.07791 10.1862 6.51696H6.63911C6.58068 6.51814 6.52269 6.52729 6.46674 6.54418H6.45162C6.31318 6.58701 6.19334 6.67547 6.11163 6.79515C6.02992 6.91483 5.99117 7.05866 6.00169 7.20319C6.01222 7.34771 6.0714 7.48441 6.16958 7.59099C6.26776 7.69757 6.39916 7.76774 6.54234 7.79006L7.25298 17.5334C7.26382 17.9127 7.41693 18.2741 7.68191 18.5458C7.94688 18.8175 8.30435 18.9797 8.68332 19H15.7867C16.1662 18.9804 16.5244 18.8186 16.79 18.5468C17.0556 18.2751 17.2092 17.9132 17.22 17.5334L17.9277 7.79914C18.0802 7.77797 18.22 7.70232 18.3212 7.58615C18.4223 7.46999 18.478 7.32116 18.478 7.16712ZM12.2365 6.21456C12.3661 6.21458 12.4943 6.24146 12.6129 6.29351C12.7316 6.34556 12.8382 6.42164 12.926 6.51696H11.547C11.6346 6.42135 11.7411 6.34507 11.8599 6.29299C11.9786 6.24092 12.1069 6.21421 12.2365 6.21456ZM15.7867 17.7904H8.68332C8.60168 17.7904 8.47467 17.6573 8.45955 17.4457L7.75798 7.81123H16.715L16.0135 17.4457C15.9984 17.6573 15.8714 17.7904 15.7867 17.7904Z" fill="#808080"/>
                </svg>
            </button>
        </div>
    )
}