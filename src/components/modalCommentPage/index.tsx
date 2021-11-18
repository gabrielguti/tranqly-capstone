import React, { useState } from "react";
import { ModalCommentStyle } from "./styles";
import { FaTimes } from "react-icons/fa";
import Button from "../button";
import { UseAuth } from "../../providers/authProvider";
import { useCalendar } from "../../providers/calendarProvider";
import { StarRating } from "../starRating";

export default function ModalCommentPage() {
  const { createCommentPage } = useCalendar();
  const [newComment, setNewComment] = useState("");
  const [newScore, setNewScore] = useState(0);
  const { accessToken, user } = UseAuth();
  const { show, setShow } = useCalendar();

  return (
    <ModalCommentStyle>
      <div>
        <FaTimes onClick={() => setShow(!show)} />
        <textarea
          placeholder="Seu comentário..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <StarRating setNewScore={setNewScore} />
        <Button
          onClick={() =>
            createCommentPage(
              newComment,
              newScore,
              Number(user.id),
              accessToken,
              user.name
            )
          }
        >
          Comentar
        </Button>
      </div>
    </ModalCommentStyle>
  );
}
