import "./MarsStation.sass"
import {Dispatch, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {DOMEN, requestTime} from "../../Consts";
import {GeographicalObject, MarsStation} from "../../Types";
import {useToken} from "../../hooks/useToken.ts";
import axios from "axios";
import {useAuth} from "../../hooks/useAuth.ts";
import {useDispatch} from "react-redux";
import {clearID_draft} from "../../store/GeographicalObject.ts";
import {cleanDraft} from "../../store/MarsStationDraft.ts";
import mockImage from "../../assets/mock.png";

const MarsStationPage = ({selectedMarsStation, setSelectedMarsStation}: {
    selectedMarsStation: MarsStation | undefined,
    setSelectedMarsStation: Dispatch<MarsStation | undefined>
}) => {
    const dispatch = useDispatch();

    const {id_geographical_object, id_mars_station} = useParams<{
        id_geographical_object: string;
        id_mars_station: string
    }>();
    const {is_moderator} = useAuth()
    const {access_token} = useToken()
    const [updateTrigger, setUpdateTrigger] = useState(false);
    const [isMock, setIsMock] = useState<boolean>(false);

    useEffect(() => {
        getMarsStation()
        if (updateTrigger) {
            // Вызываем код или обновление, которое должно произойти после успешного удаления
            // Например, здесь можно обновить список географических объектов или выполнить другие действия
            setUpdateTrigger(false);
        }
    }, [updateTrigger])

    if (id_geographical_object == undefined && id_mars_station == undefined) {
        return;
    }

    const getMarsStation = async () => {
        const url = `${DOMEN}api/mars_station/${id_mars_station}/`;
        await axios.get(url, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: access_token,
            },
            timeout: requestTime,
        })
            .then(response => {
                const mars_station: MarsStation = response.data;
                setSelectedMarsStation(mars_station);
                setIsMock(false);
                // console.log(mars_station)
            })
            .catch(error => {
                console.error("Ошибка!\n", error);
            });
    };

    const push_mars_station = () => {
        const url = `${DOMEN}api/mars_station/${id_mars_station}/update_by_user/`;
        const headers = {
            "Content-type": "application/json; charset=UTF-8",
            'authorization': access_token
        };
        axios.put(url, {},{headers})
            .then(response => {
                console.log("Успешно! Заявка отправлена!", response.data);
                setUpdateTrigger(true);
                dispatch(clearID_draft());
                dispatch(cleanDraft());
            })
            .catch(error => {
                console.error("Ошибка отправки!\n", error);
            });
    };

    const delete_mars_station = () => {
        const url = `${DOMEN}api/mars_station/${id_mars_station}/delete/`;
        const headers = {
            "Content-type": "application/json; charset=UTF-8",
            'authorization': access_token
        };
        axios.delete(url, {headers})
            .then(response => {
                console.log("Успешно! Заявка удалена!", response.data);
                setUpdateTrigger(true);
                dispatch(clearID_draft());
                dispatch(cleanDraft());
            })
            .catch(error => {
                console.error("Ошибка отправки!\n", error);
            });
    };

    const check_mars_station = (value: number) => {
        const url = `${DOMEN}api/mars_station/${id_mars_station}/update_by_admin/`;
        const headers = {
            "Content-type": "application/json; charset=UTF-8",
            'authorization': access_token
        };
        const data = {status_task: value}
        axios.put(url, data, {headers})
            .then(response => {
                console.log("Успешно! Заявка отправлена!", response.data);
                setUpdateTrigger(true);
                dispatch(clearID_draft());
            })
            .catch(error => {
                console.error("Ошибка отправки!\n", error);
            });
    };

    // Абсолютный путь для ссылки
    const marsStationPath = `/mars_station/${id_mars_station}/`;

    return (
        <div className="page-details-wrapper">
            <Link className="return-link" to="/mars_station">
                Назад
            </Link>
            {!is_moderator && selectedMarsStation?.status_task === "Черновик" && (
                <div className="button-agree">
                    <button onClick={() => push_mars_station()}>Отправить</button>
                </div>
            )}
            {!is_moderator && selectedMarsStation?.status_task === "Черновик" && (
                <div className="button-reject">
                    <button onClick={() => delete_mars_station()}>Удалить</button>
                </div>
            )}
            {is_moderator && selectedMarsStation?.status_task === "В работе" && (
                <div className="button-accept">
                    <button onClick={() => check_mars_station(3)}>Принять и завершить</button>
                </div>
            )}
            {is_moderator && selectedMarsStation?.status_task === "В работе" && (
                <div className="button-reject">
                    <button onClick={() => check_mars_station(4)}>Отменить</button>
                </div>
            )}
            <div className="right">
                <div className="info-container">
                    <h2 className="name"> Номер заявки: {selectedMarsStation?.id}</h2>
                    <h2 className="name"> Тип заявки: {selectedMarsStation?.type_status}</h2>
                    <br/>
                    <span className="type">Тип статуса заявки: {selectedMarsStation?.status_task}</span>
                    <span className="type">Тип статуса миссии: {selectedMarsStation?.status_mission}</span>
                    <span className="size">Дата создания заявки: {selectedMarsStation?.date_create} </span>
                    <span className="size">Дата формирования заявки: {selectedMarsStation?.date_form} </span>
                    <span className="size">Дата закрытия заявки: {selectedMarsStation?.date_close} </span>
                    <br/>
                    <h2> Модератор</h2>
                    <span className="size">
                      ФИО модератора: {(selectedMarsStation?.moderator as { full_name?: string })?.full_name || 'Нет данных'}
                    </span>
                    <span className="size">Должность: {(selectedMarsStation?.moderator as { post?: string })?.post || 'Нет данных'}</span>
                    <span className="size">Название организации: {(selectedMarsStation?.moderator as { name_organization?: string })?.name_organization || 'Нет данных'}</span>
                    <span className="size">Адрес: {(selectedMarsStation?.moderator as { address?: string })?.address || 'Нет данных'}</span>
                    <br/>
                    <h2> Транспорт</h2>
                    {/*TODO: ФОТО ТУТ ПОТОМ ПРИЛОЖИТЬ*/}
                    <span className="describe">Название: {(selectedMarsStation?.transport as { name?: string })?.name || 'Нет данных'}</span>
                    <span className="describe">Тип: {(selectedMarsStation?.transport as { type?: string })?.type || 'Нет данных'}</span>
                    <span className="describe">Описание: {(selectedMarsStation?.transport as { describe?: string })?.describe || 'Нет данных'}</span>
                    <br/>
                    <h2> Географические объекты</h2>
                    <div className="cards-list-wrapper">
                        <div className="bottom">
                            {selectedMarsStation?.geographical_object.map((geoObject: GeographicalObject) => (
                                <div className="card-wrapper">
                                    <div className="preview">
                                        <img src={isMock ? mockImage : geoObject.photo} alt=""/>
                                    </div>
                                    <div className="card-content">
                                        <div className="content-top">
                                            <h3 className="title"> {geoObject.feature} </h3>
                                        </div>
                                        <div className="content-bottom">
                                            <Link to={`${marsStationPath}/geographical_object/${geoObject.id}`}>
                                                Посмотреть
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarsStationPage;