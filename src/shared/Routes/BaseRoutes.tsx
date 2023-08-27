import { RouteObject, createBrowserRouter } from "react-router-dom";

const PUBLIC_ROUTE: RouteObject[] = [
    {
        index: true,
        async lazy() {
            let { LoginContainer } = await import("../../Views/Login/LoginContainer");
            return {
                Component: LoginContainer
            }
        }
    },
    {
        path: "*",
        async lazy() {
            let { PageNotFound } = await import("../components/ErrorHandling/Page404NotFound");
            return {
                Component: PageNotFound
            }
        }
    }
];

const AUTHENTICATED_ROUTE: RouteObject[] = [
    {
        path: "/dashboard",
        async lazy() {
            let { LayoutContainer } = await import("../layouts/LayoutContainer/LayoutContainer");
            return {
                Component: LayoutContainer
            }
        },
        children: [
            {
                index: true,
                async lazy() {
                    let { AppDashboardContainer } = await import("../../Views/AppDashboard/AppDashboardContainer");
                    return {
                        Component: AppDashboardContainer
                    }
                }
            }
        ]
    }
]

const AppRoutes = createBrowserRouter([...AUTHENTICATED_ROUTE, ...PUBLIC_ROUTE]);

export default AppRoutes;