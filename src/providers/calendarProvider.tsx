import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
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
  addMyCalendar: (
    data: any,
    professionalId: number,
    token: string,
    userId: number
  ) => void;
  check: (
    id: number,
    token: string,
    professionalId: number,
    userId: number
  ) => void;
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
    console.log(newData);
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
  };

  const addMyCalendar = (
    data: any,
    professionalId: any,
    token: string,
    userId: number
  ) => {
    console.log(token);
    const newTime = { ...data, cancel: false };
    api
      .post(`/patient`, newTime, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        searchDate(professionalId, token);
        console.log(response.data);
      })
      .catch((e) => console.log(e));
  };

  const check = (
    id: number,
    token: string,
    professionalId: any,
    userId: number
  ) => {
    console.log(token);
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
      .then((response) => {
        addMyCalendar(response.data, professionalId, token, userId);
        console.log(response.data);
      })
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
