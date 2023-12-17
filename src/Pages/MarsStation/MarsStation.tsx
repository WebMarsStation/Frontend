import "./MarsStation.sass"
import {Dispatch, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {DOMEN, requestTime} from "../../Consts";
import {GeographicalObject, MarsStation, Location} from "../../Types";
import {useToken} from "../../hooks/useToken.ts";
import axios from "axios";
import {useAuth} from "../../hooks/useAuth.ts";
import {useDispatch} from "react-redux";
import {clearID_draft} from "../../store/GeographicalObject.ts";
import {cleanDraft, updateMarsStationDraftData} from "../../store/MarsStationDraft.ts";
import mockImage from "../../assets/mock.png";
import DeleteIcon from "@mui/icons-material/Delete";
import {Button, ButtonGroup} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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

    const GeographicalObjects: GeographicalObject[] | undefined = selectedMarsStation?.geographical_object;
    const Locations: Location[] | undefined = selectedMarsStation?.location;

    // Создаем объект, где ключ - это id_geographical_object, а значение - сам объект geographical_object
    let geographicalObjectMap: any = {};
    if (GeographicalObjects) {
        // Создаем объект, где ключ - это id_geographical_object, а значение - сам объект geographical_object
        GeographicalObjects.forEach((geoObject) => {
            geographicalObjectMap[geoObject.id] = geoObject;
        });
    }
    let sortedLocations: Location[] = [];
    if (Locations) {
        sortedLocations = [...Locations].sort((a, b) => a.sequence_number - b.sequence_number);
        console.log(sortedLocations);
    }

    // console.log(GeographicalObjects)
    // console.log(Locations)

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
        axios.put(url, {}, {headers})
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

    const delete_location_and_mars_station = async (id_location: number, id_mars_station: number) => {
        const url = `${DOMEN}api/location/${id_location}/mars_station/${id_mars_station}/delete/`;
        await axios.delete(url, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: access_token,
            },
        })
            .then(response => {
                console.log("Успешно удалено с черновой заявки!", response.data);
                dispatch(updateMarsStationDraftData({
                    geographical_object: response.data.geographical_object || [],
                    location: response.data.location || [],
                }));
                setUpdateTrigger(true);
            })
            .catch(error => {
                console.error("Ошибка!\n", error);
            })
    };

    const put_location_and_mars_station = async (id_location: number, id_mars_station: number, direction: string) => {
        const url = `${DOMEN}api/location/${id_location}/mars_station/${id_mars_station}/update/`;
        const data = {direction: direction}
        await axios.put(url, data, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: access_token,
            },
        })
            .then(response => {
                console.log("Успешно обновлены черновой заявки!", response.data);
                dispatch(updateMarsStationDraftData({
                    geographical_object: response.data.geographical_object || [],
                    location: response.data.location || [],
                }));
                setUpdateTrigger(true);
            })
            .catch(error => {
                console.error("Ошибка!\n", error);
            })
    };

    // Абсолютный путь для ссылки
    const marsStationPath = `/mars_station/${id_mars_station}/`;

    // !TODO: Выбрать тип транспорта еще добавить
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
                    <span
                        className="size">Должность: {(selectedMarsStation?.moderator as { post?: string })?.post || 'Нет данных'}</span>
                    <span
                        className="size">Название организации: {(selectedMarsStation?.moderator as { name_organization?: string })?.name_organization || 'Нет данных'}</span>
                    <span
                        className="size">Адрес: {(selectedMarsStation?.moderator as { address?: string })?.address || 'Нет данных'}</span>
                    <br/>
                    <h2> Транспорт</h2>
                    <span
                        className="describe">Название: {(selectedMarsStation?.transport as { name?: string })?.name || 'Нет данных'}</span>
                    <span
                        className="describe">Тип: {(selectedMarsStation?.transport as { type?: string })?.type || 'Нет данных'}</span>
                    <span
                        className="describe">Описание: {(selectedMarsStation?.transport as { describe?: string })?.describe || 'Нет данных'}</span>
                    <br/>
                    <h2> Географические объекты</h2>
                    <div className="cards-list-wrapper">
                        <div className="bottom">
                            {sortedLocations?.map((location: any) => (
                                <div className="card-wrapper">
                                    <Link
                                        to={`${marsStationPath}/geographical_object/${geographicalObjectMap[location.id_geographical_object].id}`}
                                        style={{textDecoration: 'none', color: 'inherit'}}>
                                        <div className="preview">
                                            <img
                                                src={isMock ? mockImage : geographicalObjectMap[location.id_geographical_object].photo}
                                                alt=""/>
                                        </div>
                                        <div className="card-content">
                                            <div className="content-top">
                                                <h3 className="title"> {geographicalObjectMap[location.id_geographical_object].feature} </h3>
                                            </div>
                                        </div>
                                    </Link>
                                    {selectedMarsStation?.status_task === "Черновик" && (
                                        <div className="card-content"
                                             style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <ButtonGroup orientation="horizontal">

                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    onClick={() => put_location_and_mars_station(location.id, location.id_mars_station, 'up')}
                                                >
                                                    <KeyboardArrowLeftIcon/>
                                                </Button>
                                                <Button
                                                    variant="outlined"
                                                    color="secondary"
                                                    onClick={() => delete_location_and_mars_station(location.id, location.id_mars_station)}
                                                >
                                                    <DeleteIcon/>
                                                </Button>
                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    onClick={() => put_location_and_mars_station(location.id, location.id_mars_station, 'down')}
                                                >
                                                    <KeyboardArrowRightIcon/>
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    )}
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