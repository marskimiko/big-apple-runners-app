import RouteCard from './RouteCard'
// import RouteDetails from './RouteDetails'
import { Route, Routes } from 'react-router-dom';


function RouteContainer({ routes }) {
  

  return (
    <div>
        {routes.map(route => <RouteCard key={route.id} route={route}/>)}
    
      {/* <Routes>
        <Route exact path="/routes/1" element={<RouteDetails />}/>
      </Routes> */}
    
    </div>
  )
}

export default RouteContainer
