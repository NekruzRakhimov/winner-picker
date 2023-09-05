import ExcelImporter from "../pages/ExcelImporter";
import IDPickerDashboard from "../pages/IDPickerDashboard";
import FirstPage from "../pages/first_page";
import SecondPage from "../pages/second_page";

export const privateRoutes = [
    {path: "/*", component: IDPickerDashboard},
    {path: "/dashboard", component: IDPickerDashboard, exact: true},
    // {path: "/first_page", component: FirstPage, exact: true},
    {path: "/second_page", component: SecondPage, exact: true}
]

export const publicRoutes = [
    {path: "/*", component: ExcelImporter},
    {path: "/excel_importer", component: ExcelImporter, exact: true},
    {path: "/first_page", component: FirstPage, exact: true},
    // {path: "/second_page", component: SecondPage, exact: true}
]