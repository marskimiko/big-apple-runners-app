import MyRouteCard from "./MyRouteCard";
import { useParams } from 'react-router-dom';

function MyRouteContainer() {
  // const params = useParams();
  // console.log(params)
  // const myRoutes = user.routes
  // // console.log(myRoutes)
  // console.log(user)
  
  // // const renderRoutes
  return (
    <div>
      <MyRouteCard />
    </div>
  )

  // function checkRoutes() {
  //   if (myRoutes) {
  //     return (
  //       <div>
  //         <MyRouteContainer />
  //       </div>
  //     )
  //   } else {
  //     return null
  //   }
  // }
  // return (checkRoutes())
}

export default MyRouteContainer;