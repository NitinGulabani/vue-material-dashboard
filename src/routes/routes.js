import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import AddMainMenu from "@/pages/AddEditMenu/AddMainMenu.vue";
import AddSubMenu from "@/pages/AddEditMenu/AddSubMenu.vue";
import AddChildSubMenu from "@/pages/AddEditMenu/AddChildSubMenu.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",

    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { title: "Welcome" },
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "menulist",
        name: "Menu List",
        component: TableList,
      },
      {
        path: "addmainmenu",
        name: "Add Main Menu",
        component: AddMainMenu,
      },
      {
        path: "addmainmenu/:id",
        name: "Add Main Menu",
        component: AddMainMenu,
      },
      {
        path: "addsubmenu",
        name: "Add Sub Menu",
        component: AddSubMenu,
      },
      {
        path: "addsubmenu/:id",
        name: "Add Sub Menu",
        component: AddSubMenu,
      },
      {
        path: "addchildsubmenu",
        name: "Add Child Sub Menu",
        component: AddChildSubMenu,
      },
      {
        path: "addchildsubmenu/:id",
        name: "Add Child Sub Menu",
        component: AddChildSubMenu,
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true,
        },
        component: Maps,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
      },
    ],
  },
];

export default routes;
