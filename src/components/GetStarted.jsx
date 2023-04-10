import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} bg-blue-gradient h-[140px] w-[140px] cursor-pointer rounded-full p-[2px]`}
  >
    <div
      className={`${styles.flexCenter} h-[100%] w-[100%] flex-col rounded-full bg-primary`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="mr-2 font-poppins text-[18px] font-medium leading-[23px]">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="h-[23px] w-[23px] object-contain"
        />
      </div>

      <p className="font-poppins text-[18px] font-medium leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
