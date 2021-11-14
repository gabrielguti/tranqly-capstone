import { FaStar, FaUserAlt } from "react-icons/fa";
import { CardCommentStyle } from "./styles";
interface CommentsProps {
  comments: any;
}
export default function CardComments({ comments }: CommentsProps) {
  const star = comments.score;
  return (
    <CardCommentStyle>
      <div className="data">
        <FaUserAlt />
        {comments.namePatient}
      </div>
      <div className="comment">{comments.comment}</div>
      <div className="stars">
        {[...Array(star)].map(() => (
          <FaStar />
        ))}
      </div>
    </CardCommentStyle>
  );
}
