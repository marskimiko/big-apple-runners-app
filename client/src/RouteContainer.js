import { Route } from 'react-router-dom';
import styled from 'styled-components'

function RouteContainer({ routes }) {

  return (
    <div>
      <CardContainer>
        {routes.map(route => <Route key={route.id} route={route}/>)}
      </CardContainer>
    </div>
  )
}

const CardContainer = styled.ul`
    display:flex;
    flex-direction:column;

`


export default RouteContainer