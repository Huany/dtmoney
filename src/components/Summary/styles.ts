import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  div {
    background: var(--white);
    padding: 1.5rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    &.highlight-background {
      background: var(--green);
      color: var(--white);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
      display: block;
    }
  }
`;
