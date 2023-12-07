import { InstantSearch } from "react-instantsearch";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { ErrorComponent, useNotificationProvider } from "@refinedev/antd";
import { Authenticated, Refine } from "@refinedev/core";
import {  DevtoolsProvider } from "@refinedev/devtools";
import routerProvider, {
    CatchAllNavigate,
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";

import { ConfigProvider, App as AntdApp } from "antd";

import "./utilities/init-dayjs";
import "./main.css";

import { resources, themeConfig } from "@/config";
import {
    authProvider,
    dataProvider,
    indexName,
    liveProvider,
    searchClient,
} from "@/providers";

import { FullScreenLoading, Layout } from "./components";
import {
    CalendarCreatePage,
    CalendarEditPage,
    CalendarPageWrapper,
    CalendarShowPage,
} from "./routes/calendar";
import {
    CompanyCreatePage,
    CompanyEditPage,
    CompanyListPage,
} from "./routes/companies";
import {
    ContactCreatePage,
    ContactShowPage,
    ContactsListPage,
} from "./routes/contacts";
import { DashboardPage } from "./routes/dashboard";
import { ForgotPasswordPage } from "./routes/forgot-password";
import { LoginPage } from "./routes/login";

import { RegisterPage } from "./routes/register";
import {
    KanbanCreatePage,
    KanbanCreateStage,
    KanbanEditPage,
    KanbanEditStage,
    KanbanPage,
} from "./routes/scrumboard/kanban";
import { UpdatePasswordPage } from "./routes/update-password";
import { useAutoLoginForDemo } from "./hooks";

import "@refinedev/antd/dist/reset.css";
import "./styles/antd.css";
import "./styles/fc.css";
import "./styles/index.css";
import axios, {AxiosRequestConfig} from "axios";
import React from "react";
import {About, Blogs, Booking, Contact, HeartHealth, Home, Hospitals, Service} from "./pages";
import {Testimonials} from "@/pages/Testimonials";
import {
    Gastroenterology,
    GeneralMedicine,
    Neurology,
    Oncology,
    Ophthalmology,
    Orthopedic, Pathology,
    Pediatric, PlasticSurgeons, Pulmonology, Nutrition, Cardiology
} from "@/pages/services";


const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (request.headers) {
        request.headers["Authorization"] = `Bearer ${token}`;
    } else {
        request.headers = {
            Authorization: `Bearer ${token}`,
        };
    }

    return request;
});

