import MyRouteCard from "./MyRouteCard";
import {useParams} from 'react-router-dom'
function MyRouteContainer({currentUser}){
  
  
    return (
      <div className="routes">
        {currentUser.routes.map((route) => {
        return (
          <div className="container">
            <MyRouteCard key={route.id} route={route} />
          </div>
        )
      })}
      </div>
    )
}

export default MyRouteContainer

