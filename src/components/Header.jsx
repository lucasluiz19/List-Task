import styles from "./Header.module.css"

export function Header(){
    return(
        <header className={styles.header}> 
            <div className={styles.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="36" viewBox="0 0 22 36" fill="none">
                    <g clip-path="url(#clip0_4130_482)">
                    <path d="M11.0214 2.93302C14.1471 6.9011 15.8156 11.7944 15.7551 16.8155V18.0141L16.7864 18.6416C18.1188 19.4482 19.1126 20.6993 19.5865 22.1669C19.1704 21.8605 18.7351 21.5803 18.2831 21.3278L15.5331 19.7838L15.039 22.9001C14.9962 23.1755 14.9388 23.4485 14.8671 23.718H7.16138C7.0468 23.3655 6.9537 23.0129 6.86776 22.6463L6.24472 19.8261L3.70956 21.2362C3.28603 21.473 2.87711 21.7344 2.48495 22.0188C2.96812 20.5682 3.94111 19.3242 5.24211 18.4935L6.22323 17.866V16.7521C6.24093 11.7513 7.92955 6.89523 11.0286 2.93302H11.0214ZM11.0286 0C10.8679 0.000390307 10.7127 0.0579856 10.5917 0.162162L10.5273 0.218566C6.39766 4.76564 4.10454 10.6454 4.08196 16.745C2.32955 17.8643 1.03238 19.5543 0.417141 21.5197C-0.198101 23.485 -0.0922939 25.6007 0.716072 27.4971C1.56764 25.6455 2.99119 24.1058 4.78378 23.0975C4.96356 23.8642 5.20298 24.6161 5.49993 25.3467C5.53759 25.4871 5.62106 25.6114 5.73751 25.7006C5.85396 25.7898 5.99694 25.8388 6.14446 25.8402H16.0846C16.2851 25.8402 16.4856 25.6498 16.5859 25.3537C16.8757 24.6592 17.0777 23.9322 17.1874 23.1892C18.9834 24.1932 20.4082 25.7342 21.2551 27.5887C22.1123 25.7017 22.245 23.5727 21.6286 21.5967C21.0123 19.6206 19.6887 17.9319 17.9036 16.8437C17.9744 10.7082 15.6934 4.77179 11.5156 0.218566C11.4533 0.150085 11.3772 0.0952397 11.2921 0.0575871C11.2069 0.0199344 11.1147 0.000314749 11.0214 0L11.0286 0Z" fill="#4EA8DE"/>
                    <path d="M11.0213 16.1598C10.4713 16.1598 9.93351 15.9995 9.47587 15.699C9.01822 15.3986 8.66116 14.9715 8.44969 14.4716C8.23822 13.9716 8.18181 13.4213 8.28758 12.8898C8.39334 12.3584 8.65653 11.8697 9.04399 11.4853C9.43144 11.1009 9.92582 10.838 10.4648 10.7298C11.0038 10.6216 11.5632 10.6729 12.0726 10.8773C12.582 11.0816 13.0186 11.4298 13.3272 11.8781C13.6359 12.3263 13.8029 12.8545 13.8071 13.396C13.8157 13.7469 13.7539 14.0961 13.6254 14.4235C13.4969 14.751 13.304 15.0503 13.058 15.3043C12.8119 15.5583 12.5174 15.7622 12.1913 15.9041C11.8652 16.0461 11.5139 16.1234 11.1574 16.1316C11.1123 16.1387 11.0664 16.1387 11.0213 16.1316V16.1598Z" fill="#4EA8DE"/>
                    <path d="M14.8957 27.5958C14.7165 27.5901 14.538 27.6198 14.3706 27.683C14.2032 27.7462 14.0503 27.8416 13.9209 27.9638C13.7915 28.086 13.6881 28.2323 13.6169 28.3943C13.5458 28.5563 13.5082 28.7307 13.5063 28.9072V33.067C13.5063 33.4297 13.6527 33.7776 13.9133 34.0342C14.1738 34.2907 14.5272 34.4348 14.8957 34.4348C15.2641 34.4348 15.6175 34.2907 15.8781 34.0342C16.1386 33.7776 16.285 33.4297 16.285 33.067V28.9636C16.2907 28.7877 16.2608 28.6126 16.1971 28.4482C16.1333 28.2839 16.037 28.1337 15.9137 28.0064C15.7904 27.879 15.6425 27.7772 15.4788 27.7067C15.3151 27.6362 15.1388 27.5985 14.9601 27.5958H14.8957Z" fill="#5E60CE"/>
                    <path d="M7.1613 27.5957C6.97906 27.5863 6.79675 27.6129 6.62521 27.6742C6.45367 27.7355 6.29641 27.8302 6.16278 27.9525C6.02915 28.0749 5.92188 28.2224 5.84736 28.3864C5.77284 28.5504 5.73259 28.7275 5.729 28.9071V33.067C5.729 33.4297 5.87538 33.7776 6.13593 34.0341C6.39648 34.2906 6.74986 34.4348 7.11833 34.4348C7.4868 34.4348 7.84018 34.2906 8.10073 34.0341C8.36128 33.7776 8.50765 33.4297 8.50765 33.067V28.9635C8.51337 28.7877 8.48349 28.6125 8.41974 28.4482C8.35599 28.2838 8.25965 28.1336 8.13634 28.0063C8.01302 27.879 7.8652 27.7771 7.70149 27.7067C7.53777 27.6362 7.36144 27.5985 7.18278 27.5957H7.1613Z" fill="#5E60CE"/>
                    <path d="M10.9211 27.5958C10.7424 27.592 10.5647 27.623 10.3981 27.6869C10.2316 27.7507 10.0795 27.8463 9.95044 27.9681C9.82142 28.0899 9.71804 28.2355 9.6462 28.3966C9.57435 28.5577 9.53546 28.7312 9.53174 28.9072V34.6392C9.53174 35.002 9.67811 35.3499 9.93866 35.6064C10.1992 35.8629 10.5526 36.007 10.9211 36.007C11.2895 36.007 11.6429 35.8629 11.9035 35.6064C12.164 35.3499 12.3104 35.002 12.3104 34.6392V28.9988C12.3161 28.823 12.2862 28.6478 12.2225 28.4835C12.1587 28.3191 12.0624 28.1689 11.9391 28.0416C11.8158 27.9143 11.6679 27.8124 11.5042 27.7419C11.3405 27.6714 11.1642 27.6337 10.9855 27.631L10.9211 27.5958Z" fill="#5E60CE"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4130_482">
                    <rect width="22" height="36" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <svg width="91" height="31" viewBox="0 0 91 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8.18182V13.8636H0.625V8.18182H15ZM3.40909 2.95455H11.25V22.983C11.25 23.286 11.3021 23.5417 11.4062 23.75C11.5104 23.9489 11.6714 24.1004 11.8892 24.2045C12.107 24.2992 12.3864 24.3466 12.7273 24.3466C12.964 24.3466 13.2386 24.3182 13.5511 24.2614C13.8731 24.2045 14.1098 24.1572 14.2614 24.1193L15.3977 29.6307C15.0473 29.7348 14.5455 29.8627 13.892 30.0142C13.2481 30.1657 12.4811 30.2652 11.5909 30.3125C9.79167 30.4072 8.28125 30.2225 7.05966 29.7585C5.83807 29.285 4.91951 28.5417 4.30398 27.5284C3.68845 26.5152 3.39015 25.2462 3.40909 23.7216V2.95455ZM28.4766 30.3977C26.1091 30.3977 24.0826 29.929 22.397 28.9915C20.7114 28.0445 19.4188 26.7282 18.5192 25.0426C17.6196 23.3475 17.1697 21.3826 17.1697 19.1477C17.1697 16.9129 17.6196 14.9527 18.5192 13.267C19.4188 11.572 20.7114 10.2557 22.397 9.31818C24.0826 8.37121 26.1091 7.89773 28.4766 7.89773C30.844 7.89773 32.8705 8.37121 34.5561 9.31818C36.2417 10.2557 37.5343 11.572 38.4339 13.267C39.3336 14.9527 39.7834 16.9129 39.7834 19.1477C39.7834 21.3826 39.3336 23.3475 38.4339 25.0426C37.5343 26.7282 36.2417 28.0445 34.5561 28.9915C32.8705 29.929 30.844 30.3977 28.4766 30.3977ZM28.5334 24.6023C29.1963 24.6023 29.7692 24.3797 30.2521 23.9347C30.7351 23.4896 31.1091 22.8551 31.3743 22.0312C31.6394 21.2074 31.772 20.2273 31.772 19.0909C31.772 17.9451 31.6394 16.965 31.3743 16.1506C31.1091 15.3267 30.7351 14.6922 30.2521 14.2472C29.7692 13.8021 29.1963 13.5795 28.5334 13.5795C27.8326 13.5795 27.2313 13.8021 26.7294 14.2472C26.2275 14.6922 25.844 15.3267 25.5788 16.1506C25.3137 16.965 25.1811 17.9451 25.1811 19.0909C25.1811 20.2273 25.3137 21.2074 25.5788 22.0312C25.844 22.8551 26.2275 23.4896 26.7294 23.9347C27.2313 24.3797 27.8326 24.6023 28.5334 24.6023Z" fill="#4EA8DE"/>
                    <path d="M50.8629 30.2841C49.3099 30.2841 47.88 29.8769 46.5732 29.0625C45.2758 28.2481 44.2341 27.0123 43.4482 25.3551C42.6716 23.6979 42.2834 21.6098 42.2834 19.0909C42.2834 16.4583 42.6906 14.3182 43.505 12.6705C44.3288 11.0227 45.3894 9.81534 46.6868 9.0483C47.9936 8.28125 49.3667 7.89773 50.8061 7.89773C51.8857 7.89773 52.8326 8.08712 53.647 8.46591C54.4614 8.83523 55.1432 9.33239 55.6925 9.95739C56.2417 10.5729 56.6584 11.25 56.9425 11.9886H57.0561V0.90909H64.897V30H57.1129V26.4205H56.9425C56.6394 27.1591 56.2038 27.822 55.6357 28.4091C55.0769 28.9867 54.3951 29.446 53.5902 29.7869C52.7947 30.1184 51.8857 30.2841 50.8629 30.2841ZM53.7607 24.2614C54.4804 24.2614 55.0959 24.053 55.6072 23.6364C56.1281 23.2102 56.5258 22.6136 56.8004 21.8466C57.0845 21.0701 57.2266 20.1515 57.2266 19.0909C57.2266 18.0114 57.0845 17.0881 56.8004 16.321C56.5258 15.5445 56.1281 14.9527 55.6072 14.5455C55.0959 14.1288 54.4804 13.9205 53.7607 13.9205C53.041 13.9205 52.4254 14.1288 51.9141 14.5455C51.4122 14.9527 51.0239 15.5445 50.7493 16.321C50.4841 17.0881 50.3516 18.0114 50.3516 19.0909C50.3516 20.1705 50.4841 21.0985 50.7493 21.875C51.0239 22.642 51.4122 23.2339 51.9141 23.6506C52.4254 24.0578 53.041 24.2614 53.7607 24.2614ZM79.2578 30.3977C76.8904 30.3977 74.8639 29.929 73.1783 28.9915C71.4927 28.0445 70.2 26.7282 69.3004 25.0426C68.4008 23.3475 67.951 21.3826 67.951 19.1477C67.951 16.9129 68.4008 14.9527 69.3004 13.267C70.2 11.572 71.4927 10.2557 73.1783 9.31818C74.8639 8.37121 76.8904 7.89773 79.2578 7.89773C81.6252 7.89773 83.6518 8.37121 85.3374 9.31818C87.023 10.2557 88.3156 11.572 89.2152 13.267C90.1148 14.9527 90.5646 16.9129 90.5646 19.1477C90.5646 21.3826 90.1148 23.3475 89.2152 25.0426C88.3156 26.7282 87.023 28.0445 85.3374 28.9915C83.6518 29.929 81.6252 30.3977 79.2578 30.3977ZM79.3146 24.6023C79.9775 24.6023 80.5504 24.3797 81.0334 23.9347C81.5163 23.4896 81.8904 22.8551 82.1555 22.0312C82.4207 21.2074 82.5533 20.2273 82.5533 19.0909C82.5533 17.9451 82.4207 16.965 82.1555 16.1506C81.8904 15.3267 81.5163 14.6922 81.0334 14.2472C80.5504 13.8021 79.9775 13.5795 79.3146 13.5795C78.6139 13.5795 78.0125 13.8021 77.5107 14.2472C77.0088 14.6922 76.6252 15.3267 76.3601 16.1506C76.0949 16.965 75.9624 17.9451 75.9624 19.0909C75.9624 20.2273 76.0949 21.2074 76.3601 22.0312C76.6252 22.8551 77.0088 23.4896 77.5107 23.9347C78.0125 24.3797 78.6139 24.6023 79.3146 24.6023Z" fill="#5E60CE"/>
                </svg>
            </div>
        </header>
    )
}