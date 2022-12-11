import { useParams } from 'react-router-dom';
import ReviewContainer from './ReviewContainer'
// import styled from "styled-components";

function RouteDetails( {routes} ) {
  const params = useParams()

  const details = routes.find((route) => parseInt(params.id) === route.id)

  const detailReviews = details['reviews']

  function checkDetails() {
    if (details || detailReviews) {
      return (
        <div>
          <h2>{details['name']}</h2>
          <img src={details['image_url']} alt="mapPhoto"/>
          <h3>{details['location']}</h3>
          <h4>{details['time']}</h4>
          <h5>{details['distance']} miles</h5>
          <ReviewContainer detailReviews={detailReviews}/>
      </div>
      )
    }else {
      return null
    }
  }

  return(checkDetails())

}

export default RouteDetails;

// const Wrapper = styled.section`
//   max-width: 1000px;
//   margin: 40px auto;
//   padding: 16px;
//   display: flex;
//   gap: 24px;
// `;

// const WrapperChild = styled.div`
//   flex: 1;
// `;

//   return (
//     <Wrapper>
//       <WrapperChild>
//         <h2>{details['name']}</h2>
//         <img src={details['image_url']} alt="mapPhoto"/>
//         <h3>{details['location']}</h3>
//         <h4>{details['time']}</h4>
//         <h5>{details['distance']} miles</h5>
//         <ReviewContainer />
//       </WrapperChild>
//     </Wrapper>
//   )
// }
