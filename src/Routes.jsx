import Home from "./Pages/Home"
import Destination from "./Pages/Destination";
import Display from "./Pages/Display";
import Login from "./Pages/Login"
import SignUp from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
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
,{
    path:'/signup',
    element:<SignUp />
},
{
    path:'/dashboard',
    element:<Dashboard />
}
]

export default Routes;