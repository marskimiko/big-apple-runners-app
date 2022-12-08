import 'bootstrap/dist/css/bootstrap.min.css';
import Card  from 'react-bootstrap/Card';

function Route({ route }) {
  const {name, image_url, location, time, distance} = route

  const styles = {
    main: {
      display: "flex",
      width: "18rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center"
    }
  }

  return (
    <Card className="d-flex flex-row bd-highlight mb-3" style={styles.main}>
      <Card.Title>{name}</Card.Title>
      <Card.Img src={image_url}/>
      <Card.Text>{location}</Card.Text>
      <Card.Text>{time}</Card.Text>
      <Card.Text>{distance} miles</Card.Text>
    </Card>
  )
}

export default Route;