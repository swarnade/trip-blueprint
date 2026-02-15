import Home from "./Pages/Home"
import Destination from "./Pages/Destination";
import Display from "./Pages/Display";
import Login from "./Pages/Login"
const Routes=[
{
    path:"/",
    element:<Home />
},
{
    path:"/destination",
    element:<Destination />
},
{
    path:"/:place/:date/:person",
    element:<Display />
},
{
    path:'/login',
    element:<Login />
}
]

export default Routes;