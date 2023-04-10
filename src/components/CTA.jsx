import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow flex-col rounded-[20px] sm:flex-row`}
  >
    <div className="flex flex-1 flex-col">
      <h1 className={styles.heading2}>Let's try our service now!</h1>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} ml-0 mt-10 sm:ml-10 sm:mt-0`}>
      <Button />
    </div>
  </section>
);

export default CTA;
