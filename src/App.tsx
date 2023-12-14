import "./Styles/Main.sass"
import "./Styles/Reset.sass"
import Header from "./Components/Header/Header";
import {useState} from 'react'
import {BrowserRouter, Route, Routes, Navigate, Outlet} from "react-router-dom";
import {GeographicalObject} from "./Types";
import GeographicalObjectPage from "./Pages/GeographicalObject/GeographicalObject";
import GeographicalObjectListPage from "./Pages/GeographicalObjectList/GeographicalObjectList";
import ProfilePage from "./Pages/Profile/ProfilePage";
import HomePage from "./Pages/Home/Home";

import store from "./store/store"
import SignIn from "./Pages/Login/SignIn/SignIn";
import SignUp from "./Pages/Login/SignUp/SignUp";
import {Provider} from "react-redux"
import {QueryClient, QueryClientProvider} from "react-query";
import MarsStationList from "./Pages/MarsStationList/MarsStationList.tsx";
import MarsStationPage from "./Pages/MarsStation/MarsStation.tsx";
import GeographicalObjectPageForMarsStation from "./Pages/MarsStation/GeographicalObject/GeographicalObject.tsx";

// import LessonPage from "./Pages/";

const LoginFormLayout = () => {
    return (
        <div className="login-wrapper">
            <Outlet/>
        </div>
    )
}

function App() {
    const [selectedGeographicalObject, setSelectedGeographicalObject] = useState<GeographicalObject | undefined>(undefined)
    const [selectedMarsStation, setSelectedMarsStation] = useState<GeographicalObject | undefined>(undefined)
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <BrowserRouter basename="/mars">
                    <div className="App">
                        <div className="wrapper">
                            <Header/>
                            <div className={"content-wrapper"}>
                                <Routes>
                                    <Route path="/" element={<Navigate to="/home" replace/>}/>
                                    {/*Начальное меню*/}
                                    <Route path="/home" element={<HomePage/>}/>

                                    <Route path="/auth/" element={<LoginFormLayout/>}>
                                        <Route path="" element={<Navigate to="login/" replace/>}/>
                                        <Route path="login/" element={<SignIn/>}/>
                                        <Route path="register/" element={<SignUp/>}/>
                                    </Route>

                                    {/*Личный кабинет*/}
                                    <Route path="/profile/" element={<ProfilePage/>}/>
                                    {/*Список географических объектов*/}
                                    <Route path="/geographical_object/" element={<GeographicalObjectListPage/>}/>
                                    {/*Информация о географическом объекте*/}
                                    <Route path="/geographical_object/:id_geographical_object/"
                                           element={<GeographicalObjectPage
                                               selectedGeographicalObject={selectedGeographicalObject}
                                               setSelectedGeographicalObject={setSelectedGeographicalObject}/>}/>

                                    {/*Заявки*/}
                                    <Route path="/mars_station/" element={<MarsStationList/>}/>
                                    <Route path="/mars_station/:id_mars_station/"
                                           element={<MarsStationPage
                                               // @ts-ignore
                                               selectedMarsStation={selectedMarsStation}
                                               // @ts-ignore
                                               setSelectedMarsStation={setSelectedMarsStation}/>}/>

                                    <Route path="/mars_station/:id_mars_station/geographical_object/:id_geographical_object/"
                                           element={<GeographicalObjectPageForMarsStation
                                               selectedGeographicalObject={selectedGeographicalObject}
                                               setSelectedGeographicalObject={setSelectedGeographicalObject}/>}/>

                                </Routes>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        </QueryClientProvider>
    )
}

export default App
