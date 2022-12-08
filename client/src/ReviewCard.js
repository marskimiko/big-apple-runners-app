import styled from "styled-components";

function ReviewCard({ review }) {
  const {title, body} = review;

  return (
    <div>
      <h3>{title}</h3>
      <h4>{body}</h4>
    </div>
  )
}

export default ReviewCard;

// const CardContainer = styled.section`
//   width: 1000px;
//   margin: 40px auto;
//   padding: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 24px;
//   border-color: black;
// `;