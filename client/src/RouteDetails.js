import { useParams } from 'react-router-dom';
import ReviewContainer from './ReviewContainer'
import styled from "styled-components";

function RouteDetails( {routes} ) {
  const params = useParams()

  const details = routes.find((route) => parseInt(params.id) === route.id)
  console.log(details)

  const runnerReviews = routes.filter(route => {
    return route.reviews
    // console.log('route:',route.reviews)
  })

  console.log('review',runnerReviews)


  // const renderReviews = runnerReviews.forEach(runnerReview => {
  //   console.log(runnerReview)    
  // })

  // const renderReviews = runnerReviews.forEach(runnerReview => {
  //   return runnerReview
  // })

  // const reviewList = renderReviews.forEach(review => {
  //   for (let key in review) {
  //     console.log(`${key}: ${review[key]}`)
  //   }
  // })

  // function renderReviews() {
  //   runnerArray = runnerReviews.filter((review) => {
  //     const 
  //   })
  // }

  // const renderReviews = runnerReviews.forEach(runnerReview => {
  //   runnerReview.forEach(review => {
  //     for (let key in review) {
  //       return (`${key}: ${review[key]}`)
  //     }
  //   })
  // })

  // console.log(renderReviews)

  // console.log('render reviews:',renderReviews)

  function checkDetails() {
    if (details) {
      return (
        <div>
          <h2>{details['name']}</h2>
          <img src={details['image_url']} alt="mapPhoto"/>
          <h3>{details['location']}</h3>
          <h4>{details['time']}</h4>
          <h5>{details['distance']} miles</h5>
          <div></div>
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
