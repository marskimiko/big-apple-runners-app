import styled from 'styled-components'
import Route from './Route'


function RouteContainer({ routes }) {

  return (
    <div>
      <CardContainer>
        {routes.map(route => <Route key={route.id} route={route}/>)}
      </CardContainer>
    </div>
  )
}

export default RouteContainer

const CardContainer = styled.ul`
    display:flex;
    flex-direction:column;

`