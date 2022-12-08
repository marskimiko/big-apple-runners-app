import { useParams } from 'react-router-dom';

function RouteDetails( {routes} ) {
  const params = useParams()

  const details = routes.find((route) => {
    return parseInt(params.id) === route.id
  })

  // try to catch error VV (none of the ones below are working)
  
  // const details = routes.find((route) => {
  //   try {
  //     return parseInt(params.id) === route.id
  //   } catch(e) {
  //     Rollbar.error("Something went wrong", e) 
  //   }
  // })

  // const details = routes.find((route) => {
  //   if (typeof(route) === undefined) {
  //     return 'error'
  //   } else {
  //     return parseInt(params.id) === route.id
  //   }
  // })


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