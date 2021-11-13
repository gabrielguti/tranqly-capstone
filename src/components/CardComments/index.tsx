import { FaStar, FaUserAlt } from "react-icons/fa";
import { CardComentStyle } from "./styles";
interface CommentsProps {
  comments: any;
}
export default function CardComments({ comments }: CommentsProps) {
  const star = comments.score;
  return (
    <CardComentStyle>
      <div className="data">
        <FaUserAlt />
        {comments.namePatient}
      </div>
      <div className="coment">{comments.comment}</div>
      <div className="stars">
        {[...Array(star)].map(() => {
          return <FaStar />;
        })}
      </div>
    </CardComentStyle>
  );
}
