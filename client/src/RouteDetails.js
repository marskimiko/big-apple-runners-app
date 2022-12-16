import { useParams } from 'react-router-dom';
import ReviewContainer from './ReviewContainer'
import NewReview from './NewReview';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function RouteDetails( {routes, setRoutes, user} ) {
  const params = useParams()


  const details = routes.find((route) => parseInt(params.id) === route.id)

  function checkDetails() {
    if (details) {
      return (
        <div>
          <div className="container">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={details['image_url']} alt="mapPhoto"/>
            <Card.Body>
              <Card.Title>{details['name']}</Card.Title>
              <Card.Text>{details['location']}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Time: {details['time']}</ListGroup.Item>
              <ListGroup.Item>Distance: {details['distance']} miles</ListGroup.Item>
            </ListGroup>
          </Card>
          </div>

          <ReviewContainer 
            detailReviews={details['reviews']} 
            setRoutes={setRoutes} 
            routes={routes}
            user={user}
          />

          <NewReview 
            setRoutes={setRoutes} 
            routes={routes}
          />
      </div>
      )
    } else {
      return null
    }
  }

  return(checkDetails())

}

export default RouteDetails;
