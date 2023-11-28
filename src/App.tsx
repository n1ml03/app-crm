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

const App: React.FC = () => {
    // This hook is used to automatically login the user.
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
