import { createBrowserRouter } from "react-router-dom";
import AppLayoutComponent from "./AppLayoutComponent";
import AboutUsComponent from "./Components/AboutUsComponent/AboutUsComponent";
import CardsContainer from "./Components/CardsContainer/CardsContainer";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import PathErrorComponent from "./Components/PathErrorComponent/PathErrorComponent";
import ProfileComponent from "./Components/ProfileComponent/ProfileComponent";

const AppRouter = createBrowserRouter([
    {
      path:"/",
      element: <AppLayoutComponent/>,
      errorElement: <PathErrorComponent/>,
      children: [
        {
          path:"/members-list",
          element:<CardsContainer/>,
        },
        {
          path:"/team-member-details/:id",
          element:<DetailsPage/>, 
        },
        {
          path:"/about-us",
          element: <AboutUsComponent/>,
          children: [
            {
              path:"profile",
              element: <ProfileComponent name="Sumit Amit Gokhale"/>
            }
          ]
        }
      ]
    }
  ])

export default AppRouter