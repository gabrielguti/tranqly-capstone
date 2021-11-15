import { FaStar, FaUserAlt } from "react-icons/fa";
import StarsCount from "../contStars";
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
      <StarsCount stars={star} />
    </CardCommentStyle>
  );
}
