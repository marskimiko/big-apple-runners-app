import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { Link } from 'react-router-dom';

function RouteCard({ route }) {
  const {name, image_url, id} = route

  return (
    <Wrapper>
      <WrapperChild>
        <h2>{name}</h2>
        <Link to={`/routes/${id}`}><img src={image_url} alt="routephoto"/></Link>
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