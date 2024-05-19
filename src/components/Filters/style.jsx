import styled from "styled-components";

const StyledFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  margin-top: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }

  @media (max-width: 800px) {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }
`;

export { StyledFilters };
