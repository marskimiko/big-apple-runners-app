import { useParams } from 'react-router-dom';

function RouteDetails( {route} ) {
  console.log(route)
  const params = useParams()
  const userID = params.id
  console.log(params)
  return (
    <div>
      <h3>Details about route {userID}</h3>
      <h3>{route[params.id]}</h3>
    </div>
  )
}

export default RouteDetails;