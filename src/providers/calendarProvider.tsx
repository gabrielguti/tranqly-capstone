import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";

interface CalendarProps {
  children: ReactNode;
}
interface DataProps {
  userId: number;
  type: boolean;
  date: any;
  id: number;
  calendar: any;
}
interface CreateCommentsProps {
  newComment: any;
  newScore: number;
  user: any;
  accessToken: string;
}
interface CommentsProps {
  namePatient: string;
  comment: string;
  id: any;
  patientId: number;
  professionalId: number;
}

interface CalendarData {
  calendar: DataProps[];
  comments: CommentsProps[];
  newComment: string;
  newScore: number;
  searchDate: (id: number, token: string) => void;
  searchComments: (id: number, token: string) => void;
  createComment: ({
    newComment,
    newScore,
    user,
    accessToken,
  }: CreateCommentsProps) => void;
  addMyCalendar: (data: any, id: number, token: string) => void;
  check: (id: number, token: string) => void;
}

const CalendarContext = createContext<CalendarData>({} as CalendarData);

export const CalendarProvider = ({ children }: CalendarProps) => {
  const [calendar, setCalendar] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newScore, setNewScore] = useState(5);
  const [show, setShow] = useState<boolean>(false);

  const searchDate = (id: number, token: string) => {
    api
      .get(`/users/${id}/professional`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setCalendar(response.data))
      .catch((e) => console.log(e));
  };

  const searchComments = (id: any, token: string) => {
    api
      .get(`/professional/${id}/comments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setComments(response.data))
      .catch((e) => console.log(e));
  };

  const createComment = ({
    newComment,
    newScore,
    user,
    accessToken,
  }: CreateCommentsProps) => {
    const newData = {
      comment: newComment,
      score: newScore,
    };
    if (newComment.length > 10 && newComment.length < 200) {
      api
        .post(`/professional/${user}/comments`, newData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => {
          searchComments(user, accessToken);
          setShow(!show);
        })
        .catch((e) => console.log(e));
    }
    // alert("");
  };

  const addMyCalendar = (data: any, id: number, token: string) => {
    const newTime = { ...data, patientId: id };
    api
      .post(`/patient`, newTime, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => searchDate(id, token))
      .catch((e) => console.log(e));
  };

  const check = (id: number, token: string) => {
    api
      .patch(
        `/professional/${id}`,
        { type: false },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => addMyCalendar(response.data, id, token))
      .then((_) => searchDate(id, token))
      .catch((e) => console.log(e));
  };

  return (
    <CalendarContext.Provider
      value={{
        searchDate,
        searchComments,
        createComment,
        addMyCalendar,
        check,
        calendar,
        comments,
        newComment,
        newScore,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);
