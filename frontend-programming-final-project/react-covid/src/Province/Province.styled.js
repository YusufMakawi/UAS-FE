import styled from "styled-components";

const ProvinceStyled = styled.div`
  margin: 5rem auto;
  padding: 10%;
  section {
    text-align: center;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 2.44rem;
    color: #06d6a0;
  }
  h3 {
    color: #052fa7;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }
  table,
  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
  }
  table {
    margin: 0 auto;
    border-collapse: collapse;
    width: 50rem;
  }
  th,
  td {
    padding: 15px;
  }
  th {
    color: #06d6a0;
  }
  .province__container {
    overflow-x: auto;
  }
  @media (min-width: 768px) {
    .province__container {
      padding: 0 10% 0 10%;
    }
  }
  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export default ProvinceStyled;