const App: React.FC = () => {
    // This hook is used to automatically log in the user.
    // We use this hook to skip the login page and demonstrate the application more quickly.
    const { loading } = useAutoLoginForDemo();

    if (loading) {
        return <FullScreenLoading />;
    }

    return (
        <InstantSearch searchClient={searchClient} indexName={indexName}>
            <BrowserRouter>
                <ConfigProvider theme={themeConfig}>
                    <AntdApp>
                        <DevtoolsProvider>
                            <Refine
                                authProvider={authProvider}
                                dataProvider={dataProvider}
                                liveProvider={liveProvider}
                                routerProvider={routerProvider}
                                resources={resources}
                                notificationProvider={useNotificationProvider}
                                options={{
                                    liveMode: "auto",
                                    syncWithLocation: true,
                                    warnWhenUnsavedChanges: true,
                                }}
                            >
                                <Routes>
                                    <Route path="/home" element={<Home/>}/>
                                    <Route path="/services" element={<Service/>}/>
                                    <Route path="/booking" element={<Booking/>}/>
                                    <Route path="/blogs" element={<Blogs/>}/>
                                    <Route path="/contact" element={<Contact/>}/>
                                    <Route path="/about" element={<About/>}/>
                                    <Route path="/testimonials" element={<Testimonials/>}/>
                                    <Route path="/hospitals" element={<Hospitals/>}/>
                                    <Route path="/services/pediatric" element={<Pediatric/>}/>
                                    <Route path="/services/cardiology" element={<Cardiology/>}/>
                                    <Route path="/services/gastroenterology" element={<Gastroenterology/>}/>
                                    <Route path="/services/generalmedicine" element={<GeneralMedicine/>}/>
                                    <Route path="/services/neurology" element={<Neurology/>}/>
                                    <Route path="/services/nutrition" element={<Nutrition/>}/>
                                    <Route path="/services/oncology" element={<Oncology/>}/>
                                    <Route path="/services/ophthalmology" element={<Ophthalmology/>}/>
                                    <Route path="/services/orthopedic" element={<Orthopedic/>}/>
                                    <Route path="/services/pathology" element={<Pathology/>}/>
                                    <Route path="/services/plasticsurgeons" element={<PlasticSurgeons/>}/>
                                    <Route path="/services/pulmonology" element={<Pulmonology/>}/>
                                    <Route path="/blogs/hearthealth" element={<HeartHealth/>}/>

                                    <Route
                                        element={
                                            <Authenticated
                                                key="authenticated-layout"
                                                fallback={
                                                    <CatchAllNavigate to="/login" />
                                                }
                                            >
                                                <Layout>
                                                    <Outlet />
                                                </Layout>
                                            </Authenticated>
                                        }
                                    >
                                        <Route
                                            index
                                            element={<DashboardPage />}
                                        />
                                        <Route
                                            path="/calendar"
                                            element={
                                                <CalendarPageWrapper>
                                                    <Outlet />
                                                </CalendarPageWrapper>
                                            }
                                        >
                                            <Route index element={null} />
                                            <Route
                                                path="show/:id"
                                                element={<CalendarShowPage />}
                                            />
                                            <Route
                                                path="edit/:id"
                                                element={<CalendarEditPage />}
                                            />
                                            <Route
                                                path="create"
                                                element={<CalendarCreatePage />}
                                            />
                                        </Route>
                                        <Route
                                            path="/scrumboard"
                                            element={<Outlet />}
                                        >
                                            <Route
                                                path="kanban"
                                                element={
                                                    <KanbanPage>
                                                        <Outlet />
                                                    </KanbanPage>
                                                }
                                            >
                                                <Route
                                                    path="create"
                                                    element={
                                                        <KanbanCreatePage />
                                                    }
                                                />
                                                <Route
                                                    path="edit/:id"
                                                    element={<KanbanEditPage />}
                                                />
                                                <Route
                                                    path="stages/create"
                                                    element={
                                                        <KanbanCreateStage />
                                                    }
                                                />
                                                <Route
                                                    path="stages/edit/:id"
                                                    element={
                                                        <KanbanEditStage />
                                                    }
                                                />
                                            </Route>
                                        </Route>
                                        <Route
                                            path="/companies"
                                            element={
                                                <CompanyListPage>
                                                    <Outlet />
                                                </CompanyListPage>
                                            }
                                        >
                                            <Route
                                                path="create"
                                                element={<CompanyCreatePage />}
                                            />
                                        </Route>
                                        <Route
                                            path="/companies/edit/:id"
                                            element={<CompanyEditPage />}
                                        />
                                        <Route
                                            path="/contacts"
                                            element={
                                                <ContactsListPage>
                                                    <Outlet />
                                                </ContactsListPage>
                                            }
                                        >
                                            <Route index element={null} />
                                            <Route
                                                path="show/:id"
                                                element={<ContactShowPage />}
                                            />
                                            <Route
                                                path="create"
                                                element={
                                                    <ContactCreatePage>
                                                        <Outlet />
                                                    </ContactCreatePage>
                                                }
                                            >
                                                <Route
                                                    path="company-create"
                                                    element={
                                                        <CompanyCreatePage
                                                            isOverModal
                                                        />
                                                    }
                                                />
                                            </Route>
                                        </Route>
                                        <Route
                                            path="*"
                                            element={<ErrorComponent />}
                                        />
                                    </Route>
                                    <Route
                                        element={
                                            <Authenticated
                                                key="authenticated-auth"
                                                fallback={<Outlet />}
                                            >
                                                <NavigateToResource resource="dashboard" />
                                            </Authenticated>
                                        }
                                    >
                                        <Route
                                            path="/login"
                                            element={<LoginPage />}
                                        />
                                        <Route
                                            path="/register"
                                            element={<RegisterPage />}
                                        />
                                        <Route
                                            path="/forgot-password"
                                            element={<ForgotPasswordPage />}
                                        />
                                        <Route
                                            path="/update-password"
                                            element={<UpdatePasswordPage />}
                                        />
                                    </Route>
                                </Routes>
                                <UnsavedChangesNotifier />
                                <DocumentTitleHandler />
                            </Refine>
                        </DevtoolsProvider>
                    </AntdApp>
                </ConfigProvider>
            </BrowserRouter>
        </InstantSearch>
    );
};

export default App;
