import styles from "./button.module.css";

export const Button = (props) => {
  return (
    <>
      <button className={styles.container}>{props.title}</button>
    </>
  );
};
