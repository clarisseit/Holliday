import styles from "./card.module.css"
  
export const StartsCard = (props) => {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <div>
            <img
              className={styles.cardimg}
              src="https://carasaven.com/wp-content/uploads/2022/02/Cara-Saven-Zebra-Crossing-BW-Wallpaper.jpg"
              width={100}
            />
          </div>
          <div className={styles.right}>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.text}>{props.text}</p>
          </div>
          
        </div>
      </div>
    );
    
      
    
}