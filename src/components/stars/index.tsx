import { FaStar } from "react-icons/fa";

interface StarsCountData {
  stars?: number;
}

const StarsCount = ({ stars }: StarsCountData) => {
  return (
    <div>
      {stars === 0 ? (
        <div></div>
      ) : stars === 1 ? (
        <div>
          <FaStar />
        </div>
      ) : stars === 2 ? (
        <div>
          <FaStar />
          <FaStar />
        </div>
      ) : stars === 3 ? (
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      ) : stars === 4 ? (
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      ) : stars === 5 ? (
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      ) : null}
    </div>
  );
};

export default StarsCount;