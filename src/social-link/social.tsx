import image from "../assets/avatar-jessica.jpeg";
import styles from "./social.module.css";
interface Props {
  names: String[];
}
function Social({ names }: Props) {
  return (
    <>
      <div className={styles.container}>
        <span>
          <img
            className={styles.profileContainer}
            src={image}
            alt="jessica-avatar"
          />
        </span>
        <div className={styles.textContainer}>
          <h1 className={styles.nameText}>Jessica Randall</h1>
          <h5 className={styles.locationText}>London, United Kingdom</h5>
          <p>"Front-end developer and avid reader."</p>
        </div>
        <div className={styles.buttonContainer}>
          {names.map((name) => (
            <button className={styles.button}>{name}</button>
          ))}
        </div>
      </div>
    </>
  );
}
export default Social;
