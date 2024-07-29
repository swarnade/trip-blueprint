import Home from "./Pages/Home"
import Destination from "./Pages/Destination";
import Display from "./Pages/Display";
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
}
]

export default Routes;