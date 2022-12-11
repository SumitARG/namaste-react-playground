import { createBrowserRouter } from "react-router-dom";
import AppLayoutComponent from "./AppLayoutComponent";
import CardsContainer from "./Components/CardsContainer/CardsContainer";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import PathErrorComponent from "./Components/PathErrorComponent/PathErrorComponent";

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
        }
      ]
    }
  ])

export default AppRouter