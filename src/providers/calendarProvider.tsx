import moment from "moment";
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
  newComment: string;
  newScore: number;
  id: number;
  token: string;
}
interface CommentsProps {
  namePatient: string;
  comment: string;
  id: number;
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
    id,
    token,
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
  const now = moment();
  let ref: string[] = [];

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

  const searchComments = (id: number, token: string) => {
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
    id,
    token,
  }: CreateCommentsProps) => {
    const newData = {
      comment: newComment,
      score: newScore,
    };
    if (newComment.length > 10 && newComment.length < 200) {
      api
        .post(`/professional/${id}/comments`, newData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => {
          searchComments(id, token);
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

  //   useEffect(() => {
  //     searchDate();
  //     searchComments();
  //   }, []);

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
