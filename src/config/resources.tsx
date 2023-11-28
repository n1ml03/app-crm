import type { IResourceItem } from "@refinedev/core";

import {
    CalendarOutlined,
    CrownOutlined,
    DashboardOutlined,
    ProjectOutlined,
    ShopOutlined,
    TeamOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
    {
        name: "dashboard",
        list: "/",
        meta: {
            label: "Dashboard",
            icon: <DashboardOutlined />,
        },
    },
    {
        name: "events",
        list: "/calendar",
        create: "/calendar/create",
        edit: "/calendar/edit/:id",
        show: "/calendar/show/:id",
        meta: {
            label: "Calendar",
            icon: <CalendarOutlined />,
        },
    },
    {
        name: "scrumboard",
        meta: {
            label: "Scrumboard",
            icon: <ProjectOutlined />,
        },
    },

    {
        name: "tasks",
        list: "/scrumboard/kanban",
        create: "/scrumboard/kanban/create",
        edit: "/scrumboard/kanban/edit/:id",
        meta: {
            label: "Project Kanban",
            parent: "scrumboard",
        },
    },
    {
        name: "taskStages",
        create: "/scrumboard/kanban/stages/create",
        edit: "/scrumboard/kanban/stages/edit/:id",
        list: "/scrumboard/kanban",
        meta: {
            hide: true,
        },
    },
    {
        name: "companies",
        list: "/companies",
        show: "/companies/:id",
        create: "/companies/create",
        edit: "/companies/edit/:id",
        meta: {
            label: "Companies",
            icon: <ShopOutlined />,
        },
    },
    {
        name: "companies",
        identifier: "sales-companies",
        create: "/scrumboard/sales/create/company/create",
        meta: {
            hide: true,
        },
    },
    {
        name: "contacts",
        list: "/contacts",
        create: "/contacts/create",
        edit: "/contacts/edit/:id",
        show: "/contacts/show/:id",
        meta: {
            label: "Contacts",
            icon: <TeamOutlined />,
        },
    },
];
