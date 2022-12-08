import { useParams } from 'react-router-dom';

function RouteDetails( {routes} ) {
  // const {name, image_url, location, time, distance, id} = routes
  // console.log(route)
  const params = useParams()
  console.log(params)
  // const details = routes.forEach((route) => {
  //   if (route.id === params.id) {
  //     return route
  //   }
  // })
  const details = routes.find((route) => {
    return parseInt(params.id) === route.id
  })
  
  
  console.log('details:', details)
  console.log('params:', params.id)
  return (
    <div>
      <h1>{details['name']}</h1>
      <img src={details['image_url']} alt="mapPhoto"/>
      <h2>{details['location']}</h2>
      <h3>{details['time']}</h3>
      <h3>{details['distance']} miles</h3>
    </div>
  )
}

export default RouteDetails;