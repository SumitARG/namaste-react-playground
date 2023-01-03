import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayoutComponent from "./AppLayoutComponent";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import LoginComponent from "./Components/LoginComponent/LoginComponent";
import PathErrorComponent from "./Components/PathErrorComponent/PathErrorComponent";
import ProfileComponent from "./Components/ProfileComponent/ProfileComponent";

const AboutUsComponent = lazy(() =>
  import("./Components/AboutUsComponent/AboutUsComponent")
);

const CardsContainer = lazy(() =>
  import("./Components/CardsContainer/CardsContainer")
);

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    errorElement: <PathErrorComponent />,
    children: [
      {
        index: true,
        // path: "/members-list",
        element: (
          <Suspense>
            <CardsContainer />
          </Suspense>
        ),
      },
      {
        path: "/team-member-details/:id",
        element: <DetailsPage />,
      },
      {
        path: "/about-us",
        element: (
          <Suspense>
            <AboutUsComponent />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <ProfileComponent name="Sumit Amit Gokhale" />,
          },
        ],
      },
      {
        path: "/login",
        element: <LoginComponent/>
      }
    ],
  },
]);

export default AppRouter;
