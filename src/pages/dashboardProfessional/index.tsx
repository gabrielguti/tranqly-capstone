/* eslint-disable array-callback-return */
import moment from "moment";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaRegClock, FaTimes } from "react-icons/fa";
import Bar from "../../components/bar";
import Button from "../../components/button";
import CardComments from "../../components/CardComments";
import CardProfessionalData from "../../components/cardProfessionalData";
import { ProfessionalModal } from "../../components/professionalModal";
import UserEditModal from "../../components/userEditModal";
import { UseAuth } from "../../providers/authProvider";
import { useCalendar } from "../../providers/calendarProvider";
import { useClientCard } from "../../providers/clientProvider";
import api from "../../services/api";
import { Calendar, Modal, Comments } from "./styles";

const DashboardProfessional = () => {
  const { searchDate, searchComments, calendar, comments } = useCalendar();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("event");
  const { accessToken } = UseAuth();
  const getProfessionalStorage = JSON.parse(
    localStorage.getItem("@tranqyl:user") || ""
  );
  let ref: string[] = [];
  let now = new Date();

  const [newGender, setNewGender] = useState(getProfessionalStorage.gender);
  const [newProfession, setNewProfessional] = useState(
    getProfessionalStorage.profession
  );
  const [newAreas, setNewAreas] = useState(getProfessionalStorage.areas);
  const [newDescription, setNewDescription] = useState(
    getProfessionalStorage.description
  );
  const [newPrice, setNewPrice] = useState<number>(
    getProfessionalStorage.price
  );
  const [newLanguage, setNewLanguage] = useState(
    getProfessionalStorage.language
  );
  const [newState, setNewState] = useState(getProfessionalStorage.state);
  const [newCrp, setNewCrp] = useState(getProfessionalStorage.crp);
  const [newZoom, setNewZoom] = useState(getProfessionalStorage.zoom);
  const [newPasswordZoom, SetNewPasswordZoom] = useState(
    getProfessionalStorage.passwordZoom
  );
  const [showUser, setShowUser] = useState<boolean>(false);
  const [showProf, setShowProf] = useState<boolean>(false);
  const { userEdit, setUserEdit } = useClientCard();

  const changeEdit = () => {
    setUserEdit(!userEdit);
  };

  const changeShowUser = () => {
    setShowUser(!showUser);
  };

  const changeShowProf = () => {
    setShowProf(!showProf);
  };

  const newData = () => {
    const data = {
      gender: newGender,
      profession: newProfession,
      areas: newAreas,
      description: newDescription,
      price: Number(newPrice),
      language: newLanguage,
      state: newState,
      crp: newCrp,
      zoom: newZoom,
      passwordZoom: newPasswordZoom,
    };
    api
      .patch(`/users/${getProfessionalStorage.id}`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((r) => {
        localStorage.setItem("@tranqyl:user", JSON.stringify(r.data));
        setShowUser(false);
        setShowProf(false);
        toast.success("Altera????es salvas com sucesso");
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    searchDate(Number(getProfessionalStorage.id), accessToken);
    searchComments(Number(getProfessionalStorage.id), accessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formed = calendar
    .slice()
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1));

  const activateModal = (type: string) => {
    setShowModal(!showModal);
    setModalType(type);
  };

  return (
    <>
      <Bar />
      <CardProfessionalData
        professional={getProfessionalStorage}
        changeShowUser={changeShowUser}
        changeShowProf={changeShowProf}
        changeEdit={changeEdit}
      />
      <Calendar>
        <div className="tittle">
          <p>Minha agenda</p>
          <button
            className="newAval"
            onClick={() => activateModal("availability")}
          >
            +
          </button>
        </div>
        <div className="container">
          {formed.length > 0 ? (
            <>
              {formed.map((item, index) => {
                if (
                  !ref.includes(moment(item.date).format("l")) &&
                  ref.push(moment(item.date).format("l"))
                ) {
                  return (
                    <div key={index} className="week">
                      <div className="day">
                        <p>{moment(item.date).format("ddd")}</p>
                      </div>
                      <div className="times">
                        {formed
                          .filter(
                            (newFiltered) =>
                              moment(newFiltered.date).format("L") ===
                              moment(item.date).format("L")
                          )
                          .map((m, secondIndex) => {
                            return (
                              <div
                                className={
                                  m.type === false
                                    ? "purple"
                                    : moment(m.date)
                                        .format()
                                        .replace(/\D/g, "") >
                                      moment(now).format().replace(/\D/g, "")
                                    ? "green"
                                    : "yellow"
                                }
                                key={secondIndex}
                              >
                                <p>{moment(m.date).format("DD/MM/YYYY")}</p>
                                <span className="check">
                                  {moment(m.date).format("LT")}
                                </span>
                                <div className="moreInfos">
                                  {m.namePatient ? (
                                    <h2>{m.namePatient}</h2>
                                  ) : (
                                    <p>Sem informa????es</p>
                                  )}
                                  {m.comment ? <p>{m.comment}</p> : <></>}
                                  {m.email ? <b>{m.email}</b> : <></>}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  );
                }
              })}
            </>
          ) : (
            <div className="nothingHere">
              <FaRegClock />
              <h1>N??o h?? horarios dispon??veis com este especialista... </h1>
            </div>
          )}
        </div>
      </Calendar>
      <Comments>
        <h1>Coment??rios sobre voc??</h1>
        <div className="containerComment">
          {comments.map((item) => {
            return <CardComments comments={item} />;
          })}
        </div>
      </Comments>
      {showModal && (
        <ProfessionalModal
          activateModal={activateModal}
          modalType={modalType}
          searchDate={searchDate}
        />
      )}
      {userEdit && (
        <UserEditModal userEdit={userEdit} setUserEdit={setUserEdit} />
      )}
      {showUser && (
        <Modal>
          <div>
            <FaTimes onClick={() => setShowUser(!showUser)} />
            <label>
              G??nero
              <input
                value={newGender}
                onChange={(e) => setNewGender(e.target.value)}
                placeholder="Genero"
              />
            </label>
            <label>
              Estado
              <input
                value={newState}
                onChange={(e) => setNewState(e.target.value)}
                placeholder="Estado"
              />
            </label>
            <label>
              Idioma
              <input
                value={newLanguage}
                onChange={(e) => setNewLanguage(e.target.value)}
                placeholder="Idioma"
              />
            </label>
            <label>
              Profiss??o
              <input
                value={newProfession}
                onChange={(e) => setNewProfessional(e.target.value)}
                placeholder="Profiss??o"
              />
            </label>
            <Button onClick={newData}>Atualizar dados</Button>
          </div>
        </Modal>
      )}
      {showProf && (
        <Modal>
          <div>
            <FaTimes onClick={() => setShowProf(!showProf)} />
            <label>
              Descri????o
              <textarea
                className="description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Descri????o"
              />
            </label>
            <label>
              Especialidades
              <input
                value={newAreas}
                onChange={(e) => setNewAreas(e.target.value)}
                placeholder="Especialidades"
              />
            </label>
            <label>
              Pre??o
              <input
                value={newPrice}
                onChange={(e) => setNewPrice(Number(e.target.value))}
                placeholder="Pre??o"
              />
            </label>
            <label>
              CRP
              <input
                value={newCrp}
                onChange={(e) => setNewCrp(e.target.value)}
                placeholder="CRP"
              />
            </label>
            <label>
              Zoom
              <input
                value={newZoom}
                onChange={(e) => setNewZoom(e.target.value)}
                placeholder="Zoom"
              />
            </label>
            <label>
              Senha do Zoom
              <input
                value={newPasswordZoom}
                onChange={(e) => SetNewPasswordZoom(e.target.value)}
                placeholder="Senha do Zoom"
              />
            </label>
            <Button onClick={newData}>Atualizar dados</Button>
          </div>
        </Modal>
      )}
    </>
  );
};
export default DashboardProfessional;
