import RouteCard from './RouteCard'
// import RouteDetails from './RouteDetails'
import { Route, Routes } from 'react-router-dom';


function RouteContainer({ routes }) {
  

  // return (
  //   <div>
  //       {routes.map(route => <RouteCard key={route.id} route={route}/>)}    
  //   </div>
  // )
  return (
    <div classname="routes">
      {routes.map((route) => {
        return (
          <div>
            <RouteCard key={route.id} route={route} />
          </div>
        )
      })}
    </div>
  )
}

export default RouteContainer
