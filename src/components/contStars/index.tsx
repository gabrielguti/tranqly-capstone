import { FiStar } from "react-icons/fi"
import { Star } from "./styles";

interface StarsCountData {
  stars?: number;
}

const StarsCount = ({ stars }: StarsCountData) => {
  return (
    <div>
      {stars === 0 ? (
        <div>
            <FiStar/>
            <FiStar/>
            <FiStar/>
            <FiStar/>
            <FiStar/>
        </div>
      ) : stars === 1 ? (
        <div>
            <Star />
            <FiStar/>
            <FiStar/>
            <FiStar/>
            <FiStar/>
        </div>
      ) : stars === 2 ? (
        <div>
            <Star />
            <Star />
            <FiStar/>
            <FiStar/>
            <FiStar/>
        </div>
      ) : stars === 3 ? (
        <div>
            <Star />
            <Star />
            <Star />
            <FiStar/>
            <FiStar/>
        </div>
      ) : stars === 4 ? (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <FiStar/>
        </div>
      ) : stars === 5 ? (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
      ) : null}
    </div>
  );
};

export default StarsCount;