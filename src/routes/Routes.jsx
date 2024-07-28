import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../BreadCrumbs/Home";
import Project from "../BreadCrumbs/Project";
import Task from "../BreadCrumbs/Task";


export const router = createBrowserRouter([
    {
        path:'/home',
        element:<Home />,
        children:[
            {
                path:'project',
                element:<Project />,
                children:[
                    {
                        path:'task',
                        element:<Task />
                    }
                ]
            }
        ]

    }
])