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
    professionalId: any,
    patientId: any,
    token: string,
    areas: string,
    name: string
  ) => void;
  check: (
    id: number,
    token: string,
    professionalId: number,
    patientId: number,
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
  const [commentsPage, setCommentsPage] = useState<any>([]);
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
    patientId: any,
    token: string,
    areas: string,
    name: string
  ) => {
    const newTime = {
      patientId: patientId,
      type: data.type,
      userId: data.userId,
      date: data.date,
      cancel: false,
      areas: areas,
      name: name,
    };
    console.log(newTime);
    api
      .post(`/patient`, newTime, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        searchDate(professionalId, token);
      })
      .catch((e) => console.log(e));
  };

  const check = (
    id: number,
    token: string,
    professionalId: number,
    patientId: number,
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
        // eslint-disable-next-line no-lone-blocks
        {
          console.log(response.data);
          addMyCalendar(
            response.data,
            professionalId,
            patientId,
            token,
            areas,
            name
          );
        }
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
