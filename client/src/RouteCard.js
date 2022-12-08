import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Card  from 'react-bootstrap/Card';
import RouteDetails from './RouteDetails'
import { Link } from 'react-router-dom';

function RouteCard({ route }) {
  const {name, image_url, location, time, distance} = route

  return (
    <Wrapper>
      <WrapperChild>
        <Link to="/routes/:id">details</Link>
        <h1>{name}</h1>
        <img src={image_url} alt="routephoto"/>
        {/* <Routes>
        <Route exact path="/routes/:id" element={<RouteDetails routes={route}/>}/>
        </Routes> */}
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