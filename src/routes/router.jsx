import { createBrowserRouter } from "react-router-dom";
//components
import Error from "../components/Error";

//pages
import {
  Home,
  Home2,
  Services,
  ServiceDetails,
  Blogs,
  BlogsDetails,
  About,
  Contact,
  Team,
  FAQ,
  Pricing,
  Cases,
  CaseDetails,
} from "../pages";
//layout
import { Main, HomeLayout, HomeLayout2, OtherPages } from "../Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <HomeLayout>
            <Home />
          </HomeLayout>
        ),
        errorElement: <Error />,
      },
      {
        path: "/index-2",
        element: (
          <HomeLayout2>
            <Home2 />
          </HomeLayout2>
        ),
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: (
          <OtherPages>
            <About />
          </OtherPages>
        ),
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: (
          <OtherPages>
            <Contact />
          </OtherPages>
        ),
        errorElement: <Error />,
      },
      {
        path: "/team",
        element: (
          <OtherPages>
            <Team />
          </OtherPages>
        ),
        errorElement: <Error />,
      },
      {
        path: "/faq",
        element: (
          <OtherPages>
            <FAQ />
          </OtherPages>
        ),
        errorElement: <Error />,
      },
      {
        path: "/price",
        element: (
          <OtherPages>
            <Pricing />
          </OtherPages>
        ),
        errorElement: <Error />,
      },
      {
        path: "/services",
        element: (
          <OtherPages>
            <Services />
          </OtherPages>
        ),
        errorElement: <Error />,
      },
      {
        path: "/service-details",
        element: (
          <OtherPages>
            <ServiceDetails />
          </OtherPages>
        ),
        errorElement: <Error />,
      },
      {
        path: "/cases",
        element: (
          <OtherPages>
            <Cases />
          </OtherPages>
        ),
        errorElement: <Error />,
      },
      {
        path: "/case-details",
        element: (
          <OtherPages>
            <CaseDetails />
          </OtherPages>
        ),
        errorElement: <Error />,
      },
      {
        path: "/blog",
        element: (
          <OtherPages>
            <Blogs />
          </OtherPages>
        ),
        errorElement: <Error />,
      },
      {
        path: "/blog-details",
        element: (
          <OtherPages>
            <BlogsDetails />
          </OtherPages>
        ),
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
