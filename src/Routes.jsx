import Home from "./Pages/Home"
import Destination from "./Pages/Destination";
import Display from "./Pages/Display";
import History from "./Components/History";
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
    path:'/history',
    element:<History />
}
]

export default Routes;