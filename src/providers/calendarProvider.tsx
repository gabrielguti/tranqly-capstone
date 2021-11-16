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
  createComment: (
    newComment: string,
    newScore: number,
    user: number,
    accessToken: string,
    name: string
  ) => void;
  addMyCalendar: (
    data: any,
    professionalId: number,
    token: string,
    // userId: number,
    areas: string,
    name: string
  ) => void;
  check: (
    id: number,
    token: string,
    professionalId: number,
    // userId: number,
    areas: string,
    name: string
  ) => void;
  show: boolean;
  setShow: any;
  createCommentPage: (
    newComment: string,
    newScore: number,
    id: number,
    accessToken: string,
    name: string
  ) => void;
  getCommentPage: () => void;
  commentsPage: any;
}

const CalendarContext = createContext<CalendarData>({} as CalendarData);

export const CalendarProvider = ({ children }: CalendarProps) => {
  const [calendar, setCalendar] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentsPage, setCommentsPage] = useState<any>([]);
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
      .then((response) => {
        setComments(response.data);
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

  const createComment = (
    newComment: string,
    newScore: number,
    user: number,
    accessToken: string,
    name: string
  ) => {
    const newData = {
      comment: newComment,
      score: newScore,
      namePatient: name,
    };
    if (newComment.length < 10) {
      toast.error("Descreva com mais detalhes seu comentário");
    } else if (newComment.length > 100) {
      toast.error("Descreva com menos detalhes seu comentário");
    } else {
      api
        .post(`/professional/${user}/comments`, newData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => {
          searchComments(user, accessToken);
          setShow(!show);
          toast.success("Comentário criado com sucesso");
        })
        .catch((e) => toast.error("Erro ao criar o comentário"));
    }
  };

  const getCommentPage = () => {
    api
      .get(`/commentsPage`)
      .then((response) => setCommentsPage(response.data))
      .catch((e) => console.log(e));
  };

  const createCommentPage = (
    newComment: string,
    newScore: number,
    id: number,
    accessToken: string,
    name: string
  ) => {
    const newData = {
      userId: id,
      comment: newComment,
      score: newScore,
      namePatient: name,
    };
    if (newComment.length < 10) {
      toast.error("Descreva com mais detalhes seu comentário");
    } else if (newComment.length > 100) {
      toast.error("Descreva com menos detalhes seu comentário");
    } else {
      api
        .post(`/commentsPage`, newData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => {
          setShow(false);
          toast.success("Comentário criado com sucesso");
        })
        .catch((_) => toast.error("Erro ao criar o comentário"));
    }
  };

  const addMyCalendar = (
    data: any,
    professionalId: any,
    token: string,
    areas: string,
    name: string
  ) => {
    console.log(token);
    const newTime = { ...data, cancel: false, areas: areas, name: name };
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
    areas: string,
    name: string
  ) => {
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
        addMyCalendar(response.data, professionalId, token, areas, name);
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
        show,
        setShow,
        createCommentPage,
        getCommentPage,
        commentsPage,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);
