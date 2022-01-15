import HomePage from "../components/HomePage";
import Add from "../components/Add";
import View from "../components/View";

const RoutesArray = [{
    key:1,
    path: "/",
    element: <HomePage/>,
  },
  {
    key:2,
    path: "/add",
    element: <Add/>,
  },
  {
    key:3,
    path: "/view",
    element: <View/>,
  }];
  

export default RoutesArray
