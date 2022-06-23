import styled from "styled-components";

const CardStyled = styled.div`
  margin-bottom: 1rem;
  /* margin: 2rem; */
  .card {
    max-width: 100%;
    height: auto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 30px;
    margin-right: 5%;
  }
  h3 {
    color: #0fc4ff;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  :nth-child(1) .card_data {
    color: #ffb700;
  }
  :nth-child(2) .card_data {
    color: #03ffbc;
  }
  :nth-child(3) .card_data {
    color: #fa19e7;
  }

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export default CardStyled;