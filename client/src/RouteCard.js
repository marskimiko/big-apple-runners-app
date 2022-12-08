import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Card  from 'react-bootstrap/Card';

function RouteCard({ route }) {
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
    // <Card className="d-flex flex-row bd-highlight mb-3" style={styles.main}>
    //   <Card.Title>{name}</Card.Title>
    //   <Card.Img src={image_url}/>
    //   <Card.Text>{location}</Card.Text>
    //   <Card.Text>{time}</Card.Text>
    //   <Card.Text>{distance} miles</Card.Text>
    // </Card>
    <Wrapper>
      <WrapperChild>
        <h1>{name}</h1>
        <a href="/routes/:id"><img src={image_url} alt="routephoto"/></a>
        <h2>{location}</h2>
        <h2>{time}</h2>
        <h3>{distance}</h3>
      </WrapperChild>
    </Wrapper>

  )
}

export default RouteCard;

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